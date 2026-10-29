// ERSSC site behaviour — small, dependency-free.
(() => {
  const header = document.querySelector('[data-header]');

  // Header turns solid after the hero starts to scroll away.
  const onScroll = () => header && header.classList.toggle('scrolled', window.scrollY > 40);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Mobile menu.
  const toggle = document.querySelector('[data-nav-toggle]');
  const list = document.querySelector('[data-nav-list]');
  if (toggle && list) {
    const setOpen = (open) => {
      toggle.setAttribute('aria-expanded', String(open));
      list.classList.toggle('open', open);
      header.classList.toggle('nav-open', open);
      document.body.style.overflow = open ? 'hidden' : '';
    };
    toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
    list.addEventListener('click', (e) => { if (e.target.closest('a')) setOpen(false); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setOpen(false); });
  }

  // Reveal sections as they enter the viewport. Sections already visible are left alone.
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const items = document.querySelectorAll('[data-reveal]');
  if (!reduce && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    items.forEach((el) => {
      if (el.getBoundingClientRect().top > window.innerHeight * 0.92) { el.classList.add('reveal'); io.observe(el); }
    });
  }

  // Contact form: validate, then open the visitor's email app with the message ready.
  const form = document.querySelector('form[data-mailto]');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let ok = true;
      form.querySelectorAll('[required]').forEach((f) => {
        const bad = !f.value.trim() || (f.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.value));
        f.setAttribute('aria-invalid', String(bad));
        if (bad) ok = false;
      });
      const note = form.querySelector('[data-form-note]');
      if (!ok) { note.textContent = 'Please complete your name, a valid email and the project details.'; return; }
      const d = Object.fromEntries(new FormData(form));
      const subject = `Enquiry: ${d.service} — ${d.company || d.name}`;
      const body = `Name: ${d.name}\nCompany: ${d.company || '-'}\nEmail: ${d.email}\nService: ${d.service}\n\n${d.message}`;
      window.location.href = `mailto:${form.dataset.mailto}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      note.textContent = 'Your email app should now open with the message ready to send.';
    });
  }
})();
