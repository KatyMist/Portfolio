export function initLoader() {
    const root = document.documentElement;
    const screen = document.getElementById('loadingScreen');
    // A late module must not bring the loader back after the fallback dismissed it.
    if (!screen || !root.classList.contains('is-loading')) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let dismissed = false;
    let safetyTimer;

    screen.hidden = false;
    screen.setAttribute('aria-hidden', 'false');

    const finish = () => {
        screen.hidden = true;
        screen.setAttribute('aria-hidden', 'true');
        root.classList.remove('is-loading');
    };
    const dismiss = () => {
        if (dismissed) return;
        dismissed = true;
        clearTimeout(safetyTimer);
        screen.classList.add('fade-out');
        screen.inert = true;
        if (reduceMotion) finish();
        else setTimeout(finish, 180);
    };
    const ready = () => {
        // Let translated text and the section layout settle before revealing them.
        requestAnimationFrame(() => requestAnimationFrame(dismiss));
    };

    safetyTimer = setTimeout(dismiss, 1500);
    // Images and analytics below the first screen must not delay interaction.
    if (document.fonts) {
        Promise.all([
            document.fonts.load('400 16px "PlayfairDisplay"'),
            document.fonts.load('400 12px "Manrope"'),
        ]).then(ready, ready);
    } else ready();
}
