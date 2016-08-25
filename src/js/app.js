$(document).ready(function() {

  var swiper = '.swiper-container';

  new Swiper (swiper + '.is-small', {
    direction: 'horizontal',
    loop: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    scrollbar: '.swiper-scrollbar'
  });

  new Swiper (swiper + '.is-product', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 4,
    nextButton: '.arrow-button-next',
    prevButton: '.arrow-button-prev'

  });

  new Swiper (swiper + '.is-general', {
    direction: 'horizontal',
    loop: true,
    pagination: '.swiper-pagination',
    paginationClickable: true,
    spaceBetween: 30,
    effect: 'fade',
  });
});