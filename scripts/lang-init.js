(function () {
    try {
        var STORAGE_KEY = 'lang';
        var saved = localStorage.getItem(STORAGE_KEY);
        // По умолчанию сайт открывается на английском языке
        var lang = saved === 'ru' ? 'ru' : 'en';
        document.documentElement.lang = lang;
        document.documentElement.dataset.lang = lang;
    } catch (e) {
        document.documentElement.lang = 'en';
        document.documentElement.dataset.lang = 'en';
    }
})();
