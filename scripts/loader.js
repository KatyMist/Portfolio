export function initLoader() {
    const loadingScreen = document.getElementById('loadingScreen');
    const nameLoader = document.getElementById('nameLoader');
    const roleLoader = document.getElementById('roleLoader');

    if (!loadingScreen || !nameLoader || !roleLoader) {
        console.log('❌ Loader elements not found');
        return;
    }

    console.log('✅ Loader initialized');

    nameLoader.textContent = '';
    roleLoader.textContent = '';

    const name = 'Екатерина Туманова';
    const role = 'Frontend Developer';
    let nameIdx = 0;
    let roleIdx = 0;

    function addNameChar() {
        if (nameIdx < name.length) {
            nameLoader.textContent += name[nameIdx];
            nameIdx++;
            setTimeout(addNameChar, 40);
        } else {
            console.log('✅ Name done, starting role');
            setTimeout(addRoleChar, 500);
        }
    }

    function addRoleChar() {
        if (roleIdx < role.length) {
            roleLoader.textContent += role[roleIdx];
            roleIdx++;
            setTimeout(addRoleChar, 40);
        } else {
            console.log('✅ Role done, hiding loader');
            hideLoader();
        }
    }

    function hideLoader() {
        loadingScreen.classList.add('fade-out');
        console.log('✅ fade-out added');
        
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            console.log('✅ Loader hidden');
        }, 800); // ← ВАЖНО: совпадает с transition 0.8s
    }

    // SAFETY timeout
    setTimeout(() => {
        if (loadingScreen && loadingScreen.style.display !== 'none') {
            console.log('⚠️ SAFETY: Forcing loader hide');
            loadingScreen.style.display = 'none';
        }
    }, 5000);

    // Старт
    console.log('📍 Starting loader animation');
    addNameChar();
}