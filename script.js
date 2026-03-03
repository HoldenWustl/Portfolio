// A simple JS script to add a subtle fade-in effect when scrolling

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.project-card');

    // Initial state: slightly transparent and pushed down
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    });

    const checkVisibility = () => {
        const triggerBottom = window.innerHeight * 0.9; // Trigger point

        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;

            if (cardTop < triggerBottom) {
                // Make visible and reset position
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    };

    // Run on scroll and on initial load
    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Trigger once immediately
});