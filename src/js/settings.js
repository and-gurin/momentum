import { setting } from './translation.js'

const settingsBlock = document.querySelector('.settings');
const settingsBtn = document.querySelector('.icon_settings');
const checkBoxsList = document.querySelectorAll('.block input');
const labelsList = document.querySelectorAll('.block label');
const titleLangSelect = document.querySelector('.title__language');
const titleFotoSelect = document.querySelector('.title__photo');
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
  ruLangOption.textContent = setting[lang].russian;
  enLangOption.textContent = setting[lang].english;
}