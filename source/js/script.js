const requestCallButton = document.querySelector('.header-nav__button');
const requestCallPopup = document.querySelector('.request-call-popup');
const popupCloseButton = document.querySelector('[name = request-call-popup__close-button]');
const escKeyCode = 27;

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
