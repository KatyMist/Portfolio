export function initActiveNavOnScroll() {
    const counter = document.querySelector('.page-counter');
    if (!counter) return;
    const sections = [...document.querySelectorAll('main > section[id]')];
    if (!sections.length) return;
    const current = counter.querySelector('.page-counter__current');
    const total = counter.querySelector('.page-counter__total');
    total.textContent = String(sections.length).padStart(2, '0');

    const update = () => {
        const marker = Math.min(160, window.innerHeight * 0.25);
        let index = 0;
        sections.forEach((section, i) => {
            if (section.getBoundingClientRect().top <= marker) index = i;
        });
        if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
            index = sections.length - 1;
        }
        current.textContent = String(index + 1).padStart(2, '0');
    };
    let scheduled = false;
    const schedule = () => {
        if (scheduled) return;
        scheduled = true;
        requestAnimationFrame(() => { update(); scheduled = false; });
    };
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    window.addEventListener('pageshow', schedule);
    update();
}
