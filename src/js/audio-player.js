import playList from "./play-list.js"

const playButton = document.querySelector('.icon_play');
const playPrewButton = document.querySelector('.icon_prew-track');
const playNextButton = document.querySelector('.icon_next-track');
const playListContainer = document.querySelector('.audio-player__playlist');
let isPlay = true;
export const audio = new Audio(playList[0].src);
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