export function initProjectAccordion() {
    const items = document.querySelectorAll('.project-accordion__item');

    items.forEach((item) => {
        const toggle = item.querySelector('.project-accordion__toggle');
        if (!toggle) return;

        toggle.addEventListener('click', () => {
            const isOpen = item.classList.contains('is-open');

            item.classList.toggle('is-open', !isOpen);
            toggle.setAttribute('aria-expanded', String(!isOpen));
        });
    });
}