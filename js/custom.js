$(function() {

  // back to top
  var back2top = $(".back-to-top");
  var html_body = $("html, body");

  back2top.on('click', function() {
    html_body.animate({
      scrollTop: 0
    }, 500);
  });

  $(window).scroll(function () {
    var scrolling = $(this).scrollTop();

    if(scrolling > 200) {
      back2top.fadeIn(500);
    } else {
      back2top.fadeOut(500);
    }
  });
    
    // slick slider
    $('.banner-part').slick({
        dots: false,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 700,
        autoplay: true,
        autoplaySpeed: 2500,
        fade: true,
        infinite: true,
        cssEase: 'linear'
      });

    



      // external js: isotope.pkgd.js
            // init Isotope
            var $grid = $('.grid').isotope({
                itemSelector: '.element-item',
                layoutMode: 'fitRows'
            });
            // filter functions
            var filterFns = {
                // show if number is greater than 50
                numberGreaterThan50: function() {
                var number = $(this).find('.number').text();
                return parseInt( number, 10 ) > 50;
                },
                // show if name ends with -ium
                ium: function() {
                var name = $(this).find('.name').text();
                return name.match( /ium$/ );
                }
            };
            // bind filter button click
            $('.filters-button-group').on( 'click', 'button', function() {
                var filterValue = $( this ).attr('data-filter');
                // use filterFn if matches value
                filterValue = filterFns[ filterValue ] || filterValue;
                $grid.isotope({ filter: filterValue });
            });
            // change is-checked class on buttons
            $('.button-group').each( function( i, buttonGroup ) {
                var $buttonGroup = $( buttonGroup );
                $buttonGroup.on( 'click', 'button', function() {
                $buttonGroup.find('.is-checked').removeClass('is-checked');
                $( this ).addClass('is-checked');
                });
            });


      // counter UP
      $('.counter').counterUp({
        delay: 10,
        time: 1000
      });

        // client-review-p2 slider
    // slick slider
    $('.client-review-p2').slick({
      dots: false,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 700,
      autoplay: false,
      autoplaySpeed: 2500
    });

    // slick slider
    $('.active-carousel').slick({
      dots: false,
      arrows: true,
      prevArrow: '.left-arrow',
      nextArrow: '.right-arrow',
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 700,
      autoplay: false,
      autoplaySpeed: 2500,
      centerPadding: '0',
      responsive: [
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
           
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
       
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
    
    // sponsor slider
    $('.sponsor-part').slick({
      dots: false,
      arrows: false,
      slidesToShow: 5,
      slidesToScroll: 1,
      speed: 700,
      autoplay: true,
      autoplaySpeed: 2500,
      responsive: [
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
           
          }
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        }
       
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    
    });
    
  
});


// barger menu
document.querySelector('.menu-btn').addEventListener('click', () => document.querySelector('.head-nav').classList.toggle('show'));

// accordion
var acc = document.getElementsByClassName("re-accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      
    } 
  });
}
