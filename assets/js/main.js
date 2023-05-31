const menuOpen = document.querySelector('.header__button');
const menuMobile = document.querySelector('.menu__mobile');
const menuClose = document.querySelector('.mobile__button');


menuOpen.addEventListener('click', function() {
    menuMobile.classList.toggle('mobile__active');
})


menuClose.addEventListener('click', function() {
    menuMobile.classList.toggle('mobile__active');
})