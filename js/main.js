// NID'Z RESTAURANT — shared interactivity
document.addEventListener('DOMContentLoaded', () => {

  /* Preloader */
  const preloader = document.getElementById('preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      setTimeout(() => preloader.classList.add('hide'), 250);
    });
    // Fallback in case load event already fired
    setTimeout(() => preloader.classList.add('hide'), 1800);
  }

  /* Sticky header */
  const header = document.querySelector('.site-header');
  const onScroll = () => {
    if (!header) return;
    header.classList.toggle('scrolled', window.scrollY > 40);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* Mobile nav */
  const toggle = document.querySelector('.nav-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  if (toggle && mobileNav) {
    toggle.addEventListener('click', () => {
      const open = mobileNav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.style.overflow = open ? 'hidden' : '';
    });
    mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
    }));
  }

  /* Scroll reveal */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach((el, i) => {
      el.style.setProperty('--i', i % 8);
      io.observe(el);
    });
  } else {
    revealEls.forEach(el => el.classList.add('in'));
  }

  /* Testimonial slider */
  const slides = document.querySelectorAll('.testi-slide');
  const dotsWrap = document.querySelector('.testi-dots');
  if (slides.length) {
    let idx = 0;
    const show = (i) => {
      slides.forEach((s, n) => s.classList.toggle('active', n === i));
      if (dotsWrap) {
        dotsWrap.querySelectorAll('button').forEach((b, n) => b.classList.toggle('active', n === i));
      }
      idx = i;
    };
    if (dotsWrap) {
      slides.forEach((_, n) => {
        const b = document.createElement('button');
        b.type = 'button';
        b.setAttribute('aria-label', `Show testimonial ${n + 1}`);
        b.addEventListener('click', () => show(n));
        dotsWrap.appendChild(b);
      });
    }
    show(0);
    setInterval(() => show((idx + 1) % slides.length), 5500);
  }

  /* Note: gallery lightbox + filters are wired up in js/render.js
     (initGalleryInteractions), after dish cards are rendered into the DOM. */

  /* Generic form -> mailto fallback (no backend attached yet) */
  document.querySelectorAll('form[data-mailto]').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const lines = [];
      for (const [key, val] of data.entries()) {
        if (val) lines.push(`${key.replace(/_/g, ' ')}: ${val}`);
      }
      const subject = encodeURIComponent(form.dataset.subject || 'New message from Nid\'Z website');
      const body = encodeURIComponent(lines.join('\n'));
      const successEl = (form.closest('.reveal') || form.parentElement).querySelector('.form-success');
      window.location.href = `mailto:${NIDZ.email}?subject=${subject}&body=${body}`;
      if (successEl) {
        successEl.classList.add('show');
        successEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      form.reset();
    });
  });

  /* Year in footer */
  document.querySelectorAll('.year').forEach(el => el.textContent = new Date().getFullYear());
});
