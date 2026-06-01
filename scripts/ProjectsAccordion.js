export default class ProjectsAccordion {
    constructor() {
        this.items = document.querySelectorAll('.projects__item');
        this.section = document.querySelector('.projects');
        if (!this.items.length || !this.section) return;

        this.current = 0;
        this.isScrolling = false;

        this.init();
        this.initScrollHijack();
    }

    init() {
        this.items.forEach((item, i) => {
            const bg = item.dataset.bg;
            if (bg) {
                item.style.backgroundImage = `url(${bg})`;
                item.style.backgroundSize = 'cover';
                item.style.backgroundPosition = 'center';
            }

            item.addEventListener('mouseenter', () => {
                if (window.innerWidth > 768) this.setActive(i);
            });
        });

        this.setActive(0);
    }

    initScrollHijack() {
        window.addEventListener('wheel', (e) => {
            const rect = this.section.getBoundingClientRect();

            // Секция занимает центр экрана
            const centeredInView = rect.top <= 100 && rect.bottom >= window.innerHeight - 100;

            if (!centeredInView) return;

            const goingDown = e.deltaY > 0;

            if (goingDown && this.current < this.items.length - 1) {
                e.preventDefault();
                e.stopPropagation();
                this.throttleSwitch(() => this.setActive(this.current + 1));
                return;
            }

            if (!goingDown && this.current > 0) {
                e.preventDefault();
                e.stopPropagation();
                this.throttleSwitch(() => this.setActive(this.current - 1));
                return;
            }

        }, { passive: false });
    }

    throttleSwitch(fn) {
        if (this.isScrolling) return;
        this.isScrolling = true;
        fn();
        setTimeout(() => (this.isScrolling = false), 700);
    }

    setActive(index) {
        this.current = index;
        this.items.forEach((item, i) => {
            item.classList.toggle('is-active', i === index);
        });
        this.updateDots();
    }

    updateDots() {
        const dots = document.querySelectorAll('.projects__dot');
        dots.forEach((dot, i) => {
            dot.classList.toggle('is-active', i === this.current);
        });
    }
}