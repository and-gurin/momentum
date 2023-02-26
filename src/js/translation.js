import { setSettingsData } from './settings.js';
import { getQuote } from './quote.js';
import { getWeather } from './weather.js'
import { showDate, showTime, timer } from './clock.js';

export const weather = {
  'en': {
    'lang': 'en',
    'wind': 'Wind speed',
    'wind_units': 'm/s',
    'humidity': 'Humidity',
    'err': 'Data loading error. Enter the city again',
    'city': 'Minsk',
  },
  'ru': {
    'lang': 'ru',
    'wind': 'Скорость ветра',
    'wind_units': 'м/с',
    'humidity': 'Влажность',
    'err': 'Ошибка загрузки данных. Введите город еще раз',
    'city': 'Минск'
  },
};

export const placeholders = {
  'ru': {
    'name':'[Укажите имя]',
    'city': '[Укажите город]'
  },
  'en': {
    'name': '[Enter name]',
    'city': '[Enter city]'
  },
};

export const setting = {
  'ru': {
    'change-lang': 'Выбрать язык',
    'russian': 'русский',
    'english': 'английский',
    'change-photo': 'Выбрать фон',
    'change-theme': 'Выбрать тему фона',
    'text-show"': 'Показать',
    'elements-date': 'дата',
    'elements-time': 'время',
    'elements-weather': 'погода',
    'elements-greeting': 'приветствие',
    'elements-quotes': 'цитаты',
    'elements-audio': 'плеер',
    'elements-todo': 'список дел',
  },
  'en': {
    'change-lang': 'Choose language',
    'russian': 'russian',
    'english': 'english',
    'change-photo': 'Choose Photo Source',
    'change-theme': 'Choose Background Theme',
    'text-show"': 'Show',
    'elements-date': 'date',
    'elements-time': 'time',
    'elements-weather': 'weather',
    'elements-greeting': 'greeting',
    'elements-quotes': 'quotes',
    'elements-audio-player': 'audio',
    'elements-todo': 'todo',
  }
};

export const locale = {
  'ru': 'ru-RU',
  'en': 'en-US'
};

export const quotes = {
  'ru': './quote-ru.json',
  'en': './quote-en.json'
};

export const languages = [
  'ru',
  'en',
];

export const greeting = {
  'en': ['Good night,', 'Good morning,', 'Good afternoon,', 'Good evening,'],
  'ru': ['Доброй ночи,', 'Доброе утро,', 'Добрый день,', 'Добрый вечер,']
};

const language = document.querySelector('.language');

export const lang = (localStorage.getItem('language') && languages.includes(getLocalStorage('language'))) ? localStorage.getItem('language') : languages[1];


export const changeLanguage = () => {
  setSettingsData(language.value);
  language.addEventListener('change', () => {
    localStorage.setItem('language', language.value)
    getQuote(language.value);
    clearTimeout(timer);
    //showDate(language.value);
    showTime(language.value);
    getWeather(language.value);
    setSettingsData(language.value);
  })
};

function setLocalStorage() {
    localStorage.setItem('language', language.value);
}

function getLocalStorage () {
    localStorage.getItem('language')
}

window.addEventListener('beforeunload', setLocalStorage);

language.value = getLocalStorage('language') || 'en';

window.addEventListener('load', getLocalStorage);

