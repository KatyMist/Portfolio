export function initLoadMore() {
    document.querySelectorAll('.js-load-more-content').forEach((block) => {
        block.classList.add('is-hidden');

        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'load-more';

        const setLabel = (isHidden) => {
            button.innerHTML = isHidden
                ? `<span>Показать</span><span class="load-more__arrow">↓</span><span>все</span>`
                : `<span>Свернуть</span><span class="load-more__arrow load-more__arrow--up">↑</span><span>список</span>`;
        };

        setLabel(true);

        button.addEventListener('click', () => {
            const isHidden = block.classList.toggle('is-hidden');
            setLabel(isHidden);

            if (isHidden) {
                block.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });

        block.insertAdjacentElement('afterend', button);
    });
}