// Auto-slide testimoni setiap 5 detik
let slides = document.querySelectorAll(".slide");
let index = 0;

function nextSlide() {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}

setInterval(nextSlide, 5000);
