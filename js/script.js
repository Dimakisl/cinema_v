const schemeSvg = document.querySelector('.scheme-svg'); 
const totalPriceTag = document.querySelector('.price-total');
const menuBtn = document.querySelector('.m-menu');
const menu = document.querySelector('.menu');
let cost = 800;
let totalPrice = 0;
schemeSvg.addEventListener('click', (e) => {
    if(!e.target.classList.contains('booked')){
        e.target.classList.toggle('active');
        let totalSeats = schemeSvg.querySelectorAll('.active').length;
        totalPrice = cost * totalSeats;
        totalPriceTag.textContent = totalPrice;
    }
});

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('is-open');
})