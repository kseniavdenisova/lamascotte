# lamascotte

**Опис:**  
Це веб-сайт для демонстрації каталогу товарів, функцій кастомізації, квізів та інтерактивної роботи з користувачем. Проєкт створено з використанням HTML.

**Виконавці:**  
- Ксенія Денисова

**Структура проєкту:**

/lamascotte/

├── /css/ # Стилі сайту
│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── about.css # Про нас

│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── adapt.css # Адаптація під мобільні телефони

│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── contacts.css # Контакти

│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── image.css # Картинки

│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── index.css # Головна сторінка

│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── login.css # Увійти

│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── mini.css # Бокс мініатюрок

│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── partners.css # Партнерство

│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── register.css # Реєстрація

│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── style.css # Стилі

│── /html/ # Спеціалізовані файли .html

│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── cart.html # Кошик

│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── catalog.html # Каталог товарів

│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── custom.html # Кастомізація товарів

│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── login.html # Вхід

│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── mini.html # Бокс мініатюрок

│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── quiz.html # Квіз

│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── register.html # Реєстрація

│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── wish_list.html # Вподобайка

├── /js/ # Скрипти JavaScript

│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── DOM.js # Робота з DOM

│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── event.js # Обробка кліків

│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── interactive.js # Динамічна зміна контенту

│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── main.js # Головна

│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── menu.js # Адаптивне меню

│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── mini_data.js # Бокс мініатюрок

│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── theme.js # Тема сайту

│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── validation.js # Валідація

├── /images/ # Зображення

├── index.html # Головна сторінка

├── about.html # Про нас

├── contacts.html # Контакти

├── delivery.html # Доставка

├── partners.html # Партнери

└── prices.html # Ціни

**В цій версії було:**
- Впроваджено функціонал зміни теми (Dark/Light) з маніпуляцією CSS-змінними та збереженням вибору користувача у localStorage.

- Реалізовано логіку роботи слайдера товарів з динамічною зміною контенту та функціонування адаптивного мобільного меню.

- Впроваджено відстеження дій миші, натискань клавіатури та зміни масштабу вікна з логуванням у консоль.

- Реалізовано автоматичне відображення поточної дати у футері та динамічне управління класами для інтерактивних елементів.

**В минулій версії було:**
- Впроваджено Flexbox та CSS Grid для створення адаптивних макетів.
- Реалізовано повноцінний адаптивний дизайн з використанням медіа-запитів та бургер-меню для мобільних пристроїв.
- Створено модульну структуру CSS-файлів з кросбраузерною сумісністю без необхідності додаткових виправлень.
- Застосовано сучасні підходи до стилізації форм, включаючи HTML5-валідацію та інтерактивні ефекти для поліпшення UX.
