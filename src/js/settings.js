import { setting } from './translation.js';

const settingsBlock = document.querySelector('.settings');
const settingsBtn = document.querySelector('.icon-settings');
const checkBoxsList = document.querySelectorAll('.checkbox__input');
const labelsList = document.querySelectorAll('.checkbox__label');
const titleLangSelect = document.querySelector('.select-group__title-language');
const titleFotoSelect = document.querySelector('.select-group__title-photo');
const titleTagSelect = document.querySelector('.select-group__title-tag');
const ruLangOption = document.querySelector('option[value="ru"]');
const enLangOption = document.querySelector('option[value="en"]');

let isOpen = false;

export const openCloseSettings = () => {
  settingsBtn.addEventListener('click', () => {
    settingsBlock.style.transform = isOpen ? `translateX(-120%)` : `translateX(0)`;
  isOpen = !isOpen
  })
};

export const setUpEventListenersForSettings = () => {
  checkBoxsList.forEach(item => {
    item.addEventListener('click', (event) => {
      const element = document.querySelector(`.${event.target.name}`);
      if (event.target.checked) {
        element.classList.remove('hide');
        element.classList.add('show');
        localStorage.setItem(event.target.name, 'on');
      } else {
        element.classList.remove('show');
        element.classList.add('hide');
        localStorage.setItem(event.target.name, 'off');
      }
    })
  });
};

export const setSettingsData = (lang) => {
  labelsList.forEach(item => {
    item.textContent = setting[lang][`elements-${item.htmlFor}`];
  });
  titleLangSelect.textContent = setting[lang]['change-lang'];
  titleFotoSelect.textContent = setting[lang]['change-photo'];
  titleTagSelect.textContent = setting[lang]['change-theme']
  ruLangOption.textContent = setting[lang].russian;
  enLangOption.textContent = setting[lang].english;
}

