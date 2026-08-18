// ============================================================
// MANNMIT RHAL — PERSONAL SITE
// Small, dependency-free interactions. Safe to leave as-is.
// ============================================================

// --- Nav: hairline border appears once you scroll past the hero top
const nav = document.querySelector('.nav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 12);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// --- "Back to top" links: handled directly rather than via #top anchor
// scrolling, since a zero-height anchor target is unreliable across browsers.
document.querySelectorAll('a[href="#top"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    history.pushState(null, '', '#top');
  });
});

// --- Mobile menu (burger) ---
const burger = document.getElementById('navBurger');
const mobileMenu = document.getElementById('mobileMenu');

const closeMenu = () => {
  burger.classList.remove('open');
  mobileMenu.classList.remove('open');
  burger.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
};

burger.addEventListener('click', () => {
  const opening = !mobileMenu.classList.contains('open');
  burger.classList.toggle('open', opening);
  mobileMenu.classList.toggle('open', opening);
  burger.setAttribute('aria-expanded', String(opening));
  document.body.style.overflow = opening ? 'hidden' : '';
});

// Close the menu when a link inside it is tapped
mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));

// --- Scroll reveal: elements fade up as they enter the viewport ---
const revealEls = document.querySelectorAll('.reveal');

// Stagger items that share a grid so they cascade in
const groups = ['.project-grid', '.programme-grid', '.life-grid', '.gallery', '.fact-row', '.contact-details'];
revealEls.forEach(el => {
  const parent = el.closest(groups.join(','));
  if (parent) {
    const siblings = Array.from(parent.children).filter(c => c.classList.contains('reveal'));
    el.style.transitionDelay = `${siblings.indexOf(el) * 0.08}s`;
  }
});

const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => io.observe(el));

// --- Scroll spy: highlight the nav link for the section in view ---
const navLinks = document.querySelectorAll('.nav-links a');
const sections = Array.from(navLinks)
  .map(a => document.querySelector(a.getAttribute('href')))
  .filter(Boolean);

const spy = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(a =>
        a.classList.toggle('active', a.getAttribute('href') === `#${entry.target.id}`)
      );
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => spy.observe(s));
