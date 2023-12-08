const gift = document.querySelector('#gift');
const cart = document.querySelector('#cart');

gift.addEventListener('click', ()=> {
    window.open('https://www.google.com', '_blank');
})

cart.addEventListener('click', ()=> {
    window.open('../pages/cart-oder.html', '_self');
})

const menu_icon = document.querySelector('.menu-icon');

function menuToggle() {
    let menu_options = document.querySelector('.menu-options');
    menu_options.classList.toggle("active");
}

menu_icon.addEventListener('click', menuToggle)