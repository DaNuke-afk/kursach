document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("toggle");
    const formTitle = document.getElementById("form-title");
    const registrationFields = document.getElementById("registration-fields");
    const loginFields = document.getElementById("login-fields");
    const registerLabel = document.getElementById("register-label");
    const loginLabel = document.getElementById("login-label");
    const form = document.getElementById("form");

    // Переключение между "Регистрация" и "Войти"
    toggle.addEventListener("change", () => {
        if (toggle.checked) {
            // Режим "Войти"
            formTitle.textContent = "Войти";
            registrationFields.style.display = "none";
            loginFields.style.display = "block";
            loginLabel.classList.add("active");
            registerLabel.classList.remove("active");
        } else {
            // Режим "Регистрация"
            formTitle.textContent = "Регистрация";
            registrationFields.style.display = "block";
            loginFields.style.display = "none";
            registerLabel.classList.add("active");
            loginLabel.classList.remove("active");
        }
    });

    // Переход на страницу ind.html после отправки формы
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Предотвращаем стандартное поведение формы
        window.location.href = "main.html"; // Переход на страницу main.html
    });
});
