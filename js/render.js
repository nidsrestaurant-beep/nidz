// Renders dish content from js/menu-data.js into the page.
document.addEventListener('DOMContentLoaded', () => {

  const catLabel = (id) => (MENU_CATEGORIES.find(c => c.id === id) || {}).label || id;

  /* Featured dishes on the homepage */
  const featuredWrap = document.getElementById('featured-grid');
  if (featuredWrap) {
    const featuredIds = ['nidz-special', 'beast-shawarma', 'phoenix', 'beef-shawarma', 'kabab', 'picasso'];
    featuredWrap.innerHTML = featuredIds.map((id, i) => {
      const d = MENU_ITEMS.find(m => m.id === id);
      if (!d) return '';
      return dishCard(d, i);
    }).join('');
  }

  /* Full menu grid with category filters */
  const menuWrap = document.getElementById('menu-grid');
  if (menuWrap) {
    const renderMenu = (cat) => {
      const items = cat === 'all' ? MENU_ITEMS : MENU_ITEMS.filter(m => m.category === cat);
      menuWrap.innerHTML = items.map((d, i) => dishCard(d, i)).join('');
      const revealEls = menuWrap.querySelectorAll('.reveal');
      revealEls.forEach(el => el.classList.add('in'));
    };
    renderMenu('all');
    document.querySelectorAll('.menu-filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.menu-filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderMenu(btn.dataset.filter);
      });
    });
  }

  /* Gallery masonry from dish images */
  const galleryWrap = document.getElementById('gallery-grid');
  if (galleryWrap) {
    galleryWrap.innerHTML = MENU_ITEMS.map(d => `
      <figure class="masonry-item reveal" data-cat="${d.category}" data-name="${d.name}">
        <img src="${d.img}" alt="${d.name} — Nid'Z Restaurant" loading="lazy" width="500" height="500">
        <figcaption class="cap">${d.name}</figcaption>
      </figure>
    `).join('');
    const revealEls = galleryWrap.querySelectorAll('.reveal');
    revealEls.forEach(el => el.classList.add('in'));
    // re-init lightbox + filters now that items exist
    document.dispatchEvent(new Event('gallery-rendered'));
    initGalleryInteractions();
  }

  /* Order / payment list */
  const orderWrap = document.getElementById('order-grid');
  if (orderWrap) {
    orderWrap.innerHTML = MENU_ITEMS.map(d => `
      <div class="order-item reveal in">
        <img src="${d.img}" alt="${d.name}" loading="lazy" width="76" height="76">
        <div class="info">
          <h4>${d.name}</h4>
          <span class="price">${d.price}</span>
        </div>
        <a class="btn btn-flame btn-sm" target="_blank" rel="noopener"
           href="${d.stripeLink || NIDZ.stripeDefaultLink}">Buy Now</a>
      </div>
    `).join('');
  }

  function dishCard(d, i) {
    return `
      <article class="card dish-card reveal" style="--i:${i % 6}">
        <div class="dish-media">
          ${d.badge ? `<span class="dish-badge">${d.badge}</span>` : ''}
          <span class="dish-price">${d.price}</span>
          <img src="${d.img}" alt="${d.name} — Nid'Z Restaurant, Batumi" loading="lazy" width="400" height="300">
        </div>
        <div class="dish-body">
          <span class="dish-cat">${catLabel(d.category)}</span>
          <h3>${d.name}</h3>
          <p>${d.desc}</p>
        </div>
      </article>`;
  }

  function initGalleryInteractions() {
    // Lightbox
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
      const items = Array.from(document.querySelectorAll('.masonry-item'));
      const lbImg = lightbox.querySelector('img');
      const lbCap = lightbox.querySelector('.lightbox-cap');
      let cur = 0;
      const open = (i) => {
        cur = i;
        const item = items[cur];
        lbImg.src = item.querySelector('img').src;
        lbImg.alt = item.dataset.name || '';
        if (lbCap) lbCap.textContent = item.dataset.name || '';
        lightbox.classList.add('open');
        document.body.style.overflow = 'hidden';
      };
      const close = () => { lightbox.classList.remove('open'); document.body.style.overflow = ''; };
      const step = (dir) => { cur = (cur + dir + items.length) % items.length; open(cur); };
      items.forEach((item, i) => item.addEventListener('click', () => open(i)));
      lightbox.querySelector('.lightbox-close')?.addEventListener('click', close);
      lightbox.querySelector('.lightbox-prev')?.addEventListener('click', () => step(-1));
      lightbox.querySelector('.lightbox-next')?.addEventListener('click', () => step(1));
      lightbox.addEventListener('click', (e) => { if (e.target === lightbox) close(); });
      document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('open')) return;
        if (e.key === 'Escape') close();
        if (e.key === 'ArrowLeft') step(-1);
        if (e.key === 'ArrowRight') step(1);
      });
    }
    // Filters
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const cat = btn.dataset.filter;
        document.querySelectorAll('.masonry-item').forEach(item => {
          const show = cat === 'all' || item.dataset.cat === cat;
          item.style.display = show ? '' : 'none';
        });
      });
    });
  }
});
