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

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
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

document.addEventListener('click', e => {
  let handle
  if (e.target.matches(".handle")) {
      handle = e.target
  } else {
      handle = e.target.closest(".handle")
  }
  if (handle != null) onHandleClick(handle)
});

function onHandleClick(handle) {
  let leftHandle = document.querySelector('left-handle');
  const slider = handle.closest('.carousel-4-container').querySelector('.slider');
  const sliderIndex = parseInt(getComputedStyle(slider).getPropertyValue('--slider-index'))
  if (handle.classList.contains('left-handle')) {
      slider.style.setProperty('--slider-index', sliderIndex - 1)
  }
  if (handle.classList.contains('right-handle')) {
      slider.style.setProperty('--slider-index', sliderIndex + 1)
  }
  
console.log(slider)
}

onHandleClick();