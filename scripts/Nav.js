class Nav {
    selectors = {
        burger: '[data-js-burger]',
        nav: '[data-js-nav]',
    }

    stateClasses = {
        isActive: 'is-active',
        isLock: 'is-lock',
    }

    constructor() {
        this.burgerEl = document.querySelector(this.selectors.burger)
        this.navEl = document.querySelector(this.selectors.nav)

        if (!this.burgerEl || !this.navEl) return

        this.burgerEl.setAttribute('aria-expanded', 'false')

        this.burgerEl.addEventListener('click', () => {
            const isActive = this.burgerEl.classList.toggle(this.stateClasses.isActive)
            this.navEl.classList.toggle(this.stateClasses.isActive)
            document.documentElement.classList.toggle(this.stateClasses.isLock)
            this.burgerEl.setAttribute('aria-expanded', isActive ? 'true' : 'false')
        })

        // закрытие по клику на ссылку
        this.navEl.querySelectorAll('.nav__link').forEach(link => {
            link.addEventListener('click', () => this.close())
        })

        // закрытие по Escape
        document.addEventListener('keydown', e => {
            if (e.key === 'Escape') this.close()
        })
    }

    close() {
        this.burgerEl.classList.remove(this.stateClasses.isActive)
        this.navEl.classList.remove(this.stateClasses.isActive)
        document.documentElement.classList.remove(this.stateClasses.isLock)
        this.burgerEl.setAttribute('aria-expanded', 'false')
    }
}

export default Nav