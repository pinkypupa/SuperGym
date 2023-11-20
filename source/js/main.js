import {iosVhFix} from './utils/ios-vh-fix';
import {Form} from './modules/form-validate/form';
import {initSwiperJury} from './modules/jury-swiper';
import {initSwiperFeedback} from './modules/feedback-swiper';
import {changeItem, changeMonth} from './modules/subscription';
import {playVideo} from './modules/iframe';
import {initAccordions} from './modules/init-accordion';
import {initTabs} from './modules/init-tabs';
// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  window.addEventListener('load', () => {
    initAccordions();
    initTabs();
    initSwiperJury();
    initSwiperFeedback();
    changeItem();
    changeMonth();
    playVideo();

    const form = new Form();
    window.form = form;
    form.init();
  });
});

// ---------------------------------
