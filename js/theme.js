export function initThemeToggle() {
    const themeBtn = document.getElementById('theme-toggle');
    const body = document.body;
    const icon = themeBtn ? themeBtn.querySelector('i') : null;

    // Знаходимо iframe (якщо він є на сторінці)
    const iframe = document.querySelector('iframe');

    // Допоміжна функція для зміни теми всередині Iframe
    function toggleIframeTheme(isDark) {
        if (iframe && iframe.contentDocument && iframe.contentDocument.body) {
            if (isDark) {
                iframe.contentDocument.body.classList.add('dark-theme');
            } else {
                iframe.contentDocument.body.classList.remove('dark-theme');
            }
        }
    }

    // Перевірка пам'яті
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-theme');
        if (icon) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }

        // Спробувати змінити тему в іфреймі після його завантаження
        if (iframe) {
            iframe.onload = () => toggleIframeTheme(true);
            // Якщо він вже завантажений:
            toggleIframeTheme(true);
        }
    }

    // Обробка натискання
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            body.classList.toggle('dark-theme');
            const isDark = body.classList.contains('dark-theme');

            // Міняємо тему в Iframe разом з головною сторінкою
            toggleIframeTheme(isDark);

            if (isDark) {
                localStorage.setItem('theme', 'dark');
                if (icon) {
                    icon.classList.remove('fa-moon');
                    icon.classList.add('fa-sun');
                }
            } else {
                localStorage.setItem('theme', 'light');
                if (icon) {
                    icon.classList.remove('fa-sun');
                    icon.classList.add('fa-moon');
                }
            }
        });
    }
}