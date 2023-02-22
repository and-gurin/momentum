import { showTime, showDate } from "./js/clock.js";
import { playAudioClickHandler } from "./js/audio-player.js";
import { showGreeting } from "./js/greeting.js";
import { getQuote } from "./js/quote.js";
import { setBg } from "./js/slider.js";
import { getWeather } from "./js/weather.js"


window.onload = function () {
    console.log('Hello AG')

    //play pause audio
    playAudioClickHandler();

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