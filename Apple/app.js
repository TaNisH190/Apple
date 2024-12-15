// Clone all slides and append them to the end of the slider
const slider = document.querySelector('.slider');
const slides = Array.from(slider.children); // Get all slides
slides.forEach(slide => {
    const clonedSlide = slide.cloneNode(true);
    slider.appendChild(clonedSlide); // Append cloned slide
});

// Adjust the animation duration based on the number of slides
const totalSlides = slider.children.length; // Now includes original and cloned slides
const animationDuration = 25; // Total duration for one full cycle
const slideWidth = 417 + 8; // Width of each slide + margin
const totalWidth = slideWidth * totalSlides; // Total width of all slides

// Set the animation duration based on the total width
const slideAnimation = document.styleSheets[0].insertRule(`
    @keyframes slide {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(-${totalWidth}px);
        }
    }
`, document.styleSheets[0].cssRules.length);

// Set the animation duration
document.querySelectorAll('.slide-img').forEach(slide => {
    slide.style.animationDuration = `${animationDuration}s`;
});