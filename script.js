document.addEventListener("DOMContentLoaded", function() {
    const images = [
        "https://img.freepik.com/free-photo/strawberry-berry-levitating-white-background_485709-57.jpg?semt=ais_hybrid",
        "https://img.freepik.com/free-photo/closeup-shot-fresh-ripe-strawberries-isolated-white-surface_181624-54939.jpg?semt=ais_hybrid",
        "https://img.freepik.com/free-photo/strawberries-cut-half-whole-berries-ripe-berries-top-view-background-ripe-strawberries-delicious-natural-dessert_166373-2358.jpg?semt=ais_hybrid",
        "https://img.freepik.com/free-photo/red-fresh-strawberries-with-green-leaves_114579-10506.jpg?semt=ais_hybrid",
        "https://img.freepik.com/free-photo/top-view-delicious-strawberries-arrangement_23-2149433482.jpg?semt=ais_hybrid"
    ];

    const sliderImage = document.getElementById("current-image");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    const dotsContainer = document.querySelector(".dots-container");

    let currentIndex = 0;

    // Инициализация слайдера
    function initSlider() {
        // Добавляем навигационные точки
        images.forEach((_, index) => {
            const dot = document.createElement("div");
            dot.classList.add("dot");
            if (index === currentIndex) dot.classList.add("active");
            dot.addEventListener("click", () => goToSlide(index));
            dotsContainer.appendChild(dot);
        });

        // Устанавливаем первое изображение
        updateSlider();
    }

    // Обновление слайдера
    function updateSlider() {
        sliderImage.src = images[currentIndex];
        updateDots();
    }

    // Обновление активной точки
    function updateDots() {
        const dots = document.querySelectorAll(".dot");
        dots.forEach((dot, index) => {
            dot.classList.toggle("active", index === currentIndex);
        });
    }

    // Переход к конкретному слайду
    function goToSlide(index) {
        currentIndex = index;
        updateSlider();
    }

    // Переход к следующему слайду
    function nextSlide() {
        currentIndex = (currentIndex + 1) % images.length;
        updateSlider();
    }

    // Переход к предыдущему слайду
    function prevSlide() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateSlider();
    }

    // Обработчики событий для кнопок
    prevBtn.addEventListener("click", prevSlide);
    nextBtn.addEventListener("click", nextSlide);

    // Инициализация
    initSlider();
});