// ==== IMAGE SLIDER for other pages ====
const slides = document.querySelectorAll(".slide");

if (slides.length > 0) {
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      if (i === index) slide.classList.add("active");
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  showSlide(currentSlide);
  setInterval(nextSlide, 5000);
}

// ==== MOBILE MENU TOGGLE ====
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

if (menuToggle && navbar) {
  menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });
}

// ==== BACKGROUND SLIDER for index.html ====
const hero = document.getElementById("hero");

if (hero && !document.querySelector(".slider")) {
  const backgrounds = [
    "12.jpg",
    "7.jpg",
    "15.jpg",
    "17.jpg",
    "16.jpg",
    "13.jpg"
  ];

  let bgIndex = 0;

  function changeBackground() {
    hero.style.backgroundImage = `url(${backgrounds[bgIndex]})`;
    bgIndex = (bgIndex + 1) % backgrounds.length;
  }

  changeBackground();
  setInterval(changeBackground, 5000);
}
