// Анимация печатающегося текста
export default class Loader {
    constructor() {
        this.words = ['Екатерина Туманова', 'Frontend Developer', 'HTML · SCSS · JS'];
        this.typedEl = document.getElementById('loader-typed');
        this.wordIndex = 0;
        this.charIndex = 0;
        this.deleting = false;

        this.typeLoop();
        this.initLoader();
        this.initOffline();
    }

    typeLoop() {
        if (!this.typedEl || this.stopTyping) return; 

        const currentWord = this.words[this.wordIndex];

        if (!this.deleting) {
            this.typedEl.textContent = currentWord.slice(0, ++this.charIndex);
            if (this.charIndex === currentWord.length) {
                this.deleting = true;
                setTimeout(() => this.typeLoop(), 1500);
                return;
            }
        } else {
            this.typedEl.textContent = currentWord.slice(0, --this.charIndex);
            if (this.charIndex === 0) {
                this.deleting = false;
                this.wordIndex = (this.wordIndex + 1) % this.words.length;
            }
        }

        setTimeout(() => this.typeLoop(), this.deleting ? 50 : 90);
    }

    initLoader() {
        const minTime = new Promise(resolve => setTimeout(resolve, 2000));
        const loaded  = new Promise(resolve => window.addEventListener('load', resolve));

        Promise.all([minTime, loaded]).then(() => {
            const loader = document.getElementById('loader');
            if (!loader) return;
            this.stopTyping = true; // ← останавливаем анимацию
            loader.classList.add('hide');
            setTimeout(() => loader.remove(), 750);
        });
    }

    initOffline() {
        const screen = document.getElementById('offline-screen');
        window.addEventListener('offline', () => { if (screen) screen.hidden = false; });
        window.addEventListener('online',  () => { if (screen) screen.hidden = true;  });
    }
}