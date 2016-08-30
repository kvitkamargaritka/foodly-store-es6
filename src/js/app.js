$(document).ready(function() {

  // hamburger-menu
  $('#nav-icon').click(function(){
    //$(this).toggleClass('open');
    //console.log(':::>',pizda);
  });

  // swiper JS
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
    prevButton: '.arrow-button-prev',
    breakpoints: {
      // when window width is <= 320px
      1024: {
        slidesPerView: 3,
        spaceBetweenSlides: 30
      },
      768: {
        slidesPerView: 2,
        spaceBetweenSlides: 20
      },
      416: {
        slidesPerView: 1,
        spaceBetweenSlides: 10
      }
    }
  });

  new Swiper (swiper + '.is-general', {
    direction: 'horizontal',
    loop: true,
    pagination: '.swiper-pagination',
    paginationClickable: true,
    spaceBetween: 30,
    effect: 'fade'
  });

  // events
  $('.cart').click (function () {
    $('.js-popup').addClass('is-visible');
    $('.overlay').addClass('is-visible');
  });
  $('.js-close').click (function () {
    $('.js-popup').removeClass('is-visible');
    $('.overlay').removeClass('is-visible');
  });

  $('.currency').click (function () {
    $('.js-currency').addClass('is-visible');
  });

  $('.hamburger').click (function () {
    $('.mobile-menu').addClass('is-visible');
  });
  $('.js-close2').click (function () {
    $('.mobile-menu').removeClass('is-visible');
  });
  $('.js-search').click (function () {
    $('.form.is-search').addClass('is-open');
  });
  $(document).click(function (event) {
    if ($(event.target).closest('.js-search').length == 0 && $(event.target).attr('id') != 'toggle-link') {
      $('.input.is-small').hide();
    }
  });


});