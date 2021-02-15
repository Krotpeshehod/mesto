/*profile*/ 
export const profileName = document.querySelector('.profile__title');
export const profileAbout = document.querySelector('.profile__subtitle');

export const popupPlaceProfile = document.querySelector('.popup_place_profile');
export const popupFormProfile = document.querySelector('.popup__form_place_profile');
export const popupInputProfileName = document.querySelector('.popup__form-text_type_profile-name');
export const popupInputProfileAbout = document.querySelector('.popup__form-text_type_profile-about');

export const editButtonAboutProfile = document.querySelector('.profile__edit-button_place_about-profile');


/*element*/
export const elementContainer = document.querySelector('.elements__container');

export const popupPlaceElement = document.querySelector('.popup_place_element');
export const popupFormElement = document.querySelector('.popup__form_place_element');
export const popupInputElementTitle = document.querySelector('.popup__form-text_type_element-name');
export const popupInputElementImage = document.querySelector('.popup__form-text_type_image');

export const addElementButton = document.querySelector('.profile__add-button');

/*avatar*/

export const profileAvatar = document.querySelector('.profile__avatar')
export const popupPlaceAvatar = document.querySelector('.popup_place_avatar');
export const editButtonAvatar = document.querySelector('.profile__edit-button_place_avatar');
export const popupFormPlaceAvatar = document.querySelector('.popup__form_place_avatar');
export const popupFormInputPlaceAvatar = document.querySelector('.popup__form-text_type_avatar');


/*image*/

export const popupPlaceImage = document.querySelector('.popup_place_image');


/*delete*/

export const popupPlaceDeleteCard = document.querySelector('.popup_place_delete-card')



const van = new URL('../../image/elements/van.jpeg', import.meta.url)
const morning = new URL('../../image/elements/morning.jpeg', import.meta.url)
const coffe = new URL('../../image/elements/coffee.jpeg', import.meta.url)
const viewFromVan = new URL('../../image/elements/view_from_van.jpeg', import.meta.url)
const boat = new URL('../../image/elements/boat.jpeg', import.meta.url)
const roadTrip = new URL('../../image/elements/road_trip.jpeg', import.meta.url)

export const initialElements = [
  {
    name: 'Поездка на море с досками',
    link: van
  },
  {
    name: 'Доброе утро',
    link: morning
  },
  {
    name: 'Свежий кофе у костра',
    link: coffe
  },
  {
    name: 'Вид из машины',
    link: viewFromVan
  },
  {
    name: 'Горное озеро',
    link: boat
  },
  {
    name: 'Подготовка к путешествию',
    link: roadTrip
  }
];
  
export const validationConfig = {

  inputSelector: '.popup__form-text',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_state_invalid',
  inputErrorClass: 'popup__form-text_state_invalid',
  errorClass: 'error_active'
}; 