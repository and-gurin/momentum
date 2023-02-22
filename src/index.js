import { showTime, showDate } from "./js/clock.js";
import { playAudioClickHandler } from "./js/audio-player.js"

window.onload = function () {

    //play pause audio
    playAudioClickHandler();

    //show time and date
    showTime();
    showDate();
}