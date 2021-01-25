import Card from './card.js';
import {initialElements} from './initial-elements.js';
import FormValidator from './validate.js';
import {validationConfig} from './validate-config.js';

/*profile*/ 
const profileName = document.querySelector('.profile__title');
const profileAbout = document.querySelector('.profile__subtitle');

const popupPlaceProfile = document.querySelector('.popup_place_profile');
const popupFormProfile = document.querySelector('.popup__form_place_profile');
const popupInputProfileName = document.querySelector('.popup__form-text_type_profile-name');
const popupInputProfileAbout = document.querySelector('.popup__form-text_type_profile-about');

const editProfileButton = document.querySelector('.profile__edit-button');
const closeProfileButton = document.querySelector('.popup__close-button_place_profile');

/*element*/
const elementContainer = document.querySelector('.elements__container');

const popupPlaceElement = document.querySelector('.popup_place_element');
const popupFormElement = document.querySelector('.popup__form_place_element');
const popupInputElementTitle = document.querySelector('.popup__form-text_type_element-name');
const popupInputElementImage = document.querySelector('.popup__form-text_type_image');

const addElementButton = document.querySelector('.profile__add-button');
const closeElementButton = document.querySelector('.popup__close-button_place_element');

/*image*/

export const popupPlaceImage = document.querySelector('.popup_place_image');
export const popupImage = document.querySelector('.popup__image');
export const popupTitle = document.querySelector('.popup__title_place_image');

const closeImageButton = document.querySelector('.popup__close-button_place_image');

/*Card OPP*/

initialElements.forEach((initialElement) => {
  elementContainer.append(cardElementObj(initialElement));
});

const formValidClear = new FormValidator(validationConfig);


function cardElementObj(obj){
  const card = new Card(obj, '#element-template')
  return card.generateCard();
}

/*popup*/
export function openPopup(popup){
  popup.classList.add('popup_visible');
  document.addEventListener('keyup', clickKeyEscape);
  document.addEventListener('click', clickOutsidePopup);
}

function closePopup(popup){
  popup.classList.remove('popup_visible');
  document.removeEventListener('keyup', clickKeyEscape);
  document.removeEventListener('click', clickOutsidePopup);
}

function resetForm(popupForm){
  popupForm.reset();
}

/*profile*/

function submitProfile(evt){
  evt.preventDefault();
  profileName.textContent = popupInputProfileName.value;
  profileAbout.textContent = popupInputProfileAbout.value;
  closePopup(popupPlaceProfile);
}

function openPopupProfile(){
  popupInputProfileName.value = profileName.textContent;
  popupInputProfileAbout.value = profileAbout.textContent;
  formValidClear.enableValidation(popupPlaceProfile);
  formValidClear.clearErrorMessage(popupPlaceProfile);
  openPopup(popupPlaceProfile);
}

function closePopupProfile(){
  closePopup(popupPlaceProfile);
}

/*element*/

function submitNewElement(evt){
  evt.preventDefault();
  
  const data = {
  name: popupInputElementTitle.value,
  link: popupInputElementImage.value,
  }
  elementContainer.prepend(cardElementObj(data));
  closePopup(popupPlaceElement);
  }

function openPopupAddElement(){
  formValidClear.enableValidation(popupPlaceElement);
  formValidClear.clearErrorMessage(popupPlaceElement);
  openPopup(popupPlaceElement);
}

 function closePopupAddElement(){
    resetForm(popupFormElement);
    closePopup(popupPlaceElement);
 } 

/*image*/

function closeImage(){
  closePopup(popupPlaceImage);
}

/*close popup another options*/

function clickKeyEscape(evt){
  const popupVisible = document.querySelector('.popup_visible')
    if(evt.key === "Escape"){
      closePopup(popupVisible);
    }
}

function clickOutsidePopup(evt){
  if(evt.target.classList.contains('popup_visible')){
    closePopup(evt.target);
  }
}

/*handler*/

popupFormProfile.addEventListener('submit', submitProfile);
popupFormElement.addEventListener('submit', submitNewElement);

editProfileButton.addEventListener('click', openPopupProfile);
addElementButton.addEventListener('click', openPopupAddElement);

closeProfileButton.addEventListener('click', closePopupProfile);
closeElementButton.addEventListener('click', closePopupAddElement);
closeImageButton.addEventListener('click', closeImage);

