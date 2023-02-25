import { showTime, showDate } from './js/clock.js';
import { playAudioClickHandler } from './js/audio-player.js';
import { showGreeting } from './js/greeting.js';
import { getQuote } from './js/quote.js';
import { setBg } from './js/slider.js';
import { getWeather } from './js/weather.js';
import { progressBarHandler } from './js/audio-player-progress.js';
import './sass/style.scss';


window.onload = function () {

    //audio
    playAudioClickHandler();
    progressBarHandler();

    //show time and date
    showTime();
    showDate();

    //show greeting
    showGreeting();

    //show qoute
    getQuote();

    //img-slider
    setBg();

    //weather
    getWeather('Минск');

}