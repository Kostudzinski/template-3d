'use strict';

$(document).ready(function () {
    scrollSlow();
    hoverPrinter();
});

$(window).scroll(function () {
    navBack();
    //    parallax();
});

function scrollSlow() {

    // Add smooth scrolling to all links
    $("a").on('click', function (event) {
        console.log(this.hash);
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                    scrollTop: $(hash).offset().top - 20
                }, 500,
                //                              function(){
                //   
                //        // Add hash (#) to URL when done scrolling (default click behavior)
                //        window.location.hash = hash;
                //      }
            );
        } // End if
    });
};

//function parallax() {
//    window.addEventListener('scroll', parallax, false);
//    var backgroundTop = document.getElementById('head-texts');
//    backgroundTop.style.top = (window.pageYOffset / 9.5) + "px";
//}

function navBack() {
    if ($(window).scrollTop() >= 50) {

        $('nav').addClass('nav-back')

    } else {
        $('nav').removeClass('nav-back')

    };
}

function hoverPrinter() {

    $('.printer-flex').hover(
        function () {
            $(this).find('h2').addClass('color-h2');
        },
        function () {
            $(this).find('h2').removeClass('color-h2');
        }
    )
}