// ──────────────────────────────────────────────────────────
// ПЕРЕКЛЮЧЕНИЕ ЯЗЫКА (EN / RU)
// ──────────────────────────────────────────────────────────
// Английский — язык по умолчанию. Русский подключается через
// переключатель в шапке сайта и запоминается в localStorage.

const STORAGE_KEY = 'lang';

export const translations = {
    // ---------- Общее (шапка, футер, загрузка, cookies) ----------
    'common.name': { en: 'Ekaterina Tumanova', ru: 'Екатерина Туманова' },
    'common.logo.alt': { en: 'Ekaterina Tumanova — Frontend Developer', ru: 'Екатерина Туманова — Frontend Developer' },
    'common.nav.about': { en: 'ABOUT ME', ru: 'ОБО МНЕ' },
    'common.nav.home': { en: 'HOME', ru: 'ГЛАВНАЯ' },
    'common.nav.skills': { en: 'SKILLS', ru: 'НАВЫКИ' },
    'common.nav.portfolio': { en: 'PORTFOLIO', ru: 'ПОРТФОЛИО' },
    'common.nav.contacts': { en: 'CONTACTS', ru: 'КОНТАКТЫ' },
    'common.themeToggle.ariaLabel': { en: 'Toggle theme', ru: 'Переключить тему' },
    'common.langSwitch.ariaLabel': { en: 'Switch language', ru: 'Переключить язык' },
    'common.footer.process': { en: 'Development process', ru: 'Процесс разработки' },
    'common.footer.privacy': { en: 'Privacy Policy', ru: 'Политика конфеденциальности' },
    'common.footer.analytics': { en: 'This website uses the Yandex.Metrica web analytics service', ru: 'Сайт использует сервис веб-аналитики Яндекс.Метрика' },
    'common.cookies.text': {
        en: 'We use <a href="privacy.html" class="cookies-banner__link">cookies</a> to ensure the site works correctly and to analyze traffic',
        ru: 'Мы используем <a href="privacy.html" class="cookies-banner__link">cookie-файлы</a> для корректной работы сайта и анализа посещаемости',
    },
    'common.cookies.accept': { en: 'Accept', ru: 'Согласен' },

    'loader.name': { en: 'Ekaterina Tumanova', ru: 'Екатерина Туманова' },

    'loadMore.show': { en: 'SHOW', ru: 'ПОКАЗАТЬ' },
    'loadMore.showSuffix': { en: 'ALL', ru: 'ВСЕ' },
    'loadMore.hide': { en: 'HIDE', ru: 'СВЕРНУТЬ' },
    'loadMore.hideSuffix': { en: 'LIST', ru: 'СПИСОК' },

    // ---------- index.html ----------
    'idx.meta.title': { en: 'Ekaterina Tumanova — Frontend Developer', ru: 'Екатерина Туманова — Frontend Developer' },
    'idx.meta.description': { en: 'Portfolio — Ekaterina Tumanova, Frontend Developer', ru: 'Портфолио - Екатерина Туманова Frontend Developer' },
    'idx.meta.ogTitle': { en: 'Ekaterina Tumanova | Frontend Developer', ru: 'Екатерина Туманова | Frontend Developer' },

    'idx.hero.bgTitle': { en: 'PORTFOLIO', ru: 'ПОРТФОЛИО' },

    'idx.skills.title': { en: 'STACK & TOOLS', ru: 'СТЕК И ИНСТРУМЕНТЫ' },
    'idx.skills.col1.title': { en: 'Technical skills', ru: 'Технические навыки' },
    'idx.skills.item.responsive': { en: 'Responsive, cross-browser markup', ru: 'Адаптивная и кроссбраузерная вёрстка' },
    'idx.skills.item.bem': { en: 'Semantic markup, BEM methodology', ru: 'Семантическая вёрстка, БЭМ (BEM)' },
    'idx.skills.item.seo': { en: 'Basic SEO', ru: 'Базовое SEO' },
    'idx.skills.col1.title2': { en: 'Currently learning', ru: 'Изучаю сейчас' },
    'idx.skills.item.english': { en: 'English (A2)', ru: 'Английский язык (A2)' },
    'idx.skills.col2.title': { en: 'Tools & approach', ru: 'Инструменты и подход' },
    'idx.skills.item.figma': { en: 'Figma (markup from designs)', ru: 'Figma (вёрстка по макетам)' },
    'idx.skills.item.component': { en: 'Component-based approach', ru: 'Компонентный подход' },
    'idx.skills.item.cleanCode': { en: 'Clean, readable code', ru: 'Чистый и читаемый код' },
    'idx.skills.item.perf': { en: 'Basic performance optimization', ru: 'Базовая оптимизация производительности' },
    'idx.skills.col2.title2': { en: 'Languages', ru: 'Языки' },
    'idx.skills.item.russian': { en: 'Russian — native', ru: 'Русский — родной' },

    'idx.courses.title': { en: 'EDUCATION & CERTIFICATES', ru: 'ОБУЧЕНИЕ И СЕРТИФИКАТЫ' },
    'idx.courses.col1.title': { en: 'Stepik courses', ru: 'Курсы Stepik' },
    'idx.courses.description': {
        en: 'I keep learning and improving my skills every day!<br>\n                        <a href="https://stepik.org/users/1179792686/profile" class="courses-link" target="_blank">→ All courses on Stepik</a>',
        ru: 'Продолжаю учиться и совершенствовать свои навыки каждый день!<br>\n                        <a href="https://stepik.org/users/1179792686/profile" class="courses-link" target="_blank">→ Все курсы на Stepik</a>',
    },
    'idx.courses.cert1': { en: 'Your JavaScript', ru: 'Твой JavaScript' },
    'idx.courses.cert2': { en: 'JavaScript Deep Dive: for Beginners', ru: 'Погружение в JavaScript: для начинающих' },
    'idx.courses.cert4': { en: 'Web Development for Beginners: HTML and CSS', ru: 'Веб-разработка для начинающих: HTML и CSS' },
    'idx.courses.cert5': { en: 'Git and GitHub Basics', ru: 'Основы Git и GitHub' },
    'idx.courses.col2.title': { en: 'Other platforms', ru: 'Другие площадки' },
    'idx.courses.empty': { en: 'Courses from other platforms will appear here soon', ru: 'Скоро здесь появятся курсы с других платформ' },

    'idx.projects.title': { en: 'MY PROJECTS', ru: 'МОИ ПРОЕКТЫ' },
    'idx.projects.commercial.title': { en: 'Commercial', ru: 'Коммерческие' },
    'idx.projects.commercial.desc': { en: 'Building websites for real clients and personal projects.', ru: 'Разработка сайтов для реальных заказчиков и собственных проектов.' },
    'idx.projects.edu.title': { en: 'Educational', ru: 'Учебные' },
    'idx.projects.edu.desc': { en: 'Projects built while learning and developing new skills.', ru: 'Проекты, выполненные в процессе обучения и для развития навыков.' },

    'idx.project.viewBtn': { en: 'View project →', ru: 'Смотреть проект →' },
    'idx.project.codeBtn': { en: 'Source code →', ru: 'Разработка →' },
    'idx.project.eduType': { en: 'Educational project', ru: 'Учебный проект' },

    'idx.project1.name': { en: "Website for Anna Kudurova's podiatry and wellness aesthetics school-studio", ru: 'Сайт для школы-студии подологии и здоровой эстетики Анны Кудуровой' },
    'idx.project1.type': { en: "A full-scale commercial project built from scratch based on the client's brief", ru: 'Полноценный коммерческий проект, разработанный с нуля по брифу заказчика' },
    'idx.project1.desc1': { en: "A website for Anna Kudurova's podiatry and wellness aesthetics school-studio. The project was built with the field's specifics, brand positioning, and target audience needs in mind.", ru: 'Сайт для школы-студии подологии и здоровой эстетики Анны Кудуровой. Проект создан с учётом специфики направления, позиционирования бренда и потребностей целевой аудитории.' },
    'idx.project1.desc2': { en: 'I independently designed the site structure, implemented responsive markup, wired up the required functionality, performed basic SEO optimization, and set up Yandex.Metrica to track traffic and user behavior.', ru: 'Самостоятельно разработала структуру сайта, реализовала адаптивную вёрстку, подключила необходимый функционал, выполнила базовую SEO-оптимизацию и настроила Яндекс Метрику для аналитики посещаемости и поведения пользователей.' },
    'idx.project1.desc3': {
        en: '<strong>Result:</strong> a modern, fast, and responsive website, ready for launch, promotion, and further development.',
        ru: '<strong>Результат:</strong> современный, быстрый и адаптивный сайт, готовый к публикации, продвижению и дальнейшему развитию.',
    },
    'idx.project1.imgAlt': { en: 'Podiatry studio website', ru: 'Сайт подолога' },

    'idx.project2.name': { en: 'Personal portfolio website', ru: 'Персональный сайт-портфолио' },
    'idx.project2.type': { en: 'Personal project', ru: 'Персональный проект' },
    'idx.project2.desc1': { en: 'A personal portfolio website with an original concept and a distinctive visual style.', ru: 'Личный сайт-портфолио с авторской концепцией и индивидуальным визуальным стилем.' },
    'idx.project2.desc2': { en: 'I independently designed the structure, visual design, and color palette, and implemented responsive markup and interactive elements using HTML, SCSS, and JavaScript.', ru: 'Самостоятельно разработала структуру, дизайн и цветовую палитру, реализовала адаптивную вёрстку и интерактивные элементы с использованием HTML, SCSS и JavaScript.' },
    'idx.project2.desc3': {
        en: '<strong>Result:</strong> a unique personal website built entirely from scratch.',
        ru: '<strong>Результат:</strong>  уникальный персональный сайт, полностью созданный с нуля.',
    },
    'idx.project2.imgAlt': { en: 'Portfolio website', ru: 'Портфолио сайт' },

    'idx.project3.name': { en: 'Documentation website for a forestry specialist', ru: 'Сайт по разработке документации в сфере лесного хозяйства' },
    'idx.project3.type': { en: 'A fully original commercial project — from concept to finished website', ru: 'Полностью авторский коммерческий проект — от идеи и концепции до готового сайта' },
    'idx.project3.desc1': { en: 'A website for a forestry industry specialist, built entirely from scratch: from concept and structure to visual design, frontend development, and publishing.', ru: 'Сайт для специалиста в сфере лесного хозяйства, полностью разработанный с нуля: от формирования концепции и структуры до визуального оформления, frontend-разработки и публикации.' },
    'idx.project3.desc2': { en: "I planned the site structure and user flow, developed the visual concept, and chose the color palette, typography, and graphic elements to create a cohesive style matching the project's subject.", ru: 'Продумала структуру и пользовательский сценарий, разработала визуальную концепцию, подобрала цветовую палитру, типографику и графические элементы, создав единый стиль проекта в соответствии с его тематикой.' },
    'idx.project3.desc3': { en: 'I implemented responsive markup with HTML, SCSS, and JavaScript, ensuring the site displays correctly across devices, with particular attention to semantic markup, code structure, navigation, and content hierarchy.', ru: 'Реализовала адаптивную вёрстку на HTML, SCSS и JavaScript, обеспечив корректное отображение сайта на различных устройствах. Особое внимание уделила семантической разметке, структуре кода, навигации и визуальной иерархии контента.' },
    'idx.project3.desc4': { en: 'I performed basic SEO optimization: refined the heading structure and meta tags, optimized images, and prepared the site for correct indexing by search engines. I also built the project and deployed the finished site online.', ru: 'Выполнила базовую SEO-оптимизацию: проработала структуру заголовков и метатеги, оптимизировала изображения и подготовила сайт к корректной индексации поисковыми системами. Также выполнила сборку проекта и разместила готовый сайт в интернете.' },
    'idx.project3.desc5': {
        en: '<strong>Result:</strong> a modern, responsive, fully original commercial website that I built from scratch — from the initial idea and visual concept to the finished product.',
        ru: '<strong>Результат:</strong> современный, адаптивный и полностью авторский коммерческий сайт, созданный мной с нуля — от идеи и визуальной концепции до готового продукта.',
    },
    'idx.project3.imgAlt': { en: 'Portfolio website', ru: 'Портфолио сайт' },

    'idx.project4.desc': {
        en: 'A responsive fitness club landing page built while following a video tutorial. The project helped reinforce semantic and responsive markup skills using <b>HTML</b> and <b>CSS</b>.',
        ru: 'Адаптивный лендинг фитнес-клуба, созданный в рамках обучения по видеоуроку. Проект позволил закрепить навыки семантической и адаптивной вёрстки с использованием <b>HTML</b> и <b>CSS</b>.',
    },
    'idx.project4.imgAlt': { en: 'Kropp Fitness website', ru: 'Kropp Fitness сайт' },

    'idx.project5.desc': {
        en: 'A landing page about future technologies, built while following a video tutorial. Development included responsive markup and interactive elements using <b>HTML</b>, <b>SCSS</b>, and <b>JavaScript</b>.',
        ru: 'Лендинг о технологиях будущего, выполненный в рамках обучения по видеоуроку. В процессе разработки реализованы адаптивная вёрстка и интерактивные элементы с использованием <b>HTML</b>, <b>SCSS</b> и <b>JavaScript</b>.',
    },
    'idx.project5.imgAlt': { en: 'Future Tech website', ru: 'Future Tech сайт' },

    'idx.project6.desc1': { en: 'Todo React is an educational SPA for task management, built while learning React. The project started from video tutorials and was then extended independently. Development covered the component-based approach, React Hooks, the Context API, working with a REST API, and structuring the application.', ru: 'Todo React — учебное SPA-приложение для управления задачами, разработанное в процессе изучения React. Проект создан на основе видеоуроков с последующей самостоятельной доработкой. В ходе разработки были освоены компонентный подход, React Hooks, Context API, взаимодействие с REST API и организация структуры приложения.' },
    'idx.project6.desc2': { en: 'Implemented creating, searching, editing, deleting, and changing the status of tasks, with data synced through JSON Server.', ru: 'Реализованы создание, поиск, редактирование, удаление и изменение статуса задач с синхронизацией данных через JSON Server.' },
    'idx.project6.imgAlt': { en: 'Todo React project', ru: 'Todo React проект' },

    'idx.project7.desc1': { en: 'An SPA for managing a pizzeria menu, built with React and TypeScript. Implemented CRUD operations, controlled forms with validation, and data persistence in localStorage.', ru: 'SPA-приложение для управления меню пиццерии, разработанное на React и TypeScript. Реализованы CRUD-операции, контролируемые формы с валидацией и сохранением данных в localStorage.' },
    'idx.project7.desc2': { en: 'The core logic was built as part of a training course, while the interface design, responsive markup, and SCSS styling were done independently.', ru: 'Основная логика выполнена в рамках обучающего курса, дизайн интерфейса, адаптивная вёрстка и стилизация на SCSS разработаны самостоятельно.' },
    'idx.project7.imgAlt': { en: 'Pizzeria project', ru: 'Pizzeria проект' },

    'idx.project8.desc1': { en: 'An interactive online chess game built from a training video tutorial, with additional custom game-logic improvements and a completely redesigned interface style.', ru: 'Интерактивная онлайн-игра в шахматы, созданная на основе обучающего видеоурока с дополнительной доработкой игровой логики и полностью изменённой стилистикой интерфейса.' },
    'idx.project8.desc2': { en: 'Development implemented the core chess mechanics and interaction with the board and pieces, along with custom changes and improvements to the application logic.', ru: 'В процессе разработки были реализованы основные механики шахматной игры, взаимодействие с игровым полем и фигурами, а также внесены собственные изменения и улучшения в логику приложения.' },
    'idx.project8.desc3': { en: "Special attention was given to the visual side — the tutorial's default design was reworked into a more modern, original style.", ru: 'Особое внимание уделено визуальной части — стандартный дизайн из урока переработан в более современном и оригинальном стиле.' },
    'idx.project8.desc4': {
        en: '<strong>Stack: TypeScript · React · Vite · CSS/SCSS</strong>',
        ru: '<strong>Стек: TypeScript · React · Vite · CSS/SCSS</strong>',
    },
    'idx.project8.imgAlt': { en: 'Chessland project', ru: 'Chessland проект' },

    'idx.contacts.title': { en: 'CONTACTS', ru: 'КОНТАКТЫ' },
    'idx.contacts.value.stepik': { en: 'Certificates and courses', ru: 'Сертификаты и курсы' },
    'idx.contacts.value.hh': { en: 'Resume and work experience', ru: 'Резюме и опыт работы' },
    'idx.contacts.heading': { en: 'Open to new opportunities', ru: 'Открыта к новым возможностям' },
    'idx.contacts.text': { en: "Looking for a team to start my professional journey in frontend development. I'd love the opportunity to grow professionally, keep learning, and work on interesting projects.", ru: 'Ищу команду для начала профессионального пути во frontend-разработке. Буду рада возможности развиваться профессионально, учиться и работать над интересными проектами.' },

    // ---------- process.html ----------
    'proc.meta.title': { en: 'Development Process — Ekaterina Tumanova', ru: 'Процесс разработки — Екатерина Туманова' },
    'proc.meta.description': { en: 'Website development process', ru: 'Процесс разработки сайта' },
    'proc.hero.bgTitle': { en: 'PROCESS', ru: 'ПРОЦЕСС' },

    'proc.step1': { en: '01. Brief & Concept', ru: '01. Бриф и концепция' },
    'proc.step2': { en: '02. Structure Planning', ru: '02. Продумывание структуры' },
    'proc.step3': { en: '03. Gathering Materials', ru: '03. Подготовка материалов' },
    'proc.step4': { en: '04. Design Approval', ru: '04. Утверждение макета' },
    'proc.step5': { en: '05. Markup & Development', ru: '05. Вёрстка и разработка' },
    'proc.step6': { en: '06. Device Adaptation', ru: '06. Адаптация под устройства' },
    'proc.step7': { en: '07. Testing & Final Revisions', ru: '07. Тестирование и финальные правки' },
    'proc.step8': { en: '08. Website Publishing', ru: '08. Публикация сайта' },
    'proc.step9': { en: '09. Project Handover', ru: '09. Передача проекта' },

    'proc.title': { en: 'Development Process', ru: 'Процесс разработки' },
    'proc.intro': { en: 'My main focus is frontend development and working within a team. The stages below show how the work can be organized when building a custom website.', ru: 'Основное направление моего развития — Frontend Development и работа в команде. Представленные ниже этапы показывают, как может быть организована работа при разработке индивидуального сайта.' },

    'proc.s1.p1': { en: 'The work starts with a short brief, where you describe your project, wishes, and preferences.', ru: 'Работа начинается с небольшого брифа, где вы рассказываете о своем проекте, пожеланиях и предпочтениях.' },
    'proc.s1.p2': { en: "Based on it, I create a preliminary layout of the future website. We then discuss the proposed concept together, adjust it if needed, and only move on to development once it's approved.", ru: 'На его основе я создаю ориентировочный макет будущего сайта. Затем мы вместе обсуждаем предложенную концепцию, при необходимости корректируем ее и только после согласования переходим к разработке.' },
    'proc.s1.btn': { en: 'Download the brief', ru: 'Скачать бриф' },

    'proc.s2.p1': { en: 'At this stage, the logic of the future website takes shape:', ru: 'На этом этапе формируется логика будущего сайта:' },
    'proc.s2.li1': { en: 'the list of pages is defined;', ru: 'определяется список страниц;' },
    'proc.s2.li2': { en: 'the sequence of blocks is planned;', ru: 'продумывается последовательность блоков;' },
    'proc.s2.li3': { en: 'a convenient user journey is mapped out;', ru: 'выстраивается удобный путь пользователя;' },
    'proc.s2.li4': { en: 'the placement of key elements is determined.', ru: 'определяется расположение ключевых элементов.' },
    'proc.s2.p2': { en: 'The main goal is to make the site not just attractive, but also clear, convenient, and logical for the visitor.', ru: 'Главная задача — сделать сайт не только привлекательным, но и понятным, удобным и логичным для посетителя.' },

    'proc.s3.p1': { en: 'Before development begins, we gather all the materials the project needs. This helps get started faster and build a website that matches your expectations.', ru: 'Перед началом разработки мы собираем все необходимые материалы для проекта. Это помогает быстрее приступить к работе и создать сайт, который будет соответствовать вашим ожиданиям.' },
    'proc.s3.li1': { en: 'texts (if available);', ru: 'тексты (при наличии);' },
    'proc.s3.li2': { en: 'photos, images, or other visual content;', ru: 'фотографии, изображения или другой визуальный контент;' },
    'proc.s3.li3': { en: 'logo and brand identity (if any);', ru: 'логотип и фирменный стиль (если есть);' },
    'proc.s3.li4': { en: 'examples of websites you like;', ru: 'примеры сайтов, которые вам нравятся;' },
    'proc.s3.li5': { en: 'additional information about the company, services, or products.', ru: 'дополнительная информация о компании, услугах или продукции.' },

    'proc.s4.p1': { en: "Based on your preferences and references, a visual concept for the future website is formed: color palette, typography, interface style, and the project's overall mood.", ru: 'На основе ваших пожеланий и референсов формируется визуальная концепция будущего сайта: цветовая палитра, типографика, стилистика интерфейса и общая атмосфера проекта.' },
    'proc.s4.p2': { en: 'Before development starts, I prepare a layout for us to approve together. Once approved, we move on to implementation.', ru: 'Перед началом разработки я подготавливаю макет, который мы согласовываем. После утверждения переходим к реализации.' },

    'proc.s5.p1': { en: 'Once the design is approved, development begins using modern technologies: HTML, SCSS, and JavaScript.', ru: 'После утверждения дизайна начинается разработка сайта с использованием современных технологий: HTML, SCSS и JavaScript.' },
    'proc.s5.p2': { en: 'This includes responsive markup, animations, interactive elements, and any functionality the project requires.', ru: 'Реализуются адаптивная вёрстка, анимации, интерактивные элементы и функциональность, предусмотренная проектом.' },

    'proc.s6.p1': { en: 'The website is checked and optimized for various devices and modern browsers:', ru: 'Сайт проверяется и оптимизируется для различных устройств и современных браузеров:' },
    'proc.s6.li1': { en: 'smartphones;', ru: 'смартфоны;' },
    'proc.s6.li2': { en: 'tablets;', ru: 'планшеты;' },
    'proc.s6.li3': { en: 'laptops;', ru: 'ноутбуки;' },
    'proc.s6.li4': { en: 'large monitors.', ru: 'большие мониторы.' },
    'proc.s6.p2': { en: 'Responsiveness is built in from the development stage, not added on after the project is finished.', ru: 'Адаптивность закладывается на этапе разработки, а не добавляется после завершения проекта.' },

    'proc.s7.p1': { en: 'Before publishing, the project undergoes a comprehensive review:', ru: 'Перед публикацией проводится комплексная проверка проекта:' },
    'proc.s7.li1': { en: 'correct display;', ru: 'корректность отображения;' },
    'proc.s7.li2': { en: 'forms and links working properly;', ru: 'работа форм и ссылок;' },
    'proc.s7.li3': { en: 'loading speed;', ru: 'скорость загрузки;' },
    'proc.s7.li4': { en: 'compliance with the approved layout.', ru: 'соответствие утверждённому макету.' },
    'proc.s7.p2': { en: 'After reviewing it, you can provide a list of revisions within the agreed scope of work, after which the project is prepared for publishing.', ru: 'После просмотра вы можете предоставить перечень замечаний в рамках согласованного объёма работ, после чего проект подготавливается к публикации.' },

    'proc.s8.p1': { en: 'Once development is complete, the website is deployed to your chosen hosting and connected to your domain name.', ru: 'После завершения разработки сайт размещается на выбранном вами хостинге и подключается к вашему доменному имени.' },
    'proc.s8.p2': { en: "If you haven't chosen a domain or hosting yet, I'll help you pick a suitable option and provide recommendations. Before publishing, basic SEO setup is performed: meta tags, page titles, favicon, Open Graph, and other parameters needed for the site to display and get indexed correctly.", ru: 'Если домен или хостинг ещё не выбраны, я помогу с выбором подходящего варианта и предоставлю рекомендации. Перед публикацией выполняется базовая SEO-настройка: мета-теги, заголовки страниц, favicon, Open Graph и другие необходимые параметры для корректного отображения и индексации сайта.' },

    'proc.s9.p1': { en: 'Once the work is complete, you receive:', ru: 'После завершения работ вы получаете:' },
    'proc.s9.li1': { en: 'a link to the finished website;', ru: 'ссылку на готовый сайт;' },
    'proc.s9.li2': { en: "the project's source files (if agreed upon in advance).", ru: 'исходные файлы проекта (если это предусмотрено договорённостями).' },
    'proc.s9.p2': { en: 'Further development, new changes, code-related training, or project support are not included in the development cost and are handled separately, by agreement. If needed, you can reach out to me or any other specialist.', ru: 'Дальнейшее развитие, внесение новых изменений, обучение работе с кодом или сопровождение проекта не входят в стоимость разработки и выполняются отдельно по договорённости. При необходимости вы можете обратиться ко мне либо к любому другому специалисту.' },

    // ---------- privacy.html ----------
    'priv.meta.title': { en: 'Privacy Policy — Ekaterina Tumanova', ru: 'Политика конфеденциальности — Екатерина Туманова' },
    'priv.meta.description': { en: 'Privacy Policy', ru: 'Политика конфеденциальности' },
    'priv.hero.bgTitle': { en: 'POLICY', ru: 'ПОЛИТИКА' },

    'priv.nav1': { en: '1. General Provisions', ru: '1. Общие положения' },
    'priv.nav2': { en: '2. Key Terms Used in this Policy', ru: '2. Основные понятия, используемые в Политике' },
    'priv.nav3': { en: '3. Basic Rights and Obligations of the Operator', ru: '3. Основные права и обязанности Оператора' },
    'priv.nav4': { en: '4. Basic Rights and Obligations of Data Subjects', ru: '4. Основные права и обязанности субъектов обезличенных данных' },
    'priv.nav5': { en: '5. Principles of Processing Anonymized Data', ru: '5. Принципы обработки обезличенных данных' },
    'priv.nav6': { en: '6. Purposes of Processing Anonymized Data', ru: '6. Цели обработки обезличенных данных' },
    'priv.nav7': { en: '7. Processing Conditions', ru: '7. Условия обработки' },
    'priv.nav8': { en: '8. Procedure for Collecting, Storing, Transferring, and Otherwise Processing Data', ru: '8. Порядок сбора, хранения, передачи и других видов обработки данных' },
    'priv.nav9': { en: '9. Actions Performed on Processed Data', ru: '9. Действия с обрабатываемыми данными' },
    'priv.nav10': { en: '10. Cross-Border Transfer of Personal Data', ru: '10. Трансграничная передача персональных данных' },
    'priv.nav11': { en: '11. Confidentiality of Data', ru: '11. Конфиденциальность данных' },
    'priv.nav12': { en: '12. Conclusion', ru: '12. Заключение' },

    'priv.h7': { en: '7. Data Processing Conditions', ru: '7. Условия обработки данных' },
    'priv.h12': { en: '12. Final Provisions', ru: '12. Заключительные положения' },

    'priv.title': { en: 'Privacy Policy and Cookie Usage', ru: 'Политика конфиденциальности и использования cookies' },
    'priv.date': { en: 'Last updated: July 1, 2026', ru: 'Обновлено: 01 июля 2026 г.' },

    'priv.s1.p1': { en: 'This Privacy Policy and Cookie Usage Policy has been drawn up in accordance with Federal Law No. 152-FZ "On Personal Data" dated July 27, 2006, and sets out how cookies are used and how anonymized data is processed, along with the protective measures taken by Ekaterina Anatolyevna Tumanova (hereinafter referred to as the "Operator").', ru: 'Настоящая Политика конфиденциальности и использования cookies составлена в соответствии с требованиями Федерального закона от 27.07.2006 № 152-ФЗ «О персональных данных» и определяет порядок использования cookies и обработки обезличенных данных и меры по их защите, предпринимаемые Тумановой Екатериной Анатольевной (далее — Оператор).' },
    'priv.s1.p2': { en: "The Operator's goal is to uphold human and civil rights and freedoms when processing personal data.", ru: 'Оператор ставит своей целью соблюдение прав и свобод человека и гражданина при обработке его персональных данных.' },
    'priv.s1.p3': { en: 'This Policy applies to the entire website: https://katymist.github.io/Portfolio/', ru: 'Настоящая Политика применяется ко всему сайту: https://katymist.github.io/Portfolio/' },

    'priv.s2.intro': { en: 'This Policy uses the following terms:', ru: 'В настоящей Политике используются следующие термины:' },
    'priv.s2.term1': { en: '<b>User</b> — any visitor to the website https://katymist.github.io/Portfolio/.', ru: '<b>Пользователь</b> — любой посетитель веб-сайта https://katymist.github.io/Portfolio/.' },
    'priv.s2.term2': { en: "<b>Cookies</b> — small pieces of data stored on the user's device and used to ensure the website functions correctly and to analyze traffic.", ru: '<b>Cookies</b> - небольшие фрагменты данных, сохраняемые на устройстве пользователя и используемые для обеспечения работы сайта и анализа его посещаемости.' },
    'priv.s2.term3': { en: '<b>Anonymized data</b> — information that does not allow the user to be identified, directly or indirectly, including technical data about the device, browser, and on-site activity.', ru: '<b>Обезличенные данные</b> - информация, не позволяющая прямо или косвенно идентифицировать пользователя, включая технические данные устройства, браузера и действия на сайте.' },
    'priv.s2.term4': { en: '<b>Web analytics</b> — analysis of website traffic using the third-party service Yandex.Metrica.', ru: '<b>Веб-аналитика</b> - анализ посещаемости сайта с использованием стороннего сервиса Яндекс.Метрика.' },

    'priv.s3.h1': { en: '<b>3.1. The Operator has the right to:</b>', ru: '<b>3.1. Оператор имеет право:</b>' },
    'priv.s3.li1': { en: 'independently determine the set of measures required to ensure the security and protection of anonymized data processed via web analytics services;', ru: 'самостоятельно определять состав и перечень мер, необходимых для обеспечения безопасности и защиты обезличенных данных, обрабатываемых с использованием сервисов веб-аналитики;' },
    'priv.s3.li2': { en: "use users' anonymized data for statistical analysis and to improve the website.", ru: 'использовать обезличенные данные пользователей для статистического анализа и улучшения работы сайта.' },
    'priv.s3.h2': { en: '<b>3.2. The Operator is obligated to:</b>', ru: '<b>3.2. Оператор обязан:</b>' },
    'priv.s3.li3': { en: 'ensure this Policy is published and accessible on the website;', ru: 'обеспечивать размещение и доступность настоящей Политики на сайте;' },
    'priv.s3.li4': { en: 'take the necessary measures to protect anonymized data collected via web analytics services;', ru: 'принимать необходимые меры для защиты обезличенных данных, собираемых с использованием сервисов веб-аналитики;' },
    'priv.s3.li5': { en: 'comply with the requirements of Russian Federation law regarding the processing of anonymized data and the use of cookies;', ru: 'соблюдать требования законодательства Российской Федерации в части обработки обезличенных данных и использования cookies;' },
    'priv.s3.li6': { en: 'restrict access to data processed by third-party services (including Yandex.Metrica);', ru: 'ограничивать доступ к данным, обрабатываемым сторонними сервисами (включая Яндекс.Метрику);' },
    'priv.s3.li7': { en: 'stop processing data in cases provided for by Russian Federation law.', ru: 'прекращать обработку данных в случаях, предусмотренных законодательством Российской Федерации.' },

    'priv.s4.h1': { en: '<b>4.1. The User has the right to:</b>', ru: '<b>4.1. Пользователь имеет право:</b>' },
    'priv.s4.li1': { en: 'receive information about the processing of anonymized data used on the website;', ru: 'получать информацию о обработке обезличенных данных, используемых на сайте;' },
    'priv.s4.li2': { en: 'restrict the use of cookies in their browser settings;', ru: 'ограничить использование cookies в настройках браузера;' },
    'priv.s4.li3': { en: 'opt out of anonymized data processing by disabling cookies or using the relevant browser settings;', ru: 'отказаться от обработки обезличенных данных путем отключения cookies или использования соответствующих настроек браузера;' },
    'priv.s4.li4': { en: 'contact the Operator regarding data processing matters.', ru: 'обратиться к Оператору по вопросам обработки данных.' },
    'priv.s4.h2': { en: '<b>4.2. The Operator does not process personal data that would allow the user to be directly identified and does not store user profiles.</b>', ru: '<b>4.2. Оператор не обрабатывает персональные данные, позволяющие прямо идентифицировать пользователя, и не осуществляет хранение пользовательских профилей.</b>' },

    'priv.s5.p1': { en: '5.1. The processing of anonymized data is carried out on a lawful and fair basis.', ru: '5.1. Обработка обезличенных данных осуществляется на законной и справедливой основе.' },
    'priv.s5.p2': { en: '5.2. The processing of anonymized data is limited to achieving specific, lawful purposes — analyzing traffic and improving the website.', ru: '5.2. Обработка обезличенных данных ограничивается достижением конкретных и законных целей — анализа посещаемости и улучшения работы сайта.' },
    'priv.s5.p3': { en: '5.3. Combining data obtained for different processing purposes is not permitted if it contradicts the stated purposes.', ru: '5.3. Не допускается объединение данных, полученных через различные цели обработки, если это противоречит заявленным целям.' },
    'priv.s5.p4': { en: '5.4. Only the anonymized data necessary to achieve the processing purposes is processed.', ru: '5.4. Обрабатываются только те обезличенные данные, которые необходимы для достижения целей обработки.' },
    'priv.s5.p5': { en: '5.5. The content and scope of the data processed correspond to the processing purposes. Excessive data processing is not carried out.', ru: '5.5. Содержание и объем обрабатываемых данных соответствуют целям обработки. Избыточная обработка данных не осуществляется.' },
    'priv.s5.p6': { en: '5.6. The Operator takes measures to ensure the accuracy and relevance of anonymized data within the web analytics services used.', ru: '5.6. Оператор принимает меры для обеспечения корректности и актуальности обезличенных данных в рамках используемых сервисов веб-аналитики.' },
    'priv.s5.p7': {
        en: '5.7. Anonymized data is stored in a form that allows the user to be identified for no longer than the processing purposes require, or in accordance with the policies of third-party services (including Yandex.Metrica). For more details: <a href="https://yandex.ru/legal/metrica_termsofuse/" target="_blank" rel="noopener noreferrer">Yandex.Metrica Terms of Use</a>',
        ru: '5.7. Обезличенные данные хранятся в форме, позволяющей определить пользователя, не дольше, чем этого требуют цели обработки, либо в соответствии с политиками сторонних сервисов (включая Яндекс.Метрику). Подробнее: <a href="https://yandex.ru/legal/metrica_termsofuse/" target="_blank" rel="noopener noreferrer">Условия использования сервиса Яндекс.Метрика</a>',
    },

    'priv.s6.h1': { en: '<b>The purpose of data processing is to analyze website traffic and improve the site using the Yandex.Metrica web analytics service.</b>', ru: '<b>Цель обработки данных — анализ посещаемости сайта и улучшение его работы с использованием сервиса веб-аналитики Яндекс.Метрика.</b>' },
    'priv.s6.p2': { en: "The website does not independently collect users' personal data, such as first name, last name, email address, or other data that would directly identify the user.", ru: 'Сайт не осуществляет самостоятельный сбор персональных данных пользователей, таких как имя, фамилия, адрес электронной почты или иные данные, позволяющие прямо идентифицировать пользователя.' },
    'priv.s6.p3': { en: 'When visiting the website, anonymized data may be processed automatically, including:', ru: 'При посещении сайта могут автоматически обрабатываться обезличенные данные, включая:' },
    'priv.s6.li1': { en: 'cookie files;', ru: 'cookie-файлы;' },
    'priv.s6.li2': { en: "technical data about the user's device and browser;", ru: 'технические данные устройства и браузера пользователя;' },
    'priv.s6.li3': { en: "information about the user's actions on the website (page views, navigation).", ru: 'информацию о действиях пользователя на сайте (просмотр страниц, переходы).' },
    'priv.s6.p4': { en: "<b>This data does not make it possible to establish the user's identity.</b>", ru: '<b>Указанные данные не позволяют установить личность пользователя.</b>' },

    'priv.s7.p1': { en: "7.1. Data is processed based on the user's consent, expressed through the use of the website and acceptance of cookie settings.", ru: '7.1. Обработка данных осуществляется на основании согласия пользователя, выраженного через использование сайта и принятие cookie-настроек.' },
    'priv.s7.p2': { en: '7.2. Data processing is necessary solely for web analytics purposes and to improve the website using the Yandex.Metrica service.', ru: '7.2. Обработка данных необходима исключительно для целей веб-аналитики и улучшения работы сайта с использованием сервиса Яндекс.Метрика.' },
    'priv.s7.p3': { en: '7.3. The website does not process personal data for the purposes of concluding contracts, providing services, or fulfilling government or other obligations that require user identification.', ru: '7.3. Сайт не осуществляет обработку персональных данных в целях заключения договоров, оказания услуг, исполнения государственных или иных обязательств, требующих идентификации пользователя.' },
    'priv.s7.p4': { en: '7.4. Anonymized data may only be processed within the operation of the third-party web analytics service and in accordance with its privacy policy.', ru: '7.4. Обезличенные данные могут обрабатываться только в рамках функционирования стороннего сервиса веб-аналитики и в соответствии с его политикой конфиденциальности.' },
    'priv.s7.p5': { en: '7.5. The processing of data that the user has made publicly available or provided voluntarily (should such a situation arise) is carried out within the limits of the applicable law of the Russian Federation.', ru: '7.5. Обработка данных, размещённых пользователем в открытом доступе или предоставленных им добровольно (если такая ситуация возникает), осуществляется в пределах действующего законодательства Российской Федерации.' },

    'priv.s8.p1': { en: '8.1. The security of data processed on the website is ensured through technical and organizational measures aimed at protecting information within the use of third-party web analytics services.', ru: '8.1. Безопасность данных, обрабатываемых на сайте, обеспечивается путем применения технических и организационных мер, направленных на защиту информации в рамках использования сторонних сервисов веб-аналитики.' },
    'priv.s8.p2': { en: "8.2. The website does not independently store or process users' personal data.", ru: '8.2. Сайт не осуществляет самостоятельное хранение или обработку персональных данных пользователей.' },
    'priv.s8.p3': { en: '8.3. Data processing takes place solely within the use of the Yandex.Metrica service and is limited to collecting anonymized statistical information about website visits.', ru: '8.3. Обработка данных осуществляется исключительно в рамках использования сервиса Яндекс.Метрика и ограничивается сбором обезличенной статистической информации о посещении сайта.' },
    'priv.s8.p4': { en: '8.4. Data is transferred to third parties only within the operation of the third-party web analytics service and in accordance with its privacy policy.', ru: '8.4. Передача данных третьим лицам осуществляется только в рамках функционирования стороннего сервиса веб-аналитики и в соответствии с его политикой конфиденциальности.' },
    'priv.s8.p5': { en: '8.5. The user can restrict or disable data processing by changing their browser settings or declining the use of cookies.', ru: '8.5. Пользователь может ограничить или отключить обработку данных, изменив настройки браузера или отказавшись от использования cookies.' },
    'priv.s8.p6': { en: "8.6. The data retention and processing period is determined by the policies of third-party services (including Yandex.Metrica) and the user's browser settings.", ru: '8.6. Срок хранения и обработки данных определяется политиками сторонних сервисов (включая Яндекс.Метрику) и настройками браузера пользователя.' },

    'priv.s9.p1': { en: "The Operator does not independently process users' personal data in the form of storage, systematization, clarification, or destruction.", ru: 'Оператор не осуществляет самостоятельную обработку персональных данных пользователей в виде их хранения, систематизации, уточнения или уничтожения.' },
    'priv.s9.p2': { en: 'Data processing on the website is limited to the use of anonymized information obtained through the Yandex.Metrica service.', ru: 'Обработка данных на сайте ограничивается использованием обезличенной информации, получаемой с помощью сервиса Яндекс.Метрика.' },
    'priv.s9.p3': { en: "The following actions may be performed on anonymized data as part of the website's operation:", ru: 'В рамках работы сайта могут осуществляться следующие действия с обезличенными данными:' },
    'priv.s9.li1': { en: 'collecting and analyzing statistical information about website visits;', ru: 'сбор и анализ статистической информации о посещениях сайта;' },
    'priv.s9.li2': { en: 'using cookies and technical browser data;', ru: 'использование cookies и технических данных браузера;' },
    'priv.s9.li3': { en: 'transferring anonymized information to web analytics services for processing in accordance with their privacy policies.', ru: 'передача обезличенной информации в сервисы веб-аналитики для обработки в соответствии с их политиками конфиденциальности.' },
    'priv.s9.p4': { en: "Automated data processing is carried out exclusively by means of third-party web analytics services and does not involve the creation of personal data databases on the Operator's side.", ru: 'Автоматизированная обработка данных осуществляется исключительно средствами сторонних сервисов веб-аналитики и не предполагает формирования баз персональных данных на стороне Оператора.' },

    'priv.s10.p1': { en: "The Operator does not independently carry out cross-border transfers of users' personal data.", ru: 'Оператор не осуществляет самостоятельную трансграничную передачу персональных данных пользователей.' },
    'priv.s10.p2': { en: 'The processing of anonymized data may be carried out using the third-party service Yandex.Metrica, in accordance with its privacy policy and data processing infrastructure.', ru: 'Обработка обезличенных данных может осуществляться с использованием стороннего сервиса Яндекс.Метрика в соответствии с его политикой конфиденциальности и инфраструктурой обработки данных.' },

    'priv.s11.p1': { en: 'The Operator ensures the confidentiality of processed data within the use of web analytics services.', ru: 'Оператор обеспечивает конфиденциальность обрабатываемых данных в рамках использования сервисов веб-аналитики.' },
    'priv.s11.p2': { en: "The website does not independently collect or store users' personal data.", ru: 'Сайт не осуществляет самостоятельный сбор или хранение персональных данных пользователей.' },
    'priv.s11.p3': { en: 'Data processing is limited to the use of anonymized information obtained through the Yandex.Metrica service, in accordance with its privacy policy.', ru: 'Обработка данных ограничивается использованием обезличенной информации, получаемой с помощью сервиса Яндекс.Метрика, в соответствии с его политикой конфиденциальности.' },
    'priv.s11.p4': { en: 'Access to data is carried out exclusively within the operation of third-party web analytics services.', ru: 'Доступ к данным осуществляется исключительно в рамках функционирования сторонних сервисов веб-аналитики.' },
    'priv.s11.p5': { en: 'Data is not transferred to third parties, except in cases provided for by the policies of the third-party services used and by the law of the Russian Federation.', ru: 'Передача данных третьим лицам не осуществляется, за исключением случаев, предусмотренных политикой используемых сторонних сервисов и законодательством Российской Федерации.' },

    'priv.s12.p1': { en: '12.1. The user may contact the Operator regarding matters related to the use of the website, cookies, and the processing of anonymized data via email: tumanova.ekaterina73@gmail.com.', ru: '12.1. Пользователь может обратиться к Оператору по вопросам, связанным с использованием сайта, cookies и обработкой обезличенных данных, посредством электронной почты: tumanova.ekaterina73@gmail.com.' },
    'priv.s12.p2': { en: 'This Policy may be amended by the Operator. The current version of the Policy is always available on the website. The Policy remains in effect indefinitely until replaced by a new version.', ru: 'Настоящая Политика может быть изменена Оператором. Актуальная версия Политики всегда доступна на сайте. Политика действует бессрочно до замены её новой редакцией.' },

    // ---------- 404.html ----------
    'nf.meta.title': { en: 'Page Not Found — Ekaterina Tumanova', ru: 'Страница не найдена — Екатерина Туманова' },
    'nf.meta.description': { en: 'Page not found — Ekaterina Tumanova, Frontend Developer', ru: 'Страница не найдена — Екатерина Туманова Frontend Developer' },
    'nf.meta.ogTitle': { en: '404 — Page Not Found', ru: '404 — Страница не найдена' },
    'nf.meta.ogDescription': { en: 'The requested page could not be found', ru: 'Запрашиваемая страница не найдена' },
    'nf.title': { en: 'Oops! Something went wrong', ru: 'Упс! Что-то пошло не так' },
    'nf.text': { en: "The page you're looking for couldn't be found. The link may be outdated, or the address may have been entered incorrectly.", ru: 'Запрашиваемая страница не найдена. Возможно, ссылка устарела или адрес введён с ошибкой.' },
    'nf.link': { en: '← Back to home', ru: '← На главную' },
};

