document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("toggle");
    const formTitle = document.getElementById("form-title");
    const regForm = document.getElementById("reg-form");
    const logForm = document.getElementById("log-form");
    const registerLabel = document.getElementById("register-label");
    const loginLabel = document.getElementById("login-label");

    // Переключение между "Регистрация" и "Войти"
    toggle.addEventListener("change", () => {
        if (toggle.checked) {
            // Режим "Войти"
            formTitle.textContent = "Войти";
            regForm.style.display = "none";
            logForm.style.display = "block";
            loginLabel.classList.add("active");
            registerLabel.classList.remove("active");
        } else {
            // Режим "Регистрация"
            formTitle.textContent = "Регистрация";
            regForm.style.display = "block";
            logForm.style.display = "none";
            registerLabel.classList.add("active");
            loginLabel.classList.remove("active");
        }
    });

    // Переход на страницу ind.html после отправки формы
    regForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Предотвращаем стандартное поведение формы
        window.location.href = "main.html"; // Переход на страницу ind.html
    });
    logForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Предотвращаем стандартное поведение формы
        window.location.href = "main.html"; // Переход на страницу ind.html
    });
});
