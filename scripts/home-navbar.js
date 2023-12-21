const gift = document.querySelector('#gift');
const cart = document.querySelector('#cart');

gift.addEventListener('click', ()=> {
    //window.open('https://www.google.com', '_blank');
    alert('🚧Under Constrution. Thanks for your Patience👷‍♂️')
})

cart.addEventListener('click', ()=> {
    //window.open('../pages/cart-oder.html', '_self');
    alert('🚧Under Constrution. Thanks for your Patience👷‍♂️')
})

const menu_icon = document.querySelector('.menu-icon');

let onlyclick = []

function menuToggle() {
    if(onlyclick.length == 0) {
        alert("🚧These options don't working yet.👷‍♂️")
    } else {

    }
    let menu_options = document.querySelector('.menu-options');
    menu_options.classList.toggle("active");
    onlyclick.push(1)
    return
}

menu_icon.addEventListener('click', menuToggle)