function resolve(key, lang) {
    const entry = translations[key];
    if (!entry) return null;
    return entry[lang] ?? entry.en;
}

export function getCurrentLang() {
    return document.documentElement.lang === 'ru' ? 'ru' : 'en';
}

export function applyLanguage(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dataset.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
        const value = resolve(el.dataset.i18n, lang);
        if (value === null) return;
        if (el.dataset.i18nHtml !== undefined) {
            el.innerHTML = value;
        } else {
            el.textContent = value;
        }
    });

    document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
        el.dataset.i18nAttr.split(';').forEach((pair) => {
            const [attr, key] = pair.split(':');
            const value = resolve(key, lang);
            if (value !== null) el.setAttribute(attr, value);
        });
    });

    document.dispatchEvent(new CustomEvent('i18n:change', { detail: { lang } }));
}

export function initI18n() {
    const lang = getCurrentLang();
    applyLanguage(lang);

    const switcher = document.getElementById('langSwitch');
    if (!switcher) return;

    const buttons = switcher.querySelectorAll('[data-lang-btn]');

    const setPressed = (activeLang) => {
        buttons.forEach((btn) => {
            btn.setAttribute('aria-pressed', String(btn.dataset.langBtn === activeLang));
        });
    };
    setPressed(lang);

    buttons.forEach((btn) => {
        btn.addEventListener('click', () => {
            const next = btn.dataset.langBtn === 'ru' ? 'ru' : 'en';
            if (next === getCurrentLang()) return;

            applyLanguage(next);
            setPressed(next);

            try {
                localStorage.setItem(STORAGE_KEY, next);
            } catch (e) {}
        });
    });
}
