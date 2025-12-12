export function initMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (menuToggle && mainNav) {
        // Відкриття меню
        menuToggle.addEventListener('click', function () {
            mainNav.classList.toggle('active');
        });

        // Закриття при кліку на посилання
        document.querySelectorAll('.main-nav a').forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('active');
            });
        });

        console.log('Меню ініціалізовано');
    }
}