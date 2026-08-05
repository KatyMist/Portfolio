document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.project-accordion__item');

    items.forEach((item) => {
        const toggle = item.querySelector('.project-accordion__toggle');

        toggle.addEventListener('click', () => {
            const isOpen = item.classList.contains('is-open');

            item.classList.toggle('is-open', !isOpen);
            toggle.setAttribute('aria-expanded', String(!isOpen));
        });
    });
});