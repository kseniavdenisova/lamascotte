export function initUserEvents() {

    // Підсвітка меню мишкою
    const navLinks = document.querySelectorAll('header .main-nav a');

    if (navLinks.length > 0) {
        navLinks.forEach(link => {
            link.addEventListener('mouseenter', () => {
                link.classList.add('nav-highlight');
            });
            link.addEventListener('mouseleave', () => {
                link.classList.remove('nav-highlight');
            });
        });
    }

    // Відстеження натискань клавіш (ArrowUp/ArrowDown)
    document.addEventListener('keydown', function (event) {
        if (event.key === "ArrowUp") {
            console.log("Натиснуто стрілку ВГОРУ (ArrowUp)");
        } else if (event.key === "ArrowDown") {
            console.log("Натиснуто стрілку ВНИЗ (ArrowDown)");
        }
    });

    // Відстеження зміни масштабу (Ctrl +/-)
    let lastZoom = window.devicePixelRatio;

    window.addEventListener('resize', () => {
        // Перевіряємо, чи змінився піксельний коефіцієнт (масштаб)
        if (window.devicePixelRatio !== lastZoom) {
            console.log(`Масштаб сторінки змінено! Поточний рівень: ${window.devicePixelRatio}`);
            lastZoom = window.devicePixelRatio;
        }
    });
}