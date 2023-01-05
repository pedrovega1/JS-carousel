const slides = document.getElementsByClassName("carousel-item");
const nextButton = document.getElementById("carousel-button-next");
const prevButton = document.getElementById("carousel-button-prev");
const dots = document.getElementsByClassName("dot");
let position = 0;
const numberOfSlides = slides.length;

function hideAllSlides() {
    // remove all slides not currently being viewed
    for (const slide of slides) {
        slide.classList.remove("carousel-item-visible");
        slide.classList.add("carousel-item-hidden");
    }
}

const handleMoveToNextSlide = function(e) {
    hideAllSlides();
    position= position +1 == numberOfSlides ? 0 : position +1
    slides[position].classList.add("carousel-item-visible")
    slides[position].classList.remove("carousel-item-hidden")

    // update dot to represent current slide
    dots[position].classList.add("selected-dot");
    dots[position].checked = true;
}
// e-event, это событие которое  сохраняет информацию
const handleMoveToPrevSlide = function(e) {
 hideAllSlides();
//  ТерНАРный ОПЕРАТОР ? :
 position= position -1 == -1 ? numberOfSlides-1 : position -1
    slides[position].classList.add("carousel-item-visible")
    slides[position].classList.remove("carousel-item-hidden")

    // update dot to represent current slide
    
    dots[position].checked = true;
}

const handleDotChanged = function(event){
    hideAllSlides();
    // parseInt 
    position=parseInt( event.target.value)
    slides[position].classList.add("carousel-item-visible")
    slides[position].classList.remove("carousel-item-hidden")
 
    dots[position].checked = true;
}
nextButton.addEventListener("click", handleMoveToNextSlide);
prevButton.addEventListener("click", handleMoveToPrevSlide);

for(const dot of dots){
    dot.addEventListener("change",handleDotChanged)
}