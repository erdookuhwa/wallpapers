const prevBtn = document.getElementById("previous")
const nextBtn = document.getElementById("next")

const slides = document.getElementsByClassName("carousel-item")
let currentSlide = 0
const totalSlides = slides.length;

prevBtn.addEventListener("click", goBack)
nextBtn.addEventListener("click", goForward)

function hideAllSlides() {
    for (let slide of slides) {
        slide.classList.remove("carousel-item-visible");
        slide.classList.add("carousel-item-hidden")
    }
}

function goBack() {
    hideAllSlides();

    if (currentSlide===0) {
        currentSlide=totalSlides-1
    } else {
        currentSlide--
    }
    slides[currentSlide].classList.add("carousel-item-visible")
}

function goForward() {
    hideAllSlides();

    if (currentSlide === totalSlides-1) {
        currentSlide=0
    } else {
        currentSlide++
    }
    slides[currentSlide].classList.add("carousel-item-visible")
}
