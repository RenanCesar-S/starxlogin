const sellers = document.querySelector('.best-sellers');
const desired = document.querySelector('.desired');
let desColors = document.querySelector('.des-colors');
let sellColors = document.querySelector('.sell-colors');

let sellersDiv = document.querySelector('.games-best-sellers');
let mostdesiredDiv = document.querySelector('.games-most-desired');

function desiredOn() {
    desColors.classList.add('pDesiredSwitch');
    desired.classList.add('desired-active');

    sellColors.classList.add('pSellSwitch');
    sellers.classList.add('sellers-desactive');

    sellersDiv.classList.add('desactive');

    mostdesiredDiv.classList.remove('displayOff')
}

function desiredOff() {
    desColors.classList.remove('pDesiredSwitch');
    desired.classList.remove('desired-active');

    sellColors.classList.remove('pSellSwitch');
    sellers.classList.remove('sellers-desactive');

    sellersDiv.classList.remove('desactive');

    mostdesiredDiv.classList.add('displayOff')
}

desired.addEventListener('click', desiredOn);
sellers.addEventListener('click', desiredOff);

// Best Sellers

let visibilityDesc = document.querySelector('.visibility-descount-1');

let priceDescount1 = document.querySelector('.price-descount-1');
let priceDescount2 = document.querySelector('.price-descount-2');
let priceDescount3 = document.querySelector('.price-descount-3');
let priceDescount4 = document.querySelector('.price-descount-4');
let priceDescount5 = document.querySelector('.price-descount-5');
let priceDescount6 = document.querySelector('.price-descount-5');

priceDescount1.classList.add('desactive');
priceDescount2.classList.add('desactive');
priceDescount3.classList.add('desactive');
//priceDescount4.classList.add('desactive');
priceDescount5.classList.add('desactive');
priceDescount6.classList.add('desactive');


// Most Desired

let priceDescount01 = document.querySelector('.price-descount-01');
let priceDescount02 = document.querySelector('.price-descount-02');
let priceDescount03 = document.querySelector('.price-descount-03');
let priceDescount04 = document.querySelector('.price-descount-04');
let priceDescount05 = document.querySelector('.price-descount-05');
let priceDescount06 = document.querySelector('.price-descount-06');
let priceDescount07 = document.querySelector('.price-descount-06');


priceDescount01.classList.add('desactive');
//priceDescount02.classList.add('desactive');
//priceDescount03.classList.add('desactive');
//priceDescount04.classList.add('desactive');
//priceDescount05.classList.add('desactive');
priceDescount06.classList.add('desactive');
//priceDescount07.classList.add('desactive');