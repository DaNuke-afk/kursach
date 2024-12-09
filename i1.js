document.addEventListener("DOMContentLoaded", () => {
    // Получаем основной элемент изображения
    const mainImage = document.getElementById('mainImage');
    // Получаем все миниатюры
    const thumbnails = document.querySelectorAll('.thumbnail');

    // Функция для смены основного изображения
    function changeMainImage(event) {
        // Получаем источник картинки, по которой кликнули
        const clickedImageSrc = event.target.src;
        // Меняем источник основного изображения на выбранную миниатюру
        mainImage.src = clickedImageSrc;
        
        // Убираем класс .selected с других миниатюр
        thumbnails.forEach(thumbnail => thumbnail.classList.remove('selected'));
        
        // Добавляем класс .selected к текущей миниатюре
        event.target.classList.add('selected');
    }

    // Назначаем обработчик события на все миниатюры
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', changeMainImage);
    });
});
document.getElementById('contactButton').addEventListener('click', function () {
    const phoneNumber = '+1234567890'; // Замените на нужный номер телефона
    window.location.href = `tel:${phoneNumber}`;
});
