export function initSectionStack() {
    const hero = document.getElementById('hero');
    if (!hero) return;
    const main = hero.parentElement;
    const sections = [...main.children].filter((el) => el.matches('section[id]'));
    if (sections.length < 2) return;

    sections.forEach((section, index) => {
        section.style.setProperty('--stack-order', index + 1);
    });

    const updateEnd = () => {
        const atEnd = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;
        main.classList.toggle('section-stack--end', atEnd);
    };

    const measure = () => {
        const viewportHeight = window.innerHeight;
        sections.forEach((section) => {
            // Tall sections scroll completely before their last screen is pinned.
            const top = Math.min(0, viewportHeight - section.offsetHeight);
            section.style.setProperty('--stack-top', `${top}px`);
        });
        updateEnd();
    };
    measure();
    main.classList.add('section-stack');

    let queued = false;
    const schedule = () => {
        if (queued) return;
        queued = true;
        requestAnimationFrame(() => { queued = false; measure(); });
    };
    let endQueued = false;
    window.addEventListener('scroll', () => {
        if (endQueued) return;
        endQueued = true;
        requestAnimationFrame(() => { endQueued = false; updateEnd(); });
    }, { passive: true });
    const observer = new ResizeObserver(schedule);
    sections.forEach((section) => observer.observe(section));
    window.addEventListener('resize', schedule);
    window.addEventListener('pageshow', schedule);
    document.fonts.ready.then(schedule);
}
