// Run before the body is painted, so the page cannot flash behind the loader.
(() => {
    const root = document.documentElement;
    root.classList.add('is-loading');
    // Fail open even if the module bundle or a font cannot be downloaded.
    setTimeout(() => {
        root.classList.remove('is-loading');
        const screen = document.getElementById('loadingScreen');
        if (screen) {
            screen.hidden = true;
            screen.setAttribute('aria-hidden', 'true');
        }
    }, 2500);
})();
