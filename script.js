document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.project-card');

    const reducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
    ).matches;

    if (reducedMotion) {
        return;
    }

    cards.forEach((card, index) => {
        card.classList.add('reveal-card');

        card.style.transition = `
            opacity 450ms ease ${Math.min(index * 35, 175)}ms,
            transform 450ms ease ${Math.min(index * 35, 175)}ms,
            border-color 180ms ease,
            box-shadow 180ms ease
        `;
    });

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    return;
                }

                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            });
        },
        {
            threshold: 0.08,
            rootMargin: '0px 0px -30px 0px'
        }
    );

    cards.forEach(card => observer.observe(card));
});
