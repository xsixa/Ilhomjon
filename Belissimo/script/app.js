const container = document.querySelector(".carousel-container");
const items = document.querySelectorAll(".carousel-item");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentIndex = 0;

function updateCarousel() {
  const width = items[0].clientWidth;
  container.style.transform = `translateX(-${currentIndex * width}px)`;
}

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
  updateCarousel();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
  updateCarousel();
});

window.addEventListener("resize", updateCarousel);
