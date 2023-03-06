import playList from './play-list.js'

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
    const icon = document.createElement('span')
    li.classList.add('play-item');
    icon.classList.add('icon_play_track');
    li.textContent = track.title;
    playListContainer.append(li);
    li.append(icon);
})

const playedTrack = document.querySelectorAll('.play-item');

function playNextTrack () {
    if (playNum < playList.length - 1) {
        playNum++;
        }
    else playNum = 0
    audio.src = playList[playNum].src
    isPlay = true;
    playedTrack.forEach((track, index) => {
        track.classList.remove('item-active');
        index === playNum ? track.classList.add('item-active') : 
        track.classList.remove('item-active')
    })
    playAudio()
}

function playPrewTrack () {
    if (playNum > 0) {
        playNum--;
        }
    else playNum = playList.length - 1;
    audio.src = playList[playNum].src
    isPlay = true;
    playedTrack.forEach((track, index) => {
        track.classList.remove('item-active');
        index === playNum ? track.classList.add('item-active') : 
        track.classList.remove('item-active')
    })
    playAudio() 
}

function playAudio () {
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

playedTrack.forEach((track, index)=>{
    
    track.addEventListener('click', ()=> {
        track.classList.remove('item-active');
        audio.src = playList[index].src;
        console.log(playList.indexOf(playList[index]))
        isPlay = true;
        if (index === playList.indexOf(playList[index])) {
            track.classList.add('item-active')
        } else {track.classList.remove('item-active')} 
        playAudio();
})
})


audio.addEventListener('ended', playNextTrack);