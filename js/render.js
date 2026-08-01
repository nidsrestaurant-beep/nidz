// Renders dish content from js/menu-data.js into the page, in the active language.
(function () {

  function currentLang() {
    return (typeof nidzGetLang === "function") ? nidzGetLang() : "en";
  }

  function catLabel(id, lang) {
    const cat = MENU_CATEGORIES.find(c => c.id === id);
    return cat ? (cat.label[lang] || cat.label.en) : id;
  }

  function mediaMarkup(d, name) {
    if (d.img) {
      return `<img src="${d.img}" alt="${name} — Nid'Z Restaurant, Batumi" loading="lazy" width="400" height="400">`;
    }
    return `<div class="dish-emoji" aria-hidden="true">${d.emoji || "🍽️"}</div>`;
  }

  function dishCard(d, i, lang) {
    const name = d.name[lang] || d.name.en;
    const desc = d.desc ? (d.desc[lang] || d.desc.en) : "";
    const badge = d.badge ? (d.badge[lang] || d.badge.en) : null;
    return `
      <article class="card dish-card reveal in" style="--i:${i % 6}">
        <div class="dish-media">
          ${badge ? `<span class="dish-badge">${badge}</span>` : ''}
          <span class="dish-price">${d.price}</span>
          ${mediaMarkup(d, name)}
        </div>
        <div class="dish-body">
          <span class="dish-cat">${catLabel(d.category, lang)}</span>
          <h3>${name}</h3>
          ${desc ? `<p>${desc}</p>` : ''}
        </div>
      </article>`;
  }

  /* Build filter-row buttons from MENU_CATEGORIES (single source of truth for names) */
  function buildFilterRow(container, groupClass, onPick) {
    if (!container) return;
    const lang = currentLang();
    container.innerHTML = MENU_CATEGORIES.map((c, i) =>
      `<button type="button" class="filter-btn ${groupClass} ${i === 0 ? 'active' : ''}" data-filter="${c.id}">${c.label[lang] || c.label.en}</button>`
    ).join('');
    container.querySelectorAll(`.${groupClass}`).forEach(btn => {
      btn.addEventListener('click', () => {
        container.querySelectorAll(`.${groupClass}`).forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        onPick(btn.dataset.filter);
      });
    });
  }

  function renderAll() {
    const lang = currentLang();

    /* Featured dishes on the homepage */
    const featuredWrap = document.getElementById('featured-grid');
    if (featuredWrap) {
      const featuredIds = ['nidz-special-shawarma', 'beast-shawarma-roll', 'phoenix', 'beef-shawarma', 'kabab-sandwich', 'picasso-shawarma'];
      featuredWrap.innerHTML = featuredIds.map((id, i) => {
        const d = MENU_ITEMS.find(m => m.id === id);
        return d ? dishCard(d, i, lang) : '';
      }).join('');
    }

    /* Full menu grid with dynamic category filters */
    const menuWrap = document.getElementById('menu-grid');
    const menuFilterWrap = document.getElementById('menu-filters');
    if (menuWrap) {
      const renderMenuGrid = (cat) => {
        const items = (!cat || cat === 'all') ? MENU_ITEMS : MENU_ITEMS.filter(m => m.category === cat);
        menuWrap.innerHTML = items.map((d, i) => dishCard(d, i, lang)).join('');
      };
      if (menuFilterWrap) {
        const activeBtn = menuFilterWrap.querySelector('.filter-btn.active');
        const activeCat = activeBtn ? activeBtn.dataset.filter : 'all';
        buildFilterRow(menuFilterWrap, 'menu-filter-btn', renderMenuGrid);
        // restore previously active filter after rebuilding buttons (e.g. after language change)
        const restore = menuFilterWrap.querySelector(`[data-filter="${activeCat}"]`);
        if (restore) {
          menuFilterWrap.querySelectorAll('.menu-filter-btn').forEach(b => b.classList.remove('active'));
          restore.classList.add('active');
        }
        renderMenuGrid(activeCat);
      } else {
        renderMenuGrid('all');
      }
    }

    /* Gallery — only items with a real photo */
    const galleryWrap = document.getElementById('gallery-grid');
    const galleryFilterWrap = document.getElementById('gallery-filters');
    const photographedItems = MENU_ITEMS.filter(d => !!d.img);
    if (galleryWrap) {
      const renderGallery = (cat) => {
        const items = (!cat || cat === 'all') ? photographedItems : photographedItems.filter(m => m.category === cat);
        galleryWrap.innerHTML = items.map(d => {
          const name = d.name[lang] || d.name.en;
          return `
            <figure class="masonry-item reveal in" data-cat="${d.category}" data-name="${name}">
              <img src="${d.img}" alt="${name} — Nid'Z Restaurant" loading="lazy" width="500" height="500">
              <figcaption class="cap">${name}</figcaption>
            </figure>`;
        }).join('');
        initGalleryInteractions();
      };
      if (galleryFilterWrap) {
        // only offer categories that actually contain photographed items
        const photographedCats = new Set(photographedItems.map(d => d.category));
        const cats = MENU_CATEGORIES.filter(c => c.id === 'all' || photographedCats.has(c.id));
        const activeBtn = galleryFilterWrap.querySelector('.filter-btn.active');
        const activeCat = activeBtn ? activeBtn.dataset.filter : 'all';
        galleryFilterWrap.innerHTML = cats.map((c, i) =>
          `<button type="button" class="filter-btn gallery-filter-btn ${i === 0 ? 'active' : ''}" data-filter="${c.id}">${c.label[lang] || c.label.en}</button>`
        ).join('');
        galleryFilterWrap.querySelectorAll('.gallery-filter-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            galleryFilterWrap.querySelectorAll('.gallery-filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderGallery(btn.dataset.filter);
          });
        });
        const restore = galleryFilterWrap.querySelector(`[data-filter="${activeCat}"]`);
        if (restore) {
          galleryFilterWrap.querySelectorAll('.gallery-filter-btn').forEach(b => b.classList.remove('active'));
          restore.classList.add('active');
        }
        renderGallery(activeCat);
      } else {
        renderGallery('all');
      }
    }
  }

  function initGalleryInteractions() {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox) return;
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

  document.addEventListener('DOMContentLoaded', renderAll);
  document.addEventListener('nidz:langchange', renderAll);
})();
