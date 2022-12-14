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