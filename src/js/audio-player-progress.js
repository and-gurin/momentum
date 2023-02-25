import { audio } from './audio-player.js';

const progressBar = document.querySelector('#progress-bar');
const volumeButton = document.querySelector('.volume-button');
const volumeEl = document.querySelector('.volume');
const volumeSlider = document.querySelector('.volume-slider');
const volumePercentage = document.querySelector('.volume-percentage');
const currentTime = document.querySelector('.currentTime');
const durationTime = document.querySelector('.durationTime');

export function progressBarHandler () {
    setInterval(updateProgressValue, 500);
    progressBar.addEventListener('change', changeProgressBar);
    volumeSlider.addEventListener('click', volumeSliderChangeHandler, false)
    volumeButton.addEventListener('click', volumeButtonClickHandler);
}

function updateProgressValue() {
    if (audio.currentTime) {
        progressBar.max = audio.duration;
        progressBar.value = audio.currentTime;
        currentTime.innerHTML = (formatTime(Math.floor(audio.currentTime)));
        durationTime.innerHTML = (formatTime(Math.floor(audio.duration)));
    }
    
};

function formatTime(seconds) {
    let min = Math.floor((seconds / 60));
    let sec = Math.floor(seconds - (min * 60));
    if (isNaN(min)) min = '00';
    if (isNaN(sec)) sec = '00';
    return `${min}:${String(sec).padStart(2, '0')}`;
};

function changeProgressBar(e) {
    audio.currentTime = e.target.value;
};

function volumeSliderChangeHandler (e) {
    const sliderWidth = window.getComputedStyle(volumeSlider).width;
    const newVolume = e.offsetX / parseInt(sliderWidth);
    audio.volume = newVolume;
    volumePercentage.style.width = newVolume * 100 + '%';
}

function volumeButtonClickHandler () {
    audio.muted = !audio.muted;
    const iconVolumeMedium = 'icono-volumeMedium';
    const iconVolumeMute = 'icono-volumeMute';
    if (audio.muted) {
        volumeEl.classList.remove(iconVolumeMedium);
        volumeEl.classList.add(iconVolumeMute);
    } else {
        volumeEl.classList.add(iconVolumeMedium);
        volumeEl.classList.remove(iconVolumeMute);
    }
}