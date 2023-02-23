import playList from "./play-list.js"

const playButton = document.querySelector('.icon_play');
const playPrewButton = document.querySelector('.icon_prew-track');
const playNextButton = document.querySelector('.icon_next-track');
const playListContainer = document.querySelector('.audio-player__playlist');
const progressBar = document.querySelector('#progress-bar');
let isPlay = true;
const audio = new Audio(playList[0].src);
let playNum = 0;

export function playAudioClickHandler () {
    playButton.addEventListener('click', playAudio);
    playNextButton.addEventListener('click', playNextTrack);
    playPrewButton.addEventListener('click', playPrewTrack);
}

playList.forEach((track)=>{
    const li = document.createElement('li');
    li.classList.add('play-item');
    li.textContent = track.title;
    playListContainer.append(li);
})

const playedTrack = document.querySelectorAll('.play-item');

function playNextTrack () {
    if (playNum < playList.length - 1) {
        playNum++;
        }
    else playNum = 0
    audio.src = playList[playNum].src
    isPlay = true;
    playAudio()
    console.log(playNum);
}

function playPrewTrack () {
    if (playNum > 0) {
        playNum--;
        }
    else playNum = playList.length - 1;
    audio.src = playList[playNum].src
    isPlay = true;
    playAudio()
    console.log(playNum);
}

function playAudio () {
    playedTrack.forEach((track, index)=>{
    index === playNum ? track.classList.add('item-active') : 
    track.classList.remove('item-active')
})
    if (isPlay) {
        audio.play();
        isPlay = false;
        playButton.classList.add('pause');
    } 
    else {
        audio.pause();
        isPlay = true;
        playButton.classList.remove('pause');
    }
}

audio.addEventListener('ended', playNextTrack);

function updateProgressValue() {
    progressBar.max = audio.duration;
    progressBar.value = audio.currentTime;
    document.querySelector('.currentTime').innerHTML = (formatTime(Math.floor(audio.currentTime)));
    if (document.querySelector('.durationTime').innerHTML === "NaN:NaN") {
        document.querySelector('.durationTime').innerHTML = "0:00";
    } else {
        document.querySelector('.durationTime').innerHTML = (formatTime(Math.floor(audio.duration)));
    }
};

function formatTime(seconds) {
    let min = Math.floor((seconds / 60));
    let sec = Math.floor(seconds - (min * 60));
    if (sec < 10){ 
        sec  = `0${sec}`;
    };
    return `${min}:${sec}`;
};

setInterval(updateProgressValue, 50);

function changeProgressBar() {
    audio.currentTime = progressBar.value;
};

progressBar.addEventListener('change', changeProgressBar);

const volumeSlider = document.querySelector(".volume-slider");
volumeSlider.addEventListener('click', e => {
  const sliderWidth = window.getComputedStyle(volumeSlider).width;
  const newVolume = e.offsetX / parseInt(sliderWidth);
  audio.volume = newVolume;
  document.querySelector(".volume-percentage").style.width = newVolume * 100 + '%';
}, false)

document.querySelector(".volume-button").addEventListener("click", () => {
  const volumeEl = document.querySelector(".volume-container .volume");
  audio.muted = !audio.muted;
  if (audio.muted) {
    volumeEl.classList.remove("icono-volumeMedium");
    volumeEl.classList.add("icono-volumeMute");
  } else {
    volumeEl.classList.add("icono-volumeMedium");
    volumeEl.classList.remove("icono-volumeMute");
  }
});