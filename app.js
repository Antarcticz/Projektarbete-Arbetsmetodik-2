let slide = document.querySelectorAll('.slide');
let inner = document.querySelectorAll('.inner');

slide.forEach((s, i) => {
    s.addEventListener('click', () => {
        slide.forEach((Sl) => {
            Sl.classList.remove('active');
            Sl.style.transform = `translateX(${slide[i].getAttribute('data-t')}%)`;
        })
        slide[i].classList.add('active');
    })
})

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
