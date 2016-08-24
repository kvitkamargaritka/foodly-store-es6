$(document).ready(function() {


  var mySwiper = new Swiper ('.swiper-container.is-small', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // Navigation arrows
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',

    // And if we need scrollbar
    scrollbar: '.swiper-scrollbar'
  });

  var mySwiper2 = new Swiper ('.swiper-container.is-product', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 4,

    // Navigation arrows
    nextButton: '.arrow-button-next',
    prevButton: '.arrow-button-prev'

  });

  var mySwiper3 = new Swiper ('.swiper-container.is-general', {
    // Optional parameters
    direction: 'horizontal',
    pagination: '.swiper-pagination',
    paginationClickable: true
  });

});