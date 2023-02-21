const playButton = document.querySelector('.icon_play');
let isPlay = false;
const audio = new Audio();

playButton.addEventListener('click', playAudio);

function playAudio () {
    audio.src = '../../src/assets/sounds/Summer Wind.mp3';
    if (!isPlay) {
        audio.play();
        isPlay = true;
        playButton.classList.add('pause')
    } 
    else {
        audio.pause();
        isPlay = false;
        playButton.classList.remove('pause')
    }
}

