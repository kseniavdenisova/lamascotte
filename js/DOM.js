export function initPageUpdates() {

    // Зміна стилів для назв продуктів (new_price)
    const productPrice = document.querySelectorAll('.new_price');

    if (productPrice.length > 0) {
        productPrice.forEach(element => {
            element.style.color = 'red';
            element.style.fontSize = '18px';
        });
    }

    // Додавання повідомлення в кінець сторінки
    const mainContainer = document.querySelector('main');

    if (mainContainer) {
        const newParagraph = document.createElement('p');
        newParagraph.textContent = 'Дякуємо, що обираєте la mascotte! Слідкуйте за оновленнями.';

        newParagraph.style.textAlign = 'center';
        newParagraph.style.color = 'var(--text-color)';
        newParagraph.style.marginTop = '30px';
        newParagraph.style.fontWeight = '500';

        mainContainer.append(newParagraph);
    }
}

export function showFooterDate() {
    const dateContainer = document.getElementById('footer-date');

    if (dateContainer) {
        const now = new Date();

        // Налаштування формату дати
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };

        // Отримуємо дату українською мовою
        const formattedDate = now.toLocaleDateString('uk-UA', options);

        // Робимо першу букву великою
        const finalDate = formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);

        dateContainer.textContent = finalDate;
    }
}