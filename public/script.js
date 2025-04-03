let slides = [];
let currentSlide = 0;
let touchStartX = 0;
let touchEndX = 0;
const SWIPE_THRESHOLD = 50;

async function fetchSlides() {
  try {
    const response = await fetch("/slides");
    slides = await response.json();
    renderSlides();
    updateCounter();
  } catch (error) {
    console.error("Error fetching slides:", error);
    document.getElementById("slideshow").innerHTML =
      "<p>Error loading slides</p>";
  }
}

function renderSlides() {
  const slideshow = document.getElementById("slideshow");
  slideshow.innerHTML = slides
    .map(
      (slide, index) => `
        <div class="slide" style="transform: translateX(${
          (index - currentSlide) * 100
        }%)">
            <img src="${slide.imgUrl}" alt="Slide ${index + 1}" 
                onload="document.querySelectorAll('.navigation button').forEach(btn => btn.classList.add('fade-in'))"
                onclick="openImageInNewTab('${slide.href}')"
                style="cursor: pointer;">
            <div class="slide-caption">${slide.caption}</div>
        </div>
    `
    )
    .join("");
}

function updateCounter() {
  const counter = document.getElementById("slideCounter");
  counter.textContent = `${currentSlide + 1} / ${slides.length}`;
}

function goToSlide(index) {
  currentSlide = (index + slides.length) % slides.length;
  renderSlides();
  updateCounter();
}

function openImageInNewTab(url) {
  frame.sdk.actions.openUrl(url);
}

// Initialize event listeners when the DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("prevBtn").addEventListener("click", () => {
    goToSlide(currentSlide - 1);
  });

  document.getElementById("nextBtn").addEventListener("click", () => {
    goToSlide(currentSlide + 1);
  });

  // Touch event handling
  const slideshow = document.getElementById("slideshow");

  slideshow.addEventListener(
    "touchstart",
    (e) => {
      touchStartX = e.changedTouches[0].screenX;
    },
    { passive: true }
  );

  slideshow.addEventListener(
    "touchend",
    (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    },
    { passive: true }
  );

  // Initialize the slideshow
  fetchSlides();
});

function handleSwipe() {
  const diff = touchStartX - touchEndX;
  if (Math.abs(diff) > SWIPE_THRESHOLD) {
    const buttons = document.querySelectorAll(".navigation button");
    if (diff > 0) {
      // Swiped left
      goToSlide(currentSlide + 1);
      buttons[1].style.animation = "none";
      buttons[1].offsetHeight;
      buttons[1].style.animation =
        "bounce 0.4s cubic-bezier(0.36, 0, 0.66, -0.56)";
    } else {
      // Swiped right
      goToSlide(currentSlide - 1);
      buttons[0].style.animation = "none";
      buttons[0].offsetHeight;
      buttons[0].style.animation =
        "bounce 0.4s cubic-bezier(0.36, 0, 0.66, -0.56)";
    }
  }
}
