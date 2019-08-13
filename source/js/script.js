const requestCallButton = document.querySelector('.header-nav__button');
const requestCallPopup = document.querySelector('.request-call-popup');
const popupCloseButton = document.querySelector('[name = request-call-popup__close-button]');
const footerNav = document.querySelector('.footer-nav');
const footerNavHeader = document.querySelector('.footer-nav h2');
const contacts = document.querySelector('.contacts');
const contactsHeader = document.querySelector('.contacts h2');
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

const closePopup = (elementName) => {
  requestCallPopup.classList.remove('request-call-popup--opened');
  requestCallPopup.classList.add('request-call-popup--closed');
  clearPopupForm();
};

requestCallButton.addEventListener('click', (evt) => {
  evt.preventDefault();

  if (requestCallPopup.classList.contains('request-call-popup--closed')) {
    requestCallPopup.classList.remove('request-call-popup--closed');
    requestCallPopup.classList.add('request-call-popup--opened');
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

footerNavHeader.addEventListener('click', () => {
  if (footerNav.classList.contains('footer-nav--closed')) {
    footerNav.classList.remove('footer-nav--closed');
    footerNav.classList.add('footer-nav--opened');
  } else {
    footerNav.classList.remove('footer-nav--opened');
    footerNav.classList.add('footer-nav--closed');
  }
});

contactsHeader.addEventListener('click', () => {
  if (contacts.classList.contains('contacts--closed')) {
    contacts.classList.remove('contacts--closed');
    contacts.classList.add('contacts--opened');
  } else {
    contacts.classList.remove('contacts--opened');
    contacts.classList.add('contacts--closed');
  }
});
