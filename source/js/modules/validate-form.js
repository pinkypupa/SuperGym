import Pristine from '../vendor/pristine.min.js';

const mainForm = document.querySelector('[data-form="form"]');
const phoneValide = /^[0-9-]*$/;

const pristine = new Pristine(mainForm, {
  classTo: 'form__item',
  errorClass: 'form__item--invalid',
  successClass: 'form__item--valid',
  errorTextParent: 'form__item',
  errorTextTag: 'span',
  errorTextClass: 'form__error',
});

function validateName(value) {
  return value.length >= 1 && value.length <= 27;
}

function validatePhone(value) {
  return phoneValide.test(value);
}

pristine.addValidator(mainForm.querySelector('[data-form="form-name"]'), validateName, 'Введите имя - от 1 до 27 символов');
pristine.addValidator(mainForm.querySelector('[data-form="form-phone"]'), validatePhone, 'Введите номер в числовом формате');

const onSubmit = () => {
  mainForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      mainForm.submit();
    }
  });
};

const validateForm = () => {
  mainForm.addEventListener('submit', onSubmit);
};

export {validateForm};
