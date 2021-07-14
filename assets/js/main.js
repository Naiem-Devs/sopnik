(function($) {
  "use strict";
  
  // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
  }); 

    // Home page_slider
    $('.hero_slider').owlCarousel({
    loop:true,
    margin:10,
    items:1,
    navText:['<p>Back</p>','<p>Next</p>'],
    nav:true,
    dots:false
    
    })

    // Home page_slider
    $('.decuration_slider').owlCarousel({
    loop:true,
    margin:20,
    items:3,
    navText:['<i class="far fa-chevron-left"></i>','<i class="far fa-chevron-right"></i>'],
    nav:true,
    dots:false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        768:{
            items:2
        },
        992:{
            items:3
        }
    }
    
    })

  $('Select').niceSelect();

})(jQuery);
