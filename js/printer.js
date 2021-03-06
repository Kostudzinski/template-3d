'use strict';

$(document).ready(function () {
    changePhoto();
    scrollSlow();
    burger();
});

$(window).scroll(function () {
    navBack();
    //    parallax();
    dim();
    line();
    showTech();
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
    if (scrollBottom >= ($(".dim-img").offset().top) + 390) {
        $('.dim-img').css({
            'opacity': '.3'
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
};

//function line() {
//    $('.blue-line').each(function () {
//        var scrollBottom = $(window).scrollTop() + $(window).height();
//        if (scrollBottom >= ($(".blue-line").offset().top) + 50) {
//            $(this).addClass('blue-line-on');
//        }
//    })
//}


function navBack() {
    if ($(window).scrollTop() >= 50) {

        $('nav').addClass('nav-back')

    } else {
        $('nav').removeClass('nav-back')

    };
}

$('.list-item').click(function () {
    $('.list-item').removeClass('list-item-under');
    $('.cross').removeClass('rotate');
    $('.par-open').removeClass('display');
    var parent = $(this).parents('.li-open');
    var cross = parent.find('.cross');
    var par = parent.find('.par-open');
    cross.toggleClass('rotate');
    par.toggleClass('display');
    $(this).toggleClass('list-item-under');
    if ((cross).hasClass('rotate')) {
        cross.click(function () {
            $('.cross').removeClass('rotate');
            $('.par-open').removeClass('display');
            $('.list-item').removeClass('list-item-under');
            $('#main-li-img').removeClass('no-display');
            $("div.mydiv").hide();

        })
    }
});

function changePhoto() {
    $('.list-item').click(function () {
        $('#main-li-img').addClass('no-display');
        var myvar = this.id;
        $("div.mydiv").hide();
        $('#div' + myvar).show();
    });
};

function showTech() {
    var scrollBottom = $(window).scrollTop() + $(window).height();
    if (scrollBottom >= ($(".tech-info-1").offset().top) + 50) {
        $('.tech-info-1').addClass('tech-on');
    };
    if (scrollBottom >= ($(".tech-info-2").offset().top) + 50) {
        $('.tech-info-2').addClass('tech-on');
    };
}

 function burger() {
     $('#burger').click(function () {
         $('.burger-line:nth-child(2)').toggleClass('transparent');
         $('.burger-line:nth-child(1)').toggleClass('rotate-top');
         $('.burger-line:nth-child(3)').toggleClass('rotate-bottom');
         $('.burger-nav').toggleClass('burger-on');

     });
 }