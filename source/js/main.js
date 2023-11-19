/* eslint-disable no-console */
import {iosVhFix} from './utils/ios-vh-fix';
// import {Form} from './modules/form-validate/form';
import {swiperJury} from './modules/jury-swiper';
// import {initSwiperFeedback} from './modules/feedback-swiper';
import {changeItem, changeMonth} from './modules/subscription';
import {playVideo} from './modules/iframe';
import {validateForm} from './modules/validate-form';
import {initAccordions} from './modules/init-accordion';
import {initTabs} from './modules/init-tabs';
// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  swiperJury.slideNext();
  // swiperFeedback.slideNext();
  changeItem();
  changeMonth();
  playVideo();
  validateForm();
  // initSwiperFeedback();

  // eslint-disable-next-line no-unused-vars
  const swiper = new window.Swiper('.feedback__slider', {
    navigation: {
      nextEl: '.feedback__button--next',
      prevEl: '.feedback__button--previous',
    },
  });

  window.addEventListener('load', () => {
    initAccordions();
    initTabs();
  });

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
//   window.addEventListener('load', () => {
//     initModals();
//     const form = new Form();
//     window.form = form;
//     form.init();
//   });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
