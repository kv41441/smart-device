const requestCallButton = document.querySelector('.header-nav__button');
const requestCallPopup = document.querySelector('.request-call-popup');
const popupCloseButton = document.querySelector('[name = request-call-popup__close-button]');
const footerNav = document.querySelector('.footer-nav');
const footerNavHeader = document.querySelector('.footer-nav h2');
const contacts = document.querySelector('.contacts');
const contactsHeader = document.querySelector('.contacts h2');
const popupDarkBg = document.querySelector('.popup-dark-bg');
const escKeyCode = 27;

// Открытие/закрытие попапа

const clearPopupForm = () => {
  const popupNameInput = document.querySelector('[name = popup-form__name]');
  const popupTelInput = document.querySelector('[name = popup-form__tel]');
  const popupQuestionInput = document.querySelector('[name = popup-form__question]');

  popupNameInput.value = '';
  popupTelInput.value = '';
  popupQuestionInput.value = '';
};

const closePopup = () => {
  requestCallPopup.classList.remove('request-call-popup--opened');
  requestCallPopup.classList.add('request-call-popup--closed');
  popupDarkBg.classList.remove('popup-dark-bg--up');
  clearPopupForm();
};

const closePopupOnClickListener = () => {
  popupDarkBg.addEventListener('click', () => {
    if (requestCallPopup.classList.contains('request-call-popup--opened')) {
      closePopup();
    }
  });
};

requestCallButton.addEventListener('click', (evt) => {
  evt.preventDefault();

  if (requestCallPopup.classList.contains('request-call-popup--closed')) {
    requestCallPopup.classList.remove('request-call-popup--closed');
    requestCallPopup.classList.add('request-call-popup--opened');
    popupDarkBg.classList.add('popup-dark-bg--up');
    closePopupOnClickListener();
  } else {
    closePopup();
  }
});

popupCloseButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  closePopup();
});

window.addEventListener('keydown', (evt) => {
  if (evt.keyCode === escKeyCode) {
    evt.preventDefault();
    if (requestCallPopup.classList.contains('request-call-popup--opened')) {
      closePopup();
    }
  }
});

// Открытие/закрытие списков в подвале

$(footerNavHeader).click(() => {
  if (footerNav.classList.contains('footer-nav--closed') && $(window).width() < 768) {
    $('.footer-nav__list').slideDown(800);
    $('.footer-nav').removeClass('footer-nav--closed');
    $('.footer-nav').addClass('footer-nav--opened');
  } else if (footerNav.classList.contains('footer-nav--opened') && $(window).width() < 768) {
    $('.footer-nav__list').slideUp(800);
    $('.footer-nav').removeClass('footer-nav--opened');
    $('.footer-nav').addClass('footer-nav--closed');
  }
});

$(contactsHeader).click(() => {
  if (contacts.classList.contains('contacts--closed') && $(window).width() < 768) {
    $('.contacts__list').slideDown(800);
    $('.contacts').removeClass('contacts--closed');
    $('.contacts').addClass('contacts--opened');
  } else if (contacts.classList.contains('contacts--opened') && $(window).width() < 768) {
    $('.contacts__list').slideUp(800);
    $('.contacts').removeClass('contacts--opened');
    $('.contacts').addClass('contacts--closed');
  }
});

// Маска ввода формы телефона

$(document).ready(function(){
  $('input[type = tel]').mask('+7 (000) 000 00 00');
});
