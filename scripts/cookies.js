export function initCookies() {
    const cookiesBanner = document.getElementById('cookiesBanner');
    const acceptBtn = document.getElementById('acceptCookies');
    const closeBtn = document.getElementById('closeCookies');

    if (!cookiesBanner || !acceptBtn || !closeBtn) return;

    // Проверяем, согласился ли пользователь
    if (localStorage.getItem('cookiesAccepted')) {
        cookiesBanner.style.display = 'none';
    }

    // Согласие с cookies
    acceptBtn.addEventListener('click', () => {
        localStorage.setItem('cookiesAccepted', 'true');
        closeBanner();
    });

    // Закрытие баннера
    closeBtn.addEventListener('click', () => {
        closeBanner();
    });

    function closeBanner() {
        cookiesBanner.classList.add('cookies-banner--fade-out');
        setTimeout(() => {
            cookiesBanner.style.display = 'none';
        }, 300);
    }
}