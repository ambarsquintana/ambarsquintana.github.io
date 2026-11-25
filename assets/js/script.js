/* =========================================================
   Ambar Quintana — Portfolio
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initMobileNav();
  initSmoothScroll();
  initCardVideos();
  initScrollSpy();
  initScrollTop();
  initScrolledState();
  initCopyEmail();
  initIcons();
});

/* ---------- Header border + scroll-top visibility once the page scrolls ---------- */
function initScrolledState() {
  const update = () => document.body.classList.toggle('is-scrolled', window.scrollY > 24);
  update();
  window.addEventListener('scroll', update, { passive: true });
}

/* ---------- Footer: copy email ---------- */
function initCopyEmail() {
  document.querySelectorAll('.copy-email-btn').forEach((btn) => {
    const email = btn.dataset.email;
    const label = btn.getAttribute('aria-label');

    const fallbackCopy = () => {
      const field = document.createElement('textarea');
      field.value = email;
      field.setAttribute('readonly', '');
      field.style.position = 'absolute';
      field.style.left = '-9999px';
      document.body.appendChild(field);
      field.select();
      let ok = false;
      try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
      document.body.removeChild(field);
      return ok;
    };

    btn.addEventListener('click', async () => {
      let ok = false;
      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(email);
          ok = true;
        } else {
          ok = fallbackCopy();
        }
      } catch (e) {
        ok = fallbackCopy();
      }
      if (!ok) return;
      btn.classList.add('is-copied');
      btn.setAttribute('aria-label', 'Correo copiado');
      btn.title = 'Correo copiado';
      setTimeout(() => {
        btn.classList.remove('is-copied');
        btn.setAttribute('aria-label', label);
        btn.title = label;
      }, 2000);
    });
  });
}

/* ---------- Theme (dark / light) ---------- */
function initThemeToggle() {
  const root = document.documentElement;
  const toggleBtn = document.getElementById('theme-toggle');
  if (!toggleBtn) return;

  const STORAGE_KEY = 'ambar-theme';

  let saved = null;
  try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) { /* storage unavailable */ }

  // Default to light when nothing is saved yet.
  const initialTheme = (saved === 'dark' || saved === 'light') ? saved : 'light';
  root.setAttribute('data-theme', initialTheme);
  toggleBtn.setAttribute('aria-checked', String(initialTheme === 'dark'));

  toggleBtn.addEventListener('click', () => {
    const current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    toggleBtn.setAttribute('aria-checked', String(next === 'dark'));
    try { localStorage.setItem(STORAGE_KEY, next); } catch (e) { /* storage unavailable */ }
  });
}

/* ---------- Mobile nav toggle ---------- */
function initMobileNav() {
  const navToggle = document.getElementById('nav-toggle');
  if (!navToggle) return;

  navToggle.addEventListener('click', () => {
    const isOpen = document.body.classList.toggle('nav-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  document.querySelectorAll('.main-nav a').forEach((link) => {
    link.addEventListener('click', () => {
      document.body.classList.remove('nav-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ---------- Smooth scroll for in-page anchors ---------- */
function initSmoothScroll() {
  const header = document.querySelector('.site-header');

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const targetId = link.getAttribute('href');
      if (!targetId || targetId === '#') return;
      const target = document.querySelector(targetId);
      if (!target) return;
      event.preventDefault();

      const headerHeight = header ? header.offsetHeight : 0;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    });
  });
}

/* ---------- Project cards: the video stays on its first frame until hover ---------- */
function initCardVideos() {
  const canHover = window.matchMedia('(hover: hover) and (pointer: fine)');

  document.querySelectorAll('.project-card--video').forEach((card) => {
    const video = card.querySelector('.project-video');
    if (!video) return;

    card.addEventListener('mouseenter', () => {
      if (!canHover.matches) return;
      const playing = video.play();
      if (playing && typeof playing.catch === 'function') playing.catch(() => {});
    });

    card.addEventListener('mouseleave', () => {
      video.pause();
      if (video.readyState > 0) video.currentTime = 0;
    });
  });
}

/* ---------- Scroll-spy: highlight the active nav link ---------- */
function initScrollSpy() {
  // Los enlaces con data-no-spy no se resaltan al hacer scroll (p. ej. en páginas de proyecto).
  const navLinks = Array.from(document.querySelectorAll('.main-nav a[href^="#"]:not([data-no-spy])'));
  const footerLinks = Array.from(document.querySelectorAll('.footer-pages a[href^="#"]'));
  const allLinks = navLinks.concat(footerLinks);
  if (!navLinks.length || typeof IntersectionObserver === 'undefined') return;

  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);
  if (!sections.length) return;

  // El perfil no tiene enlace en el menú: al verlo, ningún enlace queda activo.
  const hero = document.getElementById('perfil');
  if (hero) sections.unshift(hero);

  const setActive = (id) => {
    allLinks.forEach((link) => {
      link.classList.toggle('is-active', link.getAttribute('href') === `#${id}`);
    });
  };

  // La última sección (Contacto) puede no llegar a la franja central de la pantalla:
  // al llegar al final de la página se marca como activa.
  const lastSection = sections[sections.length - 1];
  const isAtBottom = () =>
    window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;

  // Al hacer clic en un enlace, se marca esa sección y se ignora el scroll-spy
  // hasta que termina el desplazamiento (Certificaciones y Contacto están muy cerca del final).
  let locked = false;
  let unlockTimer = null;
  const scheduleUnlock = () => {
    clearTimeout(unlockTimer);
    unlockTimer = setTimeout(() => {
      locked = false;
      wasAtBottom = isAtBottom();
    }, 150);
  };

  allLinks.forEach((link) => {
    link.addEventListener('click', () => {
      const id = link.getAttribute('href').slice(1);
      if (!document.getElementById(id)) return;
      setActive(id);
      locked = true;
      scheduleUnlock();
    });
  });

  const observer = new IntersectionObserver(
    (entries) => {
      if (locked || isAtBottom()) return;
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      if (visible.length) {
        setActive(visible[0].target.id);
      }
    },
    { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
  );

  sections.forEach((section) => observer.observe(section));

  let wasAtBottom = false;
  const checkBottom = () => {
    if (locked) {
      scheduleUnlock();
      return;
    }
    const atBottom = isAtBottom();
    if (atBottom && !wasAtBottom) {
      setActive(lastSection.id);
    } else if (!atBottom && wasAtBottom) {
      // Al subir desde el final, se vuelve a marcar la sección que ocupa la franja central.
      const probe = window.innerHeight * 0.45;
      const current = sections.filter((section) => section.getBoundingClientRect().top <= probe).pop();
      if (current) setActive(current.id);
    }
    wasAtBottom = atBottom;
  };
  window.addEventListener('scroll', checkBottom, { passive: true });
  window.addEventListener('resize', checkBottom);
  checkBottom();
}

/* ---------- Footer: scroll to top ---------- */
function initScrollTop() {
  const btn = document.getElementById('scroll-top');
  if (!btn) return;

  btn.addEventListener('click', () => {
    const target = document.getElementById('top');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });
}

/* ---------- Lucide icons ---------- */
function initIcons() {
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }
}
