import {iosVhFix} from './utils/ios-vh-fix';
// import {initModals} from './modules/modals/init-modals';
// import {Form} from './modules/form-validate/form';
import {swiper} from './jury-swiper';

// пока сделаем через ид, потом надо через дата-атрибуты как-то
const videoWrapper = document.querySelector('.gym__video');
const videoPlayer = document.getElementById('videoPoster');
const playButton = document.getElementById('playButton');

// ---------------------------------

function playVideo() {
  videoPlayer.remove();
  playButton.remove();
  const iframePlayer = document.createElement('iframe');
  iframePlayer.setAttribute('src', 'https://www.youtube.com/embed/9TZXsZItgdw?si=twR-ewfRYAOdjvuk?&autoplay=1');
  iframePlayer.setAttribute('title', 'videoPlayer');
  iframePlayer.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
  iframePlayer.setAttribute('frameborder', '0');
  iframePlayer.setAttribute('allowfullscreen', '');
  iframePlayer.setAttribute('width', '364');
  iframePlayer.setAttribute('height', '228');
  videoWrapper.append(iframePlayer);
}

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  videoPlayer.addEventListener('click', () => {
    playVideo();
  });

  playButton.addEventListener('click', () => {
    playVideo();
  });

  swiper.slideNext();


  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  // window.addEventListener('load', () => {
  //   initModals();
  //   const form = new Form();
  //   window.form = form;
  //   form.init();
  // });
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
