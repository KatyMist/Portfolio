export function initBurger() {
    const burger = document.getElementById('burger');
    const nav = document.getElementById('nav');

    if (burger && nav) {
        burger.addEventListener('click', () => {
            nav.classList.toggle('nav--active');
            burger.classList.toggle('burger--active');
        });
    }
}