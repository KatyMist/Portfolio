export default class Cursor {
    constructor() {
        console.log('✅ Cursor class started');
        
        this.cursor = document.getElementById('cursor');
        console.log('Cursor element found:', this.cursor);
        
        if (!this.cursor) {
            console.error('❌ ERROR: #cursor not found in HTML');
            return;
        }
        
        this.lastX = -999;
        this.lastY = -999;
        this.throttle = false;
        this.colors = ['#B8E4F7','#9dd8f4','#caedfb','#FFB7C5','#ffa0b8','#ffd0da','#ffffff'];
        this.initMove();
        this.initHover();
        this.initGlitter();
        
        console.log('✅ Cursor fully initialized');
    }
    initMove() {
        document.addEventListener('mousemove', (e) => {
            this.cursor.style.left = `${e.clientX}px`;
            this.cursor.style.top = `${e.clientY}px`;
        });
    }
    initHover() {
        const targets = document.querySelectorAll('a, button, label, .hero__card');
        targets.forEach(el => {
            el.addEventListener('mouseenter', () => {
                this.cursor.classList.add('cursor--hover');
            });
            el.addEventListener('mouseleave', () => {
                this.cursor.classList.remove('cursor--hover');
            });
        });
    }
    initGlitter() {
        document.addEventListener('mousemove', (e) => {
            const x = e.clientX, y = e.clientY;
            const d = Math.hypot(x - this.lastX, y - this.lastY);
            if (d < 8 || this.throttle) return;
            this.throttle = true;
            for (let i = 0; i < 8; i++) this.spawnParticle(x, y);
            this.lastX = x;
            this.lastY = y;
            setTimeout(() => (this.throttle = false), 30);
        });
    }
    spawnParticle(x, y) {
        const el = document.createElement('div');
        const angle = Math.random() * Math.PI * 2;
        const dist = 18 + Math.random() * 44;
        const dx = Math.cos(angle) * dist;
        const dy = Math.sin(angle) * dist;
        const s = 4 * (0.4 + Math.random() * 1.0);
        const color = this.colors[Math.floor(Math.random() * this.colors.length)];
        const dur = 800 * (0.65 + Math.random() * 0.55);
        el.style.cssText = `position: fixed;pointer-events: none;border-radius: 50%;width: ${s}px;height: ${s}px;left: ${x - s / 2}px;top: ${y - s / 2}px;background: ${color};box-shadow: 0 0 ${s * 1.5}px ${color};z-index: 999998;transition: transform ${dur}ms ease-out, opacity ${dur}ms ease-out;`;
        document.body.appendChild(el);
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                el.style.transform = `translate(${dx}px, ${dy}px) scale(0)`;
                el.style.opacity = '0';
            });
        });
        setTimeout(() => el.remove(), dur + 50);
    }
}