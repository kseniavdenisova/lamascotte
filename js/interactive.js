import { mini_data } from './mini_data.js';

export function initCarousel() {
    // Знаходимо всі елементи на сторінці, які треба змінювати
    const imgElement = document.getElementById('p-image');
    const titleElement = document.getElementById('p-title');
    const priceElement = document.getElementById('p-price');
    const descElement = document.getElementById('p-desc');
    const topElement = document.getElementById('p-top');
    const heartElement = document.getElementById('p-heart');
    const baseElement = document.getElementById('p-base');
    const compElement = document.getElementById('p-comp');

    // Кнопки навігації
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    // Кнопки "Читати більше"
    const btnDesc = document.getElementById('btn-desc');
    const btnComp = document.getElementById('btn-comp');

    // Якщо елементів немає, зупиняємо функцію
    if (!imgElement || !prevBtn || !nextBtn) return;

    let currentIndex = 0; // Починаємо з першого боксу (індекс 0)

    // Функція перемикання тексту
    function toggleText(textElement, buttonElement) {
        // Перемикаємо клас expanded
        textElement.classList.toggle('text-expanded');

        // Змінюємо текст кнопки
        if (textElement.classList.contains('text-expanded')) {
            buttonElement.textContent = "Згорнути";
        } else {
            buttonElement.textContent = "Читати більше";
        }
    }

    if (btnDesc && descElement) {
        btnDesc.addEventListener('click', () => toggleText(descElement, btnDesc));
    }
    if (btnComp && compElement) {
        btnComp.addEventListener('click', () => toggleText(compElement, btnComp));
    }

    // Функція оновлення екрану
    function renderProduct(index) {
        const product = mini_data[index];

        // Оновлюємо картинку та тексти
        imgElement.src = product.image;
        imgElement.alt = product.title;

        titleElement.textContent = product.title;
        priceElement.textContent = product.price;
        descElement.textContent = product.description;

        topElement.textContent = product.topNotes;
        heartElement.textContent = product.heartNotes;
        baseElement.textContent = product.baseNotes;
        compElement.textContent = product.composition;

        // Прибираємо клас розкриття
        descElement.classList.remove('text-expanded');
        compElement.classList.remove('text-expanded');

        // Повертаємо напис на кнопках
        if (btnDesc) btnDesc.textContent = "Читати більше";
        if (btnComp) btnComp.textContent = "Читати більше";
    }

    // Кнопка "Назад"
    prevBtn.addEventListener('click', () => {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = mini_data.length - 1; // Зациклюємо: йдемо на останній
        }
        renderProduct(currentIndex);
    });

    // Кнопка "Вперед"
    nextBtn.addEventListener('click', () => {
        currentIndex++;
        if (currentIndex >= mini_data.length) {
            currentIndex = 0; // Зациклюємо: йдемо на перший
        }
        renderProduct(currentIndex);
    });

    // Запускаємо рендер першого товару при завантаженні
    renderProduct(currentIndex);
}