/* ------------------------------------------------------------------------------------------ */
/* BURGER MENU */
/* Toggle burger-menu */
/* ------------------------------------------------------------------------------------------ */
let burgerIcon = document.querySelector('.menu-trigger');
let mobileMenu = document.querySelector('.menu-mobile')

burgerIcon.addEventListener('click', ()=>{
    burgerIcon.classList.toggle('active');
    mobileMenu.classList.toggle('show');
})