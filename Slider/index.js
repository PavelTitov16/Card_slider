const slides = document.querySelectorAll('.slide');

function clearClasses() {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    })
}

slides.forEach((slide) => {
    slide.addEventListener('click', () => {
        clearClasses();
        clearTitles();
        slide.classList.add('active');
    });
});