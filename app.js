function slidesPlugin(activeSlide = 0) { //функция для передачи парамметра со значением по умолчанию
    const slides = document.querySelectorAll('.slide') // получение слайда

    slides[activeSlide].classList.add('active') //массив карточек, определяет какая будет активной

    for (const slide of slides) {
        slide.addEventListener('click', () => { //стрелочная функция
            clearActiveClasses() //убирает все активные слайды
            slide.classList.add('active') //делает активным выбранный слайд
        })
    }

    function clearActiveClasses() {
        slides.forEach((slide) => {
            slide.classList.remove('active') //удаляет активный класс
        })
    }
}

slidesPlugin() //вызов функции