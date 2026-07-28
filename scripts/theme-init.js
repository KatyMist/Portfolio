(function () {
    try {
        var STORAGE_KEY = 'theme';
        var saved = localStorage.getItem(STORAGE_KEY);
        var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        var theme = saved || (prefersDark ? 'dark' : 'light');
        document.documentElement.dataset.theme = theme;
    } catch (e) {}
})();