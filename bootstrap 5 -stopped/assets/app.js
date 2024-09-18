const navbar = document.querySelector('.navbar')
const hamburger = document.querySelector('.hamburger')
const navLinks =document.querySelector('.nav-links')

window.addEventListener('scroll', () => {
    if(this.scrollY >=10) {
        navbar.classList.add('scrolled')
    } else {
        navbar.classList.remove('scrolled')
    }
});
// това е за Responsive buttona
// Да се затваря и отваря 
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active')
    hamburger.classList.toggle('active')
});



//Typed js
var options = {
    strings: [
        'Creative Agency', 
        'Typed JS is awesome'
    ],
    typeSpeed: 100,
    loop: false,
    loop: Infinity,
    startDelay: 0,
    
    
};

var typed = new Typed('#hero-titles', options);