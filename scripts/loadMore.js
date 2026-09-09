import { translations, getCurrentLang } from './i18n.js';

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
            const lang = getCurrentLang();
            const show = translations['loadMore.show'][lang] ?? translations['loadMore.show'].en;
            const showSuffix = translations['loadMore.showSuffix'][lang] ?? translations['loadMore.showSuffix'].en;
            const hide = translations['loadMore.hide'][lang] ?? translations['loadMore.hide'].en;
            const hideSuffix = translations['loadMore.hideSuffix'][lang] ?? translations['loadMore.hideSuffix'].en;

            button.innerHTML = isHidden
                ? `${show} <span class="load-more__arrow"></span> ${showSuffix}`
                : `${hide} <span class="load-more__arrow load-more__arrow--up"></span> ${hideSuffix}`;
        };

        setLabel(true);

        button.addEventListener('click', () => {
            const isHidden = block.classList.toggle('is-hidden');
            setLabel(isHidden);

            if (isHidden) {
                block.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });

        document.addEventListener('i18n:change', () => {
            setLabel(block.classList.contains('is-hidden'));
        });

        block.insertAdjacentElement('afterend', button);
    });
}
