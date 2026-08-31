export function initLoadMore() {
    document.querySelectorAll('.js-load-more-content').forEach((block) => {
        // защита от повторной инициализации одного и того же блока
        if (block.dataset.loadMoreInit) return;
        block.dataset.loadMoreInit = 'true';

        block.classList.add('is-hidden');

        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'load-more';

        const setLabel = (isHidden) => {
            button.innerHTML = isHidden
                ? `ПОКАЗАТЬ <span class="load-more__arrow"></span> ВСЕ`
                : `СВЕРНУТЬ <span class="load-more__arrow load-more__arrow--up"></span> СПИСОК`;
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