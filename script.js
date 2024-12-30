
    let currentIndex = 0;
    const slides = document.querySelectorAll('.testimonial');
    const totalSlides = slides.length;

    // Function to move the slider
    function moveSlide(direction) {
        currentIndex += direction;

        // If it's at the last slide, go back to the first one
        if (currentIndex >= totalSlides - 2) {
            currentIndex = totalSlides - 3;
        }

        // If it's at the first slide, go to the last one
        if (currentIndex < 0) {
            currentIndex = 0;
        }

        // Move the slider to the correct position
        const slider = document.querySelector('.testimonial-slider');
        slider.style.transform = `translateX(-${currentIndex * 100 / 3}%)`;
    }
