const body = document.querySelector('body');
const sliderPrew = document.querySelector('.icon-slider_prew');
const sliderNext = document.querySelector('.icon-slider_next')
let randomNum;


function getRandomNum(max) {
    randomNum = Math.floor(Math.random() * max);
  return randomNum === 0 ? randomNum : randomNum
}

getRandomNum(20);

function getSlideNext() {
    randomNum++;
    if(randomNum > 20) randomNum = 1;
    console.log(randomNum)
    setBg()
}

sliderPrew.addEventListener('click', getSlidePrew)

function getSlidePrew() {
    randomNum--;
    if(randomNum < 1) randomNum = 20;
    console.log(randomNum)
    setBg()
}

sliderNext.addEventListener('click', getSlideNext)

function getTimeOfDay() {
    const dayHours = ['night', 'morning', 'afternoon', 'evening'];
    const hours = new Date().getHours();
    return  Math.floor(hours / 6) < 1 ? `${dayHours[0]}`:
    Math.floor(hours / 6) < 2 ? `${dayHours[1]}`: 
    Math.floor(hours / 6) < 3 ? `${dayHours[2]}`:
    Math.floor(hours / 6) < 4 ? `${dayHours[0]}`: null
}

function setBg() {
    let bgNum = String(randomNum).padStart(2, "0");
    let timeOfDay = getTimeOfDay();
    let img = new Image();
    img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`
    img.onload = ()=> {
        body.style.backgroundImage = `url(${img.src})`
    } 
}

setBg();