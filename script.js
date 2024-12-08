// Анимация при скролле
document.addEventListener('DOMContentLoaded', () => {
    const reveals = document.querySelectorAll('.reveal');

    function checkScroll() {
        reveals.forEach((reveal) => {
            const windowHeight = window.innerHeight;
            const revealTop = reveal.getBoundingClientRect().top;
            const revealPoint = 150;

            if (revealTop < windowHeight - revealPoint) {
                reveal.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', checkScroll);
});
 document.addEventListener('DOMContentLoaded', () => { 
    // Получаем ссылку на форму и кнопку 
    const form = document.getElementById('test-drive-form'); 
    const submitButton = form.querySelector('button[type="submit"]'); 
 
    // Обработчик для отправки формы 
    form.addEventListener('submit', (event) => { 
        // Останавливаем обычную отправку формы 
        event.preventDefault(); 
 
        // Показываем сообщение 
        alert('Заявка отправлена!'); 
 
        // Здесь вы можете добавить дополнительную логику для обработки данных формы, например, отправку на сервер 
    }); 
});
