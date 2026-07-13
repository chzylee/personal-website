// Float-up reveal: above-the-fold `.reveal` elements animate in on load,
// the rest as they scroll into view. The hidden initial state is gated on the
// `.reveal-ready` class (set in <head>), so content stays visible without JS.

const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!els.length || reduceMotion || !('IntersectionObserver' in window)) {
  els.forEach((el) => el.classList.add('is-visible'));
} else {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      }
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
  );

  els.forEach((el) => {
    // Above-the-fold content animates in on load (its stagger comes from
    // --reveal-delay). Without this, elements near the fold line can fall
    // inside the observer's -10% bottom margin and never reveal on short
    // viewports (e.g. the hero CTA row at 375x667).
    if (el.getBoundingClientRect().top < window.innerHeight) {
      el.classList.add('is-visible');
    } else {
      observer.observe(el);
    }
  });
}
