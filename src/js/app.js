$(document).ready(function() {


  var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // Navigation arrows
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',

    // And if we need scrollbar
    scrollbar: '.swiper-scrollbar'
  });

  var mySwiper = new Swiper ('.swiper-container.is-product', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 4,

    // Navigation arrows
    nextButton: '.arrow-button-next',
    prevButton: '.arrow-button-prev',


    // And if we need scrollbar
    scrollbar: '.swiper-scrollbar'
  });


});