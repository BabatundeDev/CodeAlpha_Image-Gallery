const sliderContainer = document.querySelector('.slider-container');
const scrollAmount = 320; // Approx width of one image + gap
let autoScrollInterval;

// Function to auto-scroll
function startAutoScroll() {
  autoScrollInterval = setInterval(() => {
    // Scroll right
    sliderContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });

    // Reset to beginning if at the end
    if (
      sliderContainer.scrollLeft + sliderContainer.clientWidth >=
      sliderContainer.scrollWidth - 1
    ) {
      setTimeout(() => {
        sliderContainer.scrollTo({ left: 0, behavior: 'smooth' });
      }, 2000);
    }
  }, 2000);
}

// Start auto-scroll
startAutoScroll();

// Restart auto-scroll after manual interaction
function resetAutoScroll() {
  clearInterval(autoScrollInterval);
  startAutoScroll();
}

// Listen for arrow key navigation
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') {
    sliderContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    resetAutoScroll();
  } else if (e.key === 'ArrowLeft') {
    sliderContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    resetAutoScroll();
  }
});

// Optional: also reset on manual scroll (mouse drag or trackpad)
let isScrolling;
sliderContainer.addEventListener('scroll', () => {
  clearTimeout(isScrolling);
  isScrolling = setTimeout(() => {
    resetAutoScroll();
  }, 300);
});


const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".lightbox-trigger").forEach((image) => {
  image.addEventListener("click", function () {
    lightbox.style.display = "flex";
    lightboxImg.src = this.src;
  });
});

closeBtn.addEventListener("click", function () {
  lightbox.style.display = "none";
});

lightbox.addEventListener("click", function (event) {
  if (event.target !== lightboxImg) {
    lightbox.style.display = "none";
  }
});
