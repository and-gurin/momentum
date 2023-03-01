import { setSettingsData } from './settings.js';
import { getQuote } from './quote.js';
import { getWeather } from './weather.js'
import { showTime, timer } from './clock.js';
import { showGreeting } from './greeting.js';
import { translatePlaceholders } from './greeting.js';

export const weather = {
  'en': {
    'lang': 'en',
    'wind': 'Wind speed',
    'wind_units': 'm/s',
    'humidity': 'Humidity',
    'err': 'Data loading error',
    'city': 'Minsk',
  },
  'ru': {
    'lang': 'ru',
    'wind': 'Скорость ветра',
    'wind_units': 'м/с',
    'humidity': 'Влажность',
    'err': 'Ошибка загрузки данных',
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
    'change-photo': 'Выбрать ресурс фото',
    'change-theme': 'Выбрать тэг для фото',
    'text-show"': 'Показать',
    'elements-date': 'дата',
    'elements-time': 'время',
    'elements-weather': 'погода',
    'elements-greeting': 'приветствие',
    'elements-quotes': 'цитаты',
    'elements-audio-player': 'плеер',
    'elements-todo': 'список дел',
  },
  'en': {
    'change-lang': 'Change language',
    'russian': 'russian',
    'english': 'english',
    'change-photo': 'Change Photo Source',
    'change-theme': 'Change Photo Tag',
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

const language = document.querySelector('.select-group__select-language');
const languageFromLocalStorage = localStorage.getItem('language');

export const lang = (languageFromLocalStorage && languages.includes(languageFromLocalStorage)) ? languageFromLocalStorage : languages[1];


export const changeLanguage = () => {
  setSettingsData(language.value);
  language.addEventListener('change', (event) => {
    localStorage.setItem('language', event.target.value)
    getQuote(event.target.value);
    showGreeting(event.target.value)
    clearTimeout(timer);
    showTime(event.target.value);
    getWeather(event.target.value);
    setSettingsData(event.target.value);
    translatePlaceholders(event.target.value)
  })
};

window.addEventListener('beforeunload', localStorage.setItem('language', language.value));

language.value = languageFromLocalStorage || 'en';

window.addEventListener('load', () => languageFromLocalStorage);