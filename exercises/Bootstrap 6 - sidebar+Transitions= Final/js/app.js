//text slider
var options = {
    strings: [
        'Craft Stunning Website',
        'Creative Agency'
    ],
    typeSpeed: 100,
    loop: false,
    loop: Infinity,
    startDelay: 0,


};

var typed = new Typed('#slider-titles', options);



//TESINONIALS
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 24,
    nav: false,
    smartSpeed: 700,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 2,
            center: true,

        }
    }
});


//Button for sidebar
const butonche = document.querySelector('.butonche')
const sidebar = document.querySelector('#sidebar')
const links = document.querySelectorAll('#sidebar ul li a')


butonche.addEventListener('click', () => {
    sidebar.classList.toggle('is-active')
});

//active change
links.forEach(link => link.addEventListener('click', ()=> {
    


    links.forEach(link => link.classList.remove('is-active'))
    link.classList.add('is-active')
   
    //затваря се sidebara при натискане на някой линк
    sidebar.classList.remove('is-active')
    butonche.classList.remove('is-active')
}))


//butonche
const toggler = document.querySelector(".butonche");
toggler.addEventListener("click",function(){
    document.querySelector("#sidebar").classList.toggle("collapsed");
});



//Animatinons
AudioScheduledSourceNode.init({
    duration: 900,
})