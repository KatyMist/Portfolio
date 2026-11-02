export function initCommercialGallery() {
    document.querySelectorAll('.commercial-gallery').forEach(initGallery);
}

function initGallery(gallery) {
    const track = gallery.querySelector('.commercial-gallery__track');
    const cards = [...gallery.querySelectorAll('.commercial-card')];
    const prev = gallery.querySelector('[data-gallery-prev]');
    const next = gallery.querySelector('[data-gallery-next]');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const hover = window.matchMedia('(hover: hover) and (pointer: fine)');

    cards.forEach((card) => {
        const front = card.querySelector('.commercial-card__front');
        const back = card.querySelector('.commercial-card__back');
        const close = card.querySelector('.commercial-card__return');
        let hoverTimer;
        const flip = (open, focus = false) => {
            clearTimeout(hoverTimer);
            card.classList.toggle('is-flipped', open);
            front.setAttribute('aria-expanded', String(open));
            front.inert = open;
            front.setAttribute('aria-hidden', String(open));
            back.inert = !open;
            back.setAttribute('aria-hidden', String(!open));
            if (focus) (open ? close : front).focus({ preventScroll: true });
        };
        front.addEventListener('click', () => flip(true, true));
        close.addEventListener('click', () => flip(false, true));
        card.addEventListener('pointerenter', (event) => {
            clearTimeout(hoverTimer);
            if (hover.matches && event.pointerType === 'mouse') {
                hoverTimer = setTimeout(() => flip(true), 100);
            }
        });
        card.addEventListener('pointerleave', (event) => {
            clearTimeout(hoverTimer);
            if (hover.matches && event.pointerType === 'mouse') {
                hoverTimer = setTimeout(() => {
                    if (!card.matches(':hover') && !back.contains(document.activeElement)) flip(false);
                }, 220);
            }
        });
        card.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') { event.preventDefault(); flip(false, true); }
        });
        card.addEventListener('focusout', (event) => {
            if (!card.contains(event.relatedTarget) && !card.matches(':hover')) flip(false);
        });
    });

    const update = () => {
        const max = track.scrollWidth - track.clientWidth;
        prev.disabled = track.scrollLeft <= 10;
        next.disabled = track.scrollLeft >= max - 2;
    };
    const move = (direction) => {
        const step = cards[0].offsetWidth + parseFloat(getComputedStyle(track).columnGap);
        track.scrollBy({ left: direction * step, behavior: reducedMotion.matches ? 'instant' : 'smooth' });
    };
    prev.addEventListener('click', () => move(-1));
    next.addEventListener('click', () => move(1));
    track.addEventListener('keydown', (event) => {
        if (event.target !== track || !['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
        event.preventDefault();
        move(event.key === 'ArrowRight' ? 1 : -1);
    });
    track.addEventListener('scroll', update, { passive: true });
    new ResizeObserver(update).observe(track);
    update();
}
