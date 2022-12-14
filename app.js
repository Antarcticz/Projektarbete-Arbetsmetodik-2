window.addEventListener("hashchange", () => {
  if (
    window.location.hash &&
    window.location.hash.startsWith("#slider-span")
  ) {
    document.getElementById("carousel").scrollIntoView();
  }
});


        
const swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
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