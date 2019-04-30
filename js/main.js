'use strict';

$(document).ready(function () {
    navBack();
});

$(window).scroll(function () {
    navBack();

});

function navBack() {
    if ($(window).scrollTop() >= 10) {

        $('nav').addClass('nav-back')

    } else {
        $('nav').removeClass('nav-back')

    };
}