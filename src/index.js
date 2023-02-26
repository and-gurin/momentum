import { showTime, showDate } from './js/clock.js';
import { playAudioClickHandler } from './js/audio-player.js';
import { showGreeting } from './js/greeting.js';
import { getQuote } from './js/quote.js';
import { setBg } from './js/slider.js';
import { getWeather } from './js/weather.js';
import { progressBarHandler } from './js/audio-player-progress.js';
import { openCloseSettings, showHideElements } from './js/settings.js';
import { changeLanguage, lang } from './js/translation.js';
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
    showGreeting();

    //show qoute
    getQuote(lang);

    //img-slider
    setBg();

    //weather
    getWeather(lang);

    //settings
    openCloseSettings();
    showHideElements();

    //language
    changeLanguage();
}