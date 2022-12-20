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

// Swiper JS    
var swiper = new Swiper(".mySwiper", {
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

//Slidercontainer
const slideIndex = 1;
showSlides = (slideIndex);

plusSlides = (n) => {
  showSlides = (slideIndex += n);
}

currentSlide = (n) => {
  showSlides = (slideIndex = n);
}

showSlides = (n) => {
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";

}




var swiper = new Swiper(".felix", {
  slidesPerView: 5,
  spaceBetween: 15,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".karusell-7", {
  slidesPerView: 2.5,
  spaceBetween: 15,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});


