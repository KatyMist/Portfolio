export function initActiveNavOnScroll() {
    const sections = document.querySelectorAll('main section[id]');
    const navLinks = document.querySelectorAll('.nav__link');

    if (!sections.length || !navLinks.length) return;

    const setActive = (id) => {
        navLinks.forEach((link) => {
            const linkId = link.getAttribute('href').split('#')[1];
            link.classList.toggle('is-active', linkId === id);
        });
    };

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActive(entry.target.id);
                }
            });
        },
        {
            rootMargin: '-40% 0px -50% 0px',
        }
    );

    sections.forEach((section) => observer.observe(section));
}