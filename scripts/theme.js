const STORAGE_KEY = 'theme';

export function initTheme() {
    const toggle = document.getElementById('themeToggle');
    if (!toggle) return;

    // Тема уже применена инлайн-скриптом в <head> до отрисовки страницы —
    // здесь просто синхронизируем состояние кнопки с тем, что уже стоит на <html>
    const current = document.documentElement.dataset.theme || 'light';
    toggle.dataset.themeState = current;

    toggle.addEventListener('click', () => {
        const now = document.documentElement.dataset.theme || 'light';
        const next = now === 'light' ? 'dark' : 'light';
        applyTheme(next, toggle);
        localStorage.setItem(STORAGE_KEY, next);
    });
}

function applyTheme(theme, toggle) {
    document.documentElement.dataset.theme = theme;
    toggle.dataset.themeState = theme;
}