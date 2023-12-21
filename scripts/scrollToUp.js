let scrollBtn = document.querySelector('.to-up');

window.addEventListener('scroll', ()=> {
    if(window.scrollY < 500) {
        scrollBtn.classList.remove('visible');
    } else if(window.scrollY > 400) {
        scrollBtn.classList.add('visible');
    };
});