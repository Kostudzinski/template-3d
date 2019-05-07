'use strict';

$(document).ready(function () {
    changePhoto();
    scrollSlow();
});

$(window).scroll(function () {
    navBack();
    //    parallax();
    dim();
    line();
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

function dim() {
    var scrollBottom = $(window).scrollTop() + $(window).height();
    if (scrollBottom >= ($(".dim-img").offset().top) + 320) {
        $('.dim-img').css({
            'opacity': '.2'
        });

        $('.dim-cube').css({
            'opacity': '1'
        });
    } else {
        $('.dim-img').css({
            'opacity': '1'
        });

        $('.dim-cube').css({
            'opacity': '0'
        });
    };
};

function line() {
    var scrollBottom = $(window).scrollTop() + $(window).height();
    if (scrollBottom >= ($(".blue-first").offset().top) + 50) {
        $('.blue-first').addClass('blue-line-on');
    }
    if (scrollBottom >= ($(".blue-second").offset().top) + 50) {
        $('.blue-second').addClass('blue-line-on');
    }
    if (scrollBottom >= ($(".blue-third").offset().top) + 50) {
        $('.blue-third').addClass('blue-line-on');
    }

    if (scrollBottom >= ($(".blue-fourth").offset().top) + 50) {
        $('.blue-fourth').addClass('blue-line-on');
    }
};


function navBack() {
    if ($(window).scrollTop() >= 50) {

        $('nav').addClass('nav-back')

    } else {
        $('nav').removeClass('nav-back')

    };
}

$('.list-item, .cross-li').click(function () {
    $('.cross').removeClass('rotate');
    $('.par-open').removeClass('display');
    var parent = $(this).parents('.li-open');
    var cross = parent.find('.cross');
    var par = parent.find('.par-open');
    cross.toggleClass('rotate');
    par.toggleClass('display');
    cross.click(function () {
        $('.cross').removeClass('rotate');
        $('.par-open').removeClass('display');
        $('#main-li-img').removeClass('no-display');
        $("div.mydiv").hide();

    })
});

function changePhoto() {
    $('.li-open').click(function () {
        $('#main-li-img').addClass('no-display');
        var myvar = this.id;
        $("div.mydiv").hide();
        $('#div' + myvar).show();
    });
};

//function changePhoto() {
//    $('.list-item, cross-li').click(function () {
//        var parent = $(this).parents('.li-open');
//        $('#main-li-img').addClass('no-display');
//        var myvar = parent.attr('id');
//        $("div.mydiv").hide();
//        $('#div' + myvar).show();
//    });
//};