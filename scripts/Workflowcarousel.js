class WorkflowCarousel {
    selectors = {
        carousel: '[data-js-carousel]',
        track:    '[data-js-track]',
        prev:     '[data-js-prev]',
        next:     '[data-js-next]',
        dots:     '[data-js-dots]',
    }

    stateClasses = {
        active:   'is-active',
        neighbor: 'is-neighbor',
    }

    constructor() {
        this.carousel = document.querySelector(this.selectors.carousel)
        if (!this.carousel) return

        this.track    = this.carousel.querySelector(this.selectors.track)
        this.dotsWrap = this.carousel.closest('.workflow').querySelector(this.selectors.dots)
        this.prevBtn  = this.carousel.closest('.workflow').querySelector(this.selectors.prev)
        this.nextBtn  = this.carousel.closest('.workflow').querySelector(this.selectors.next)

        this.origCards = [...this.track.querySelectorAll('.workflow__card')]
        this.total     = this.origCards.length

        this.cloneCards()

        this.allCards = [...this.track.querySelectorAll('.workflow__card')]

        this.current   = this.total
        this.auto      = null
        this.isJumping = false

        // единственный именованный обработчик transitionend
        this._onTransitionEnd = () => this._handleLoop()

        this.createDots()
        this.update(false)
        this.bindEvents()
        this.startAuto()
    }

    cloneCards() {
        const clonesBefore = this.origCards.map(c => {
            const clone = c.cloneNode(true)
            clone.setAttribute('aria-hidden', 'true')
            return clone
        })
        const clonesAfter = this.origCards.map(c => {
            const clone = c.cloneNode(true)
            clone.setAttribute('aria-hidden', 'true')
            return clone
        })

        clonesBefore.reverse().forEach(c => this.track.prepend(c))
        clonesAfter.forEach(c => this.track.append(c))
    }

    createDots() {
        this.dots = this.origCards.map((_, i) => {
            const btn = document.createElement('button')
            btn.className = 'workflow__dot'
            btn.setAttribute('aria-label', `Этап ${i + 1}`)
            btn.addEventListener('click', () => {
                this.go(i + this.total)
                this.resetAuto()
            })
            this.dotsWrap.appendChild(btn)
            return btn
        })
    }

    getGap() {
        return parseInt(getComputedStyle(this.track).gap) || 20
    }

    update(animated = true) {
        const wrapW  = this.carousel.offsetWidth
        const cardW  = this.allCards[0].offsetWidth
        const gap    = this.getGap()
        const step   = cardW + gap
        const offset = wrapW / 2 - cardW / 2 - this.current * step

        this.track.style.transition = animated
            ? 'transform 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            : 'none'

        this.track.style.transform = `translateX(${offset}px)`

        const realIndex = ((this.current - this.total) % this.total + this.total) % this.total

        this.allCards.forEach((c, i) => {
            c.classList.remove(this.stateClasses.active, this.stateClasses.neighbor)
            if (i === this.current) {
                c.classList.add(this.stateClasses.active)
            } else if (Math.abs(i - this.current) === 1) {
                c.classList.add(this.stateClasses.neighbor)
            }
        })

        this.dots.forEach((d, i) => {
            d.classList.toggle(this.stateClasses.active, i === realIndex)
        })
    }

    go(n) {
        if (this.isJumping) return
        this.current = n
        this.update(true)

        // снимаем старый listener перед добавлением нового
        this.track.removeEventListener('transitionend', this._onTransitionEnd)
        this.track.addEventListener('transitionend', this._onTransitionEnd, { once: true })
    }

    _handleLoop() {
        const end = this.total * 2

        if (this.current < this.total) {
            this.isJumping = true
            this.current = this.current + this.total
            this.update(false)
            requestAnimationFrame(() => {
                requestAnimationFrame(() => { this.isJumping = false })
            })
        } else if (this.current >= end) {
            this.isJumping = true
            this.current = this.current - this.total
            this.update(false)
            requestAnimationFrame(() => {
                requestAnimationFrame(() => { this.isJumping = false })
            })
        }
    }

    bindEvents() {
        this.prevBtn.addEventListener('click', () => { this.go(this.current - 1); this.resetAuto() })
        this.nextBtn.addEventListener('click', () => { this.go(this.current + 1); this.resetAuto() })

        // keyboard navigation
        this.carousel.addEventListener('keydown', e => {
            if (e.key === 'ArrowLeft')  { this.go(this.current - 1); this.resetAuto() }
            if (e.key === 'ArrowRight') { this.go(this.current + 1); this.resetAuto() }
        })

        this.carousel.addEventListener('mouseenter', () => this.stopAuto())
        this.carousel.addEventListener('mouseleave', () => this.startAuto())

        let startX = 0
        this.carousel.addEventListener('touchstart', e => {
            startX = e.touches[0].clientX
        }, { passive: true })

        this.carousel.addEventListener('touchend', e => {
            const diff = startX - e.changedTouches[0].clientX
            if (Math.abs(diff) > 40) {
                this.go(diff > 0 ? this.current + 1 : this.current - 1)
                this.resetAuto()
            }
        }, { passive: true })

        window.addEventListener('resize', () => this.update(false))
    }

    startAuto() {
        this.auto = setInterval(() => this.go(this.current + 1), 11000)
    }

    stopAuto() {
        clearInterval(this.auto)
    }

    resetAuto() {
        this.stopAuto()
        this.startAuto()
    }
}

export default WorkflowCarousel