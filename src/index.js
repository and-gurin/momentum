import { showTime } from './js/clock.js';
import { playAudioClickHandler } from './js/audio-player.js';
import { showGreeting } from './js/greeting.js';
import { getQuote } from './js/quote.js';
import { setBg } from './js/slider.js';
import { getWeather } from './js/weather.js';
import { progressBarHandler } from './js/audio-player-progress.js';
import { openCloseSettings, setUpEventListenersForSettings } from './js/settings.js';
import { changeLanguage, lang } from './js/translation.js';
import { openCloseTodo, setUpEventListenersForTodo } from './js/todo.js';
import './sass/style.scss';



window.onload = function () {

    window.addEventListener('load', () => setSettingsData(lang));

    //audio
    playAudioClickHandler();
    progressBarHandler();

    //show time and date
    showTime(lang);
    //showDate(lang)

    //show greeting
    showGreeting(lang);

    //show qoute
    getQuote(lang);

    //img-slider
    setBg();

    //weather
    getWeather(lang);

    //todoList
    openCloseTodo();
    setUpEventListenersForTodo();

    //settings
    openCloseSettings();
    setUpEventListenersForSettings();

    //language
    changeLanguage();
}