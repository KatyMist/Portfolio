class Cursor {
    constructor() {
        this.cursor = document.getElementById('cursor');
        
        if (!this.cursor) {
            console.error('❌ Cursor element not found');
            return;
        }
        
        this.lastX = 0;
        this.lastY = 0;
        this.throttle = false;
        this.colors = ['#FFFFFF','#F5F5F5','#E8E8E8','#D4D4D4','#C0C0C0','#F0F0F5'];
        
        this.initMove();
        this.initHover();
        this.initGlitter();
    }

    initMove() {
        document.addEventListener('mousemove', (e) => {
            this.cursor.style.left = e.clientX + 'px';
            this.cursor.style.top = e.clientY + 'px';
        });
    }

    initHover() {
        const targets = document.querySelectorAll('a, button');
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
        let lastParticleTime = 0;
        
        document.addEventListener('mousemove', (e) => {
            const now = Date.now();
            if (now - lastParticleTime < 30) return;
            
            lastParticleTime = now;
            
            for (let i = 0; i < 3; i++) {
                this.spawnParticle(e.clientX, e.clientY);
            }
        });
    }

    spawnParticle(x, y) {
        const el = document.createElement('div');
        const angle = Math.random() * Math.PI * 2;
        const dist = 15 + Math.random() * 30;
        const dx = Math.cos(angle) * dist;
        const dy = Math.sin(angle) * dist;
        const size = 3 + Math.random() * 4;
        const color = this.colors[Math.floor(Math.random() * this.colors.length)];
        const duration = 600 + Math.random() * 400;
        
        el.style.cssText = `
            position: fixed;
            pointer-events: none;
            border-radius: 50%;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: ${color};
            z-index: 999998;
        `;
        
        document.body.appendChild(el);
        
        requestAnimationFrame(() => {
            el.style.transition = `all ${duration}ms ease-out`;
            el.style.transform = `translate(${dx}px, ${dy}px) scale(0)`;
            el.style.opacity = '0';
        });
        
        setTimeout(() => el.remove(), duration + 50);
    }
}

export function initCursor() {
    document.body.style.cursor = 'none';
    new Cursor();
}