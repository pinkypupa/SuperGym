/* eslint-disable no-new */
import Swiper from '../vendor/swiper';
const swiperJury = document.querySelector('[data-swiper="jury"]');
const swiperJuryNext = document.querySelector('[data-swiper="jury-button-next"]');
const swiperJuryPrev = document.querySelector('[data-swiper="jury-button-prev"]');

const initSwiperJury = () => {
  if (swiperJury) {
    new Swiper(swiperJury, {
      slidesPerGroup: 1,
      loop: true,
      speed: 300,
      initialSlide: 0,
      // centeredSlides: 'true',

      navigation: {
        nextEl: swiperJuryNext,
        prevEl: swiperJuryPrev,
        clickable: true,
      },

      breakpoints: {
        1366: {
          slidesPerView: 4,
          spaceBetween: 40,
          initialSlide: 0,
        },

        768: {
          slidesPerView: 2,
          spaceBetween: 32,
          initialSlide: 2,
        },

        320: {
          slidesPerView: 1,
          spaceBetween: 20,
          initialSlide: 2,
        },
      },
    });
  }
};

export {initSwiperJury};
