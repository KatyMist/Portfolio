export function initLoader() {
    const screen = document.getElementById('loadingScreen');
    if (!screen) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const started = performance.now();
    let dismissed = false;
    let safetyTimer;

    screen.hidden = false;
    screen.setAttribute('aria-hidden', 'false');

    const finish = () => {
        screen.hidden = true;
        screen.setAttribute('aria-hidden', 'true');
    };
    const dismiss = () => {
        if (dismissed) return;
        dismissed = true;
        clearTimeout(safetyTimer);
        screen.classList.add('fade-out');
        screen.inert = true;
        if (reduceMotion) finish();
        else setTimeout(finish, 400);
    };
    const ready = () => {
        const delay = reduceMotion ? 0 : Math.max(0, 650 - (performance.now() - started));
        setTimeout(dismiss, delay);
    };
    const pageLoaded = () => {
        if (document.fonts) document.fonts.ready.then(ready, ready);
        else ready();
    };

    // The overlay must never hold the page indefinitely on a slow connection.
    safetyTimer = setTimeout(dismiss, 2500);
    if (document.readyState === 'complete') pageLoaded();
    else window.addEventListener('load', pageLoaded, { once: true });
}
