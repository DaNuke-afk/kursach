document.getElementById("carForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const form = event.target;
    const carTitle = form.carTitle.value;
    const carModel = form.carModel.value;
    const carYear = form.carYear.value;
    const carPower = form.carPower.value;
    const carConsumption = form.carConsumption.value;
    const carPrice = form.carPrice.value;
    const carImage = form.carImage; // Для теста используем имя файла изображения

    // Формируем URL с параметрами
    const params = new URLSearchParams({
        carTitle: carTitle,
        carModel: carModel,
        carYear: carYear,
        carPower: carPower,
        carConsumption: carConsumption,
        carPrice: carPrice,
        carImage: carImage
    }).toString();

    // Перенаправляем на страницу с карточкой автомобиля
    window.location.href = "error.html?" + params;
});
