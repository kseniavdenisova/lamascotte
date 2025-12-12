// Валідація реєстрації
export function initValidation() {
    const form = document.getElementById('regForm');
    const successMsg = document.getElementById('success-message');

    if (!form) return;

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        clearErrors(form);
        if (successMsg) successMsg.style.display = 'none';

        const name = document.getElementById('reg-name');
        const email = document.getElementById('reg-email');
        const phone = document.getElementById('reg-phone');
        const password = document.getElementById('reg-pass');
        const passwordConfirm = document.getElementById('reg-pass-confirm');
        const date = document.getElementById('reg-date');

        let isValid = true;

        // Ім'я
        if (name.value.trim().length < 3) {
            showError(name, "Ім'я повинно містити мінімум 3 символи");
            isValid = false;
        }

        // Email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value.trim())) {
            showError(email, "Введіть коректний Email");
            isValid = false;
        }

        // Телефон (+380... або 0...)
        const phonePattern = /^(\+38)?\d{10}$/;
        if (!phonePattern.test(phone.value.trim())) {
            showError(phone, "Телефон має бути у форматі +380xxxxxxxxx або 0xxxxxxxxx");
            isValid = false;
        }

        // Пароль
        if (password.value.length < 6) {
            showError(password, "Пароль має бути не менше 6 символів");
            isValid = false;
        }

        // Підтвердження паролю
        if (password.value !== passwordConfirm.value) {
            showError(passwordConfirm, "Паролі не співпадають");
            isValid = false;
        }

        // Дата
        if (!date.value) {
            showError(date, "Оберіть дату народження");
            isValid = false;
        }

        if (isValid) {
            console.group("Дані реєстрації:");
            console.log({
                name: name.value,
                email: email.value,
                phone: phone.value,
                date: date.value
            });
            console.groupEnd();

            if (successMsg) {
                successMsg.textContent = "Реєстрація успішна!";
                successMsg.style.display = 'block';
            }
            form.reset();
        }
    });
}

// Валідація входу
export function initLoginValidation() {
    const form = document.getElementById('loginForm');
    const successMsg = document.getElementById('login-success');

    if (!form) return;

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        clearErrors(form);
        if (successMsg) successMsg.style.display = 'none';

        const email = document.getElementById('login-email');
        const password = document.getElementById('login-psw');

        let isValid = true;

        // Перевірка Email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value.trim())) {
            showError(email, "Введіть коректний Email");
            isValid = false;
        }

        // Перевірка Паролю
        if (!password.value) {
            showError(password, "Введіть пароль");
            isValid = false;
        } else if (password.value.length < 6) {
            showError(password, "Пароль занадто короткий");
            isValid = false;
        }

        if (isValid) {
            console.group("Дані входу:");
            console.log({
                email: email.value,
                password: password.value
            });
            console.groupEnd();

            if (successMsg) {
                successMsg.textContent = "Ви успішно увійшли!";
                successMsg.style.display = 'block';
            }
            form.reset();
        }
    });
}

// Валідації контактів
export function initContactValidation() {
    const form = document.getElementById('contactForm');
    const successMsg = document.getElementById('contact-success');
    if (!form) return;

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Зупиняємо стандартний перехід
        clearErrors(form);
        if (successMsg) successMsg.style.display = 'none';

        const name = document.getElementById('contact-name');
        const email = document.getElementById('contact-email');
        const msg = document.getElementById('contact-msg');

        let isValid = true;

        // Валідація
        if (name.value.trim().length < 2) { showError(name, "Ім'я занадто коротке"); isValid = false; }
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value.trim())) { showError(email, "Введіть коректний Email"); isValid = false; }
        if (msg.value.trim().length < 10) { showError(msg, "Повідомлення мінімум 10 символів"); isValid = false; }

        // Якщо все добре, відправляємо заповнену форму
        if (isValid) {
            const formData = new FormData(form);

            // Використовуємо fetch для відправки
            fetch(form.action, {
                method: form.method,
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            }).then(response => {
                if (response.ok) {
                    // Успіх
                    successMsg.textContent = "Повідомлення успішно надіслано!";
                    successMsg.style.display = 'block';
                    successMsg.style.backgroundColor = '#d4edda';
                    successMsg.style.color = '#155724';
                    form.reset();
                } else {
                    // Помилка сервера Formspree
                    response.json().then(data => {
                        if (Object.hasOwn(data, 'errors')) {
                            alert(data["errors"].map(error => error["message"]).join(", "));
                        } else {
                            alert("Сталася помилка при відправці.");
                        }
                    });
                }
            }).catch(error => {
                alert("Помилка мережі. Спробуйте пізніше.");
            });
        }
    });
}

// Валідація партнерства
export function initPartnersValidation() {
    const form = document.getElementById('partnerForm');
    const successMsg = document.getElementById('partner-success');
    if (!form) return;

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        clearErrors(form);
        if (successMsg) successMsg.style.display = 'none';

        const name = document.getElementById('partner-name');
        const email = document.getElementById('partner-email');
        const bio = document.getElementById('partner-bio');
        const details = document.getElementById('partner-details');

        let isValid = true;

        if (name.value.trim().length < 2) { showError(name, "Введіть повне ім'я"); isValid = false; }
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value.trim())) { showError(email, "Введіть коректний Email"); isValid = false; }
        if (bio.value.trim().length < 10) { showError(bio, "Напишіть хоча б 10 символів про себе"); isValid = false; }
        if (details.value.trim().length < 10) { showError(details, "Опишіть деталі детальніше"); isValid = false; }

        // Якщо все добре, відправляємо заповнену форму
        if (isValid) {
            const formData = new FormData(form);

            fetch(form.action, {
                method: form.method,
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            }).then(response => {
                if (response.ok) {
                    successMsg.textContent = "Вашу заявку прийнято! Ми зв'яжемося з вами.";
                    successMsg.style.display = 'block';
                    form.reset();
                } else {
                    alert("Сталася помилка при відправці форми.");
                }
            }).catch(error => {
                alert("Помилка мережі.");
            });
        }
    });
}

// Допоміжні функції
function showError(input, message) {
    input.classList.add('error');
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-text';
    errorDiv.textContent = message;
    if (input.parentElement.tagName === 'LABEL') {
        input.parentElement.appendChild(errorDiv);
    } else {
        input.insertAdjacentElement('afterend', errorDiv);
    }
}

function clearErrors(formElement) {
    const errorInputs = formElement.querySelectorAll('.error');
    errorInputs.forEach(input => input.classList.remove('error'));
    const errorMessages = formElement.querySelectorAll('.error-text');
    errorMessages.forEach(msg => msg.remove());
}