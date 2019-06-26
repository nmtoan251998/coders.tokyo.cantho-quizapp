$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        dots: true,
        nav:true,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive:{
            0:{
                items:1
            },
            420:{
                items:2
            },
            600:{
                item: 3    
            },
            1000:{
                items:3
            }
        }
    })   
});

window.onload = function() {
    Particles.init({
      selector: '.background',
      color:'red',
      speed: 1,
      connectParticles: false
    });
  };  

