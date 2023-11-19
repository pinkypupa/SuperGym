const swiperFeedback = new window.Swiper('[data-swiper="feedback"]', {
  // slidesPerGroup: 1,
  // // loop: true,
  // speed: 300,
  // initialSlide: 0,
  // slidesPerView: 1,

  navigation: {
    nextEl: '[data-swiper="feedback-button-prev"]',
    prevEl: '[data-swiper="feedback-button-next"]',
    clickable: true,
  },

  // breakpoints: {
  //   1366: {
  //     slidesPerView: 4,
  //     spaceBetween: 40,
  //     initialSlide: 7,
  //   },

  //   768: {
  //     slidesPerView: 2,
  //     spaceBetween: 32,
  //     initialSlide: 1,
  //   },

  //   320: {
  //     slidesPerView: 1,
  //     spaceBetween: 20,
  //     initialSlide: 1,
  //   },
  // },
});

export {swiperFeedback};
