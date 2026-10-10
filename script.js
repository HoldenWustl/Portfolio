// A simple site on purpose: no framework, runtime dependencies, or hidden content.
// The page is fully visible with JavaScript disabled.
document.addEventListener('DOMContentLoaded', () => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion || !('IntersectionObserver' in window)) return;

  const targets = document.querySelectorAll('.feature-project, .secondary-project, .other-item, .about-grid, .contact-content');
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add('has-appeared');
      observer.unobserve(entry.target);
    }
  }, { threshold: 0.05, rootMargin: '0px 0px -24px 0px' });

  targets.forEach(target => {
    target.classList.add('can-reveal');
    observer.observe(target);
  });
});
