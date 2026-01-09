let currentSlideIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
    
    // Wrap around
    if (index >= slides.length) {
        currentSlideIndex = 0;
    } else if (index < 0) {
        currentSlideIndex = slides.length - 1;
    } else {
        currentSlideIndex = index;
    }
    
    // Hide all slides
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
    
    // Remove active from all dots
    dots.forEach(dot => {
        dot.classList.remove('active');
    });
    
    // Show current slide
    slides[currentSlideIndex].classList.add('active');
    dots[currentSlideIndex].classList.add('active');
}

function moveSlide(direction) {
    showSlide(currentSlideIndex + direction);
}

function currentSlide(index) {
    showSlide(index);
}

// Auto-play carousel (optional)
let autoPlayInterval = setInterval(() => {
    moveSlide(1);
}, 5000);

// Pause auto-play on hover
const carouselContainer = document.querySelector('.carousel-container');
if (carouselContainer) {
    carouselContainer.addEventListener('mouseenter', () => {
        clearInterval(autoPlayInterval);
    });

    carouselContainer.addEventListener('mouseleave', () => {
        autoPlayInterval = setInterval(() => {
            moveSlide(1);
        }, 5000);
    });
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        moveSlide(-1);
    } else if (e.key === 'ArrowRight') {
        moveSlide(1);
    }
});
