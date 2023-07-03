/* ------------------------------------------------------------------------------------------ */
/* BURGER MENU */
/* Toggle burger-menu */
/* ------------------------------------------------------------------------------------------ */
let burgerIcon = document.querySelector('.menu-trigger');
let mobileMenu = document.querySelector('.menu-mobile');

burgerIcon.addEventListener('click', ()=>{
    burgerIcon.classList.toggle('active');
    mobileMenu.classList.toggle('show');
})

/* ------------------------------------------------------------------------------------------ */
/* OVERLAY ACCUEIL */
/* Toggle overlay */
/* ------------------------------------------------------------------------------------------ */

let seeAccueilDetails = document.querySelector('.see-accueil-details');
let overlayAccueil = document.querySelector('.overlay-accueil');
let closeBtnAccueil = document.querySelectorAll('.close-btn');
let overlayContainer = document.querySelector('.overlay-accueil__container');


seeAccueilDetails.addEventListener('click', ()=>{
    overlayAccueil.classList.toggle('active');
})

closeBtnAccueil.forEach(btn => {
    btn.addEventListener('click', () => {
        overlayAccueil.classList.remove('active');
    });
});

overlayAccueil.addEventListener('click', (event) => {
    // Vérifier si le clic a été effectué en dehors de la modale
    if (!overlayContainer.contains(event.target)) {
        overlayAccueil.classList.remove('active');
    }
});