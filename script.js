/*const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

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

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }

  showSlide(currentSlide);
  let sliderInterval = setInterval(nextSlide, 5000);

  // Add button event listeners
  if (nextBtn && prevBtn) {
    nextBtn.addEventListener("click", () => {
      nextSlide();
      clearInterval(sliderInterval);
    });

    prevBtn.addEventListener("click", () => {
      prevSlide();
      clearInterval(sliderInterval);
    });
  }
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


/*function initSlider(sliderClass, prevBtnClass, nextBtnClass) {
  const slider = document.querySelector(`.${sliderClass}`);
  if (!slider) return;

  const slides = slider.querySelectorAll(".slide");
  const prevBtn = slider.querySelector(`.${prevBtnClass}`);
  const nextBtn = slider.querySelector(`.${nextBtnClass}`);

  let currentIndex = 0;

  function show(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      if (i === index) slide.classList.add("active");
    });
  }

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    show(currentIndex);
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    show(currentIndex);
  });

  show(currentIndex);
}

// Initialize each slider
initSlider("housing-slider", "prev-housing", "next-housing");
initSlider("catering-slider", "prev-catering", "next-catering");
initSlider("tent-slider", "prev-tent", "next-tent");*/


/*function initSlider(sliderClass, prevBtnClass, nextBtnClass) {
  const slider = document.querySelector(`.${sliderClass}`);
  if (!slider) return;

  const slides = slider.querySelectorAll(".slide"); // FIXED HERE
  const prevBtn = slider.querySelector(`.${prevBtnClass}`);
  const nextBtn = slider.querySelector(`.${nextBtnClass}`);

  let currentIndex = 0;

  function show(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      if (i === index) slide.classList.add("active");
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    show(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    show(currentIndex);
  }

  // Button click events
  if (prevBtn && nextBtn) {
    prevBtn.addEventListener("click", () => prevSlide());
    nextBtn.addEventListener("click", () => nextSlide());
  }

  // Auto-slide
  setInterval(() => {
    nextSlide();
  }, 5000);

  show(currentIndex);
}



initSlider("housing-slider", "prev-housing", "next-housing");
initSlider("catering-slider", "prev-catering", "next-catering");
initSlider("tent-slider", "prev-tent", "next-tent");*/


function initSlider(sliderClass, prevBtnClass, nextBtnClass) {
  const slider = document.querySelector(`.${sliderClass}`);
  if (!slider) return;

  const slides = slider.querySelectorAll(".slide"); // FIXED HERE
  const prevBtn = slider.querySelector(`.${prevBtnClass}`);
  const nextBtn = slider.querySelector(`.${nextBtnClass}`);

  let currentIndex = 0;

  function show(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      if (i === index) slide.classList.add("active");
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    show(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    show(currentIndex);
  }

  // Button click events
  if (prevBtn && nextBtn) {
    prevBtn.addEventListener("click", () => prevSlide());
    nextBtn.addEventListener("click", () => nextSlide());
  }

  // Auto-slide
  setInterval(() => {
    nextSlide();
  }, 5000);

  show(currentIndex);
}








// ==== INIT SLIDER FUNCTION FOR OTHER-SERVICES ====

function initSlider(sliderClass, prevBtnClass, nextBtnClass) {
  const slider = document.querySelector(`.${sliderClass}`);
  if (!slider) return;

  const slides = slider.querySelectorAll(".slide"); // scoped to the slider only
  const prevBtn = slider.querySelector(`.${prevBtnClass}`);
  const nextBtn = slider.querySelector(`.${nextBtnClass}`);

  let currentIndex = 0;

  function show(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      if (i === index) slide.classList.add("active");
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    show(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    show(currentIndex);
  }

  // Button event listeners
  if (prevBtn && nextBtn) {
    prevBtn.addEventListener("click", () => {
      prevSlide();
    });

    nextBtn.addEventListener("click", () => {
      nextSlide();
    });
  }

  // Auto-slide every 5 seconds
  setInterval(() => {
    nextSlide();
  }, 5000);

  show(currentIndex);
}


// ==== LIGHTBOX FOR GALLERY PAGES ====
const popupImages = document.querySelectorAll(".popup-img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeLightbox = document.getElementById("close-lightbox");

if (popupImages.length > 0 && lightbox && lightboxImg && closeLightbox) {
  popupImages.forEach((img) => {
    img.addEventListener("click", () => {
      lightbox.style.display = "flex";
      lightboxImg.src = img.src;
    });
  });

  closeLightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  });
}


// === Initialize sliders on other-services.html ===
initSlider("housing-slider", "prev-housing", "next-housing");
initSlider("catering-slider", "prev-catering", "next-catering");
initSlider("tent-slider", "prev-tent", "next-tent");



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



