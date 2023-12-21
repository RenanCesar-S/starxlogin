let buyArea = document.querySelectorAll('.buy-division')
let miniCarts = document.querySelectorAll('.mini-cart-img')

function changeImage(img, id) {

}

buyArea.forEach(area => {
    area.addEventListener('mouseenter', ()=> {
        if(area === buyArea[0]) {
            miniCarts[0].src= "../imgs/mini-cart-black-70-24.png";
            miniCarts[0].classList.add('animation');
        } else {
            buyArea[0].addEventListener('mouseleave', ()=> {
                miniCarts[0].src= "../imgs/mini-cart-70-24.png"
                miniCarts[0].classList.remove('animation');
            })
        }

        if(area === buyArea[1]) {
            miniCarts[1].src= "../imgs/mini-cart-black-70-24.png";
            miniCarts[1].classList.add('animation');
        } else {
            buyArea[1].addEventListener('mouseleave', ()=> {
                miniCarts[1].src= "../imgs/mini-cart-70-24.png";
                miniCarts[1].classList.remove('animation');
            })
        }

        if(area === buyArea[2]) {
            miniCarts[2].src= "../imgs/mini-cart-black-70-24.png";
            miniCarts[2].classList.add('animation');
        } else {
            buyArea[2].addEventListener('mouseleave', ()=> {
                miniCarts[2].src= "../imgs/mini-cart-70-24.png";
                miniCarts[2].classList.remove('animation');
            })
        }

        if(area === buyArea[3]) {
            miniCarts[3].src= "../imgs/mini-cart-black-70-24.png";
            miniCarts[3].classList.add('animation');
        } else {
            buyArea[3].addEventListener('mouseleave', ()=> {
                miniCarts[3].src= "../imgs/mini-cart-70-24.png";
                miniCarts[3].classList.remove('animation');
            })
        }
    })
});