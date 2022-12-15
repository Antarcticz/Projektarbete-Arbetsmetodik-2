window.addEventListener("hashchange", () => {
  if (
    window.location.hash &&
    window.location.hash.startsWith("#slider-span")
  ) {
    document.getElementById("carousel").scrollIntoView();
  }
});


// Swiper JS    
const swiper = new Swiper(".mySwiper", {
  slidesPerView: 4.5,
  spaceBetween: 1,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});