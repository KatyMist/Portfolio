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

        this.burgerEl.addEventListener('click', () => {
            this.burgerEl.classList.toggle(this.stateClasses.isActive)
            this.navEl.classList.toggle(this.stateClasses.isActive)
            document.documentElement.classList.toggle(this.stateClasses.isLock)
        })
    }
}

export default Nav