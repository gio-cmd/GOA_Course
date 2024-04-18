const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const images = document.querySelector(".images");

let currentIndex = 0;

nextBtn.addEventListener("click", function() {
  currentIndex = (currentIndex + 1) % images.children.length;
  updateSlider();
});

prevBtn.addEventListener("click", function() {
  currentIndex = (currentIndex - 1 + images.children.length) % images.children.length;
  updateSlider();
});

function updateSlider() {
  const imageWidth = images.children[0].clientWidth;
  images.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
}