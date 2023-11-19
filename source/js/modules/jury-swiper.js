const swiperJury = new window.Swiper('[data-swiper="jury"]', {
  slidesPerGroup: 1,
  loop: true,
  speed: 300,
  initialSlide: 0,

  navigation: {
    nextEl: '[data-swiper="jury-button-prev"]',
    prevEl: '[data-swiper="jury-button-next"]',
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

export {swiperJury};
