import { weather, placeholders, greeting } from "./translation.js";

const greetingInput = document.querySelector('.name');
const greetingtitle = document.querySelector('.greeting__welcome');
const cityInput = document.querySelector('.city');

export function showGreeting (lang) {
    greetingtitle.textContent = getTimeOfDay(lang);
    setTimeout(showGreeting, 1000*60);
}

function getTimeOfDay(lang) {
    const hours = new Date().getHours();
    return  Math.floor(hours / 6) < 1 ? `${greeting[lang][0]}`:
    Math.floor(hours / 6) < 2 ? `${greeting[lang][1]}`: 
    Math.floor(hours / 6) < 3 ? `${greeting[lang][2]}`:
    Math.floor(hours / 6) < 4 ? `${greeting[lang][3]}`: null
}

export function translatePlaceholders (lang) {
  greetingInput.setAttribute('placeholder', placeholders[lang].name);
  cityInput.setAttribute('placeholder', placeholders[lang].city);
}

function setLocalStorage() {
    localStorage.setItem('name', greetingInput.value);
}

window.addEventListener('beforeunload', setLocalStorage)

function getLocalStorage() {
  if(localStorage.getItem('name')) {
    greetingInput.value = localStorage.getItem('name');
  }
}
window.addEventListener('load', getLocalStorage)