$(document).ready(function(){
    $('.testimonial_slider').slick({
        slidesToShow: 1.99,
        draggable: false,
        adaptiveHeight: true,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="./img/arrowleft.png" alt=""></img>',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="./img/arrowright.png" alt=""></img>',
        responsive: [
            {
                breakpoint: 1120,
                settings:{
                    slidesToShow: 1,
                }
            }
        ]
    });
});