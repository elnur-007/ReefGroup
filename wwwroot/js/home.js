document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger-img");
  const modal = document.getElementById("modalMenu");
  const modalIconX = document.querySelector(".modal-menu-logo-img");

  burger.addEventListener("click", () => {
    modal.classList.toggle("active");
  });

  document.addEventListener("click", (e) => {
    if (
      modal.classList.contains("active") &&
      !modalContent.contains(e.target) &&
      !burger.contains(e.target)
    ) {
      modal.classList.remove("active");
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("active")) {
      modal.classList.remove("active");
    }
  });

  modal.addEventListener("click", (e) => {
    if (e.target.closest(".modal-close")) {
      modal.classList.remove("active");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  const swiperImages = document.querySelectorAll(".swiper-slide img");

  // Получаем URL картинок слайдера
  const sliderImages = Array.from(swiperImages).map((img) => img.src);

  // Добавляем изначальный фон в начало массива
  const bgImages = [
    "/assets/img/homepageImg/HeaderBackground.webp",
    ...sliderImages,
  ];

  let currentIndex = 0;
  const changeInterval = 12000;


  header.style.backgroundImage = `url('${bgImages[0]}')`;
  currentIndex = 1;

  function changeBackground() {
    header.style.backgroundImage = `url('${bgImages[currentIndex]}')`;
    currentIndex = (currentIndex + 1) % bgImages.length;
  }

  setInterval(changeBackground, changeInterval);
});
