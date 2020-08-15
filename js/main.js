$(document).ready(function() { 
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1500);
        return false;
    });

    $(".testimonials-carousel").owlCarousel({
        autoplay: true,
        nav:true,
        loop: true,
        responsive: {
            0: {
                items: 2
            },
            500: {
                items: 4
            },
            700: {
                items: 6
            }
        }
    });
 
    $(".clients-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
            0: {
                items: 2
            },
            768: {
                items: 4
            },
            900: {
                items: 6
            }
        }
    });


});