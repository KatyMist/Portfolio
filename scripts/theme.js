const STORAGE_KEY = 'theme';

export function initTheme() {
    const toggle = document.getElementById('themeToggle');
    if (!toggle) return;

    const saved = localStorage.getItem(STORAGE_KEY);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = saved || (prefersDark ? 'dark' : 'light');

    applyTheme(initial, toggle);

    toggle.addEventListener('click', () => {
        const current = document.documentElement.dataset.theme || 'light';
        const next = current === 'light' ? 'dark' : 'light';
        applyTheme(next, toggle);
        localStorage.setItem(STORAGE_KEY, next);
    });
}

function applyTheme(theme, toggle) {
    document.documentElement.dataset.theme = theme;
    toggle.dataset.themeState = theme;
}