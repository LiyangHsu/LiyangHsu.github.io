// Load WOW.js on non-touch devices
var isPhoneDevice = "ontouchstart" in document.documentElement;
$(document).ready(function() {
    if (isPhoneDevice) {
        //mobile
    } else {
        //desktop               
        // Initialize WOW.js
        wow = new WOW({
            offset: 50
        })
        wow.init();
    }
});

(function($) {
    "use strict"; // Start of use strict

    // jQuery to collapse the navbar on scroll
    $(window).scroll(function() {
        if ($("nav.navbar").offset().top > 200) {
            $("nav.navbar").removeClass("navbar-expanded");
            $(".lan_switch").removeClass("lan_position");
        } else {
            $("nav.navbar").addClass("navbar-expanded");
            $(".lan_switch").addClass("lan_position");
        }
    });

    // Smooth Scrolling: Smooth scrolls to an ID on the current page.
    // To use this feature, add a link on your page that links to an ID, and add the .page-scroll class to the link itself. See the docs for more details.
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Activates floating label headings for the contact form.
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
  
    // Magnific Popup jQuery Lightbox Gallery Settings
    $('.gallery-link').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        },
        image: {
            titleSrc: 'title'
        }
    });

    $('.mix').magnificPopup({
        type: 'image',
        image: {
            titleSrc: 'title'
        }
    });

    // Scrollspy: Highlights the navigation menu items while scrolling.
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Portfolio Filtering Scripts & Hover Effect
    var filterList = {
        init: function() {
            // MixItUp plugin
            $('#portfoliolist').mixItUp();
        },
    };

    filterList.init();

})(jQuery); // End of use strict

// $(document).ready(function(){
//      $(window).scroll(function () {
//             if ($(this).scrollTop() > 50) {
//                 $('#back-to-top').fadeIn();
//             } else {
//                 $('#back-to-top').fadeOut();
//             }
//         });
//         // scroll body to 0px on click
//         $('#back-to-top').click(function () {
//             $('#back-to-top').tooltip('hide');
//             $('body,html').animate({
//                 scrollTop: 0
//             }, 800);
//             return false;
//         });
        
//         $('#back-to-top').tooltip('show');

// });