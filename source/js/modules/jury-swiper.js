/* eslint-disable no-new */
import Swiper from '../vendor/swiper';
const swiperJury = document.querySelector('[data-swiper="jury"]');
const swiperJuryNext = document.querySelector('[data-swiper="jury-button-next"]');
const swiperJuryPrev = document.querySelector('[data-swiper="jury-button-prev"]');

const initSwiperJury = () => {
  if (swiperJury) {
    new Swiper(swiperJury, {
      initialSlide: 0,
      loop: true,

      navigation: {
        nextEl: swiperJuryNext,
        prevEl: swiperJuryPrev,
        clickable: true,
      },

      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
          initialSlide: 2,
          allowTouchMove: true,
        },

        768: {
          slidesPerView: 2,
          spaceBetween: 32,
          initialSlide: 2,
          allowTouchMove: true,
        },

        1366: {
          slidesPerView: 4,
          spaceBetween: 40,
          initialSlide: 0,
          allowTouchMove: false,
        },
      },
    });
  }
};

export {initSwiperJury};
