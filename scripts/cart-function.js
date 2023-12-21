let buyButtom = document.querySelectorAll('.buy')
let cartCounter = document.querySelector('.cart-counter')
let valueOfCart = document.querySelector('.value-of-cart')

const gameValues = []

buyButtom.forEach((buy)=> {
    buy.addEventListener('click', ()=>{
        cartCounter.style.display = 'flex'

        if (buy === buyButtom[0]) {
            if (gameValues.includes(1)){
                alert('Item já adicionado!')
            } else {
                gameValues.push(1)
                valueOfCart.innerHTML = gameValues.length
                return
            }
        } else if (buy === buyButtom[1]) {
            if (gameValues.includes(2)){
                alert('Item já adicionado!')
            } else {
                gameValues.push(2)
                valueOfCart.innerHTML = gameValues.length
                return
            }
        } else if (buy === buyButtom[2]) {
            if (gameValues.includes(3)){
                alert('Item já adicionado!')
            } else {
                gameValues.push(3)
                valueOfCart.innerHTML = gameValues.length
                return
            }
        } else if (buy === buyButtom[3]) {
            if (gameValues.includes(4)){
                alert('Item já adicionado!')
            } else {
                gameValues.push(4)
                valueOfCart.innerHTML = gameValues.length
                return
            }
        }
    })
})


