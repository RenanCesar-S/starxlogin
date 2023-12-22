let buyButtom = document.querySelectorAll('.buy-division')
let cartCounter = document.querySelector('.cart-counter')
let valueOfCart = document.querySelector('.value-of-cart')
let popUpBox = document.querySelector('.popUp')
let btnClose = document.querySelector('.close-popUp')

const gameValues = []

buyButtom.forEach((buy)=> {
    buy.addEventListener('click', ()=>{
        cartCounter.style.display = 'flex'

        if (buy === buyButtom[0]) {
            if (gameValues.includes(1)){
                closePopUp()
            } else {
                autoClosePopUp()
                gameValues.push(1)
                valueOfCart.innerHTML = gameValues.length
                return
            }
        } else if (buy === buyButtom[1]) {
            if (gameValues.includes(2)){
                closePopUp()
            } else {
                autoClosePopUp()
                gameValues.push(2)
                valueOfCart.innerHTML = gameValues.length
                return
            }
        } else if (buy === buyButtom[2]) {
            if (gameValues.includes(3)){
                closePopUp()
            } else {
                autoClosePopUp()
                gameValues.push(3)
                valueOfCart.innerHTML = gameValues.length
                return
            }
        } else if (buy === buyButtom[3]) {
            if (gameValues.includes(4)){
                closePopUp()
            } else {
                autoClosePopUp()
                gameValues.push(4)
                valueOfCart.innerHTML = gameValues.length
                return
            }
        }
    })
})

function closePopUp() {
    popUpBox.classList.add('open')
}

function autoClosePopUp() {
    popUpBox.classList.remove('open')
}

btnClose.addEventListener('click', ()=> {
    popUpBox.classList.remove('open')
})