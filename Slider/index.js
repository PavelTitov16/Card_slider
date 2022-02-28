const slides = document.querySelectorAll('.slide');

function clearClasses() {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    })
}

function addActiveClass(id) {
  localStorage.setItem('slideActive', id);
  clearClasses();
  slides[id].classList.add('active');
}

if (localStorage.slideActive) {
	addActiveClass(localStorage.slideActive)
} else {
	addActiveClass('4')
}

slides.forEach((slide, id) => {
	slide.addEventListener('click', () => addActiveClass(id));
});


