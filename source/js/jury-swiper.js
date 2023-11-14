/* eslint-disable no-undef */
import './vendor/swiper';

// здесь решить проблему того, что свайпер подчёркивается
const swiper = new Swiper('.jury__slider', {
  slidesPerGroup: 1,
  loop: true,
  speed: 300,


  // // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    clickable: true,
  },

  breakpoints: {
    1366: {
      slidesPerView: 4,
      spaceBetween: 40,
      initialSlide: 7,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 32,
      initialSlide: 1,
    },

    320: {
      slidesPerView: 1,
      spaceBetween: 20,
      initialSlide: 1,
    },
  },
});

export {swiper};
