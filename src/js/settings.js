import { setting } from './translation.js'

const settings = document.querySelector('.settings');
const settingsBtn = document.querySelector('.icon_settings');
const elementsList = document.querySelectorAll('.block input');
const elementsListText = document.querySelectorAll('.block label');
const textCahngeLang = document.querySelector('.title__language');
const textChangePhoto = document.querySelector('.title__photo');
const ruLang = document.querySelector('option[value="ru"]');
const enLang = document.querySelector('option[value="en"]');

let isOpen = false;

export const openCloseSettings = () => {
  settingsBtn.addEventListener('click', () => {
    if (isOpen === false) {
      isOpen = true;
      settings.style.transform = `translateX(0)`;
    } else if (isOpen === true) {
      isOpen = false;
      settings.style.transform = `translateX(-120%)`;
    }
  })
};

export const showHideElements = () => {
  elementsList.forEach(item => {
    item.addEventListener('click', (event) => {
        console.log(event.target.name)
      if (event.target.checked) {
        const element = document.querySelector(`.${event.target.name}`);
        
        element.classList.remove('hide');
        element.classList.add('show');
        localStorage.setItem(event.target.name, 'on');
      } else {
        const element = document.querySelector(`.${event.target.name}`);
        element.classList.remove('show');
        element.classList.add('hide');
        localStorage.setItem(event.target.name, 'off');
      }
    })
  });
};

export const setSettingsData = (lang) => {
//   elementsList.forEach(item => {
//     if (localStorage.getItem(item.name) == 'off') {
//       const element = document.querySelector(`.${item.name}`);
//       element.classList.add('hide');
//       item.checked = false;
//     }
//   });
  elementsListText.forEach(item => {
    item.textContent = setting[lang][`elements-${item.htmlFor}`];
  });
  textCahngeLang.textContent = setting[lang]['change-lang'];
  textChangePhoto.textContent = setting[lang]['change-photo'];
  ruLang.textContent = setting[lang].russian;
  enLang.textContent = setting[lang].english;
}