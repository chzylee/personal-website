/**
 * Shows/hides the sticky nav by toggling .sticky-nav--visible directly
 * on the <header> element. Avoids relying on body-class + :global() CSS,
 * which has scoping edge cases in Astro.
 */

const hero = document.querySelector<HTMLElement>('.hero');
const nav  = document.querySelector<HTMLElement>('.sticky-nav');

if (hero && nav) {
  const observer = new IntersectionObserver(
    ([entry]) => {
      nav.classList.toggle('sticky-nav--visible', !entry.isIntersecting);
    },
    { threshold: 0 }
  );

  observer.observe(hero);
}
