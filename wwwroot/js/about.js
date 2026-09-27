function animateCounter(element, target, duration = 1500) {
  let start = 0;
  let startTime = null;

  function updateCounter(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = timestamp - startTime;
    const value = Math.min(Math.floor((progress / duration) * target), target);
    element.textContent = value.toLocaleString("en-US");

    if (value < target) {
      requestAnimationFrame(updateCounter);
    }
  }

  requestAnimationFrame(updateCounter);
}

const counters = document.querySelectorAll(".counterjs");

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const element = entry.target;
        const target = +element.dataset.target;
        animateCounter(element, target);
        observer.unobserve(element);
      }
    });
  },
  { threshold: 0.5 }
);

counters.forEach((counter) => {
  observer.observe(counter);
});

document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".license-swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
    initialSlide: 1,
    navigation: {
      nextEl: ".custom-swiper-button-next",
      prevEl: ".custom-swiper-button-prev",
    },
    
  });
});

