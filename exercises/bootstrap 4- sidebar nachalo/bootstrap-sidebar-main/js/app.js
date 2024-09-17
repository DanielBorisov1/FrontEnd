$(document).ready(function()
{
   //RERO SLIDER
   $('#hero-slider').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    items:1,
    dots: false,
    smartSpeed: 1000,
    navText: ['PREV','NEXT'],
    responsive:{
        0:{
            nav:true,
        },
        768:{
            nav:true,
        },
        1000:{
           
        }
        
     }
   });
        //project

        $('#project-slider').owlCarousel({
         loop:true,
         margin:0,
         nav:true,
         
         dots: false,
         smartSpeed: 1000,
         navText: ['PREV','NEXT'],
         responsive:{
             0:{
              nav:true,
             },
             768:{
                 nav:true,
             },
             1000:{
                
             }
             
          }
        });

        //review
        $('.owl-carousel'). owlCarousel ({
          loop: true,
          margin: 10,
          nav:false,
          dots: true, 
          items: 1,
          smartSpeed: 800,
        })
});




const toggler = document.querySelector(".btn");
toggler.addEventListener("click",function(){
    document.querySelector("#sidebar").classList.toggle("collapsed");
});






