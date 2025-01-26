document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    header.classList.add('animate-header');

    const observeItems = (selector, animationClass) => {
        const elements = document.querySelectorAll(selector);
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(animationClass);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        elements.forEach(el => observer.observe(el));
    };

    observeItems('.item', 'animate-item');
    observeItems('.hero-image', 'animate-lebron');})
