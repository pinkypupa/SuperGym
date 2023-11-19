/* eslint-disable no-new */
import Swiper from '../vendor/swiper';
const feedbackSlider = document.querySelector('[data-swiper="feedback"]');
const feedbackNextButton = document.querySelector('[data-swiper="feedback-button-next"]');
const feedbackPrevButton = document.querySelector('[data-swiper="feedback-button-prev"]');

const initSwiperFeedback = () => {
  if (feedbackSlider) {
    new Swiper(feedbackSlider, {
      slidesPerView: 1,

      navigation: {
        nextEl: feedbackNextButton,
        prevEl: feedbackPrevButton,
      },
    });
  }
};

export {initSwiperFeedback};
