const menuToogle = document.querySelector('.header nav input');
const nav = document.querySelector(".header #more");

menuToogle.addEventListener('click',function() {
    nav.classList.toggle('visible');
});