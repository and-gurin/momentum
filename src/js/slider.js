const body = document.querySelector('body');
const sliderPrew = document.querySelector('.icon-slider_prew');
const sliderNext = document.querySelector('.icon-slider_next');
const photoSelect = document.querySelector('.select-group__select-photo');
const tagSelect = document.querySelector('.select-group__select-tag');

const apiKeyFlicr = 'c8df835955fdffeba282db75503e8f10';
const apiKeyUnsplash = 'n6xOqe2zu-sbnT-6QBrQ2Lf5dJNIavTvLN_doll6D8E';

let randomNum;
let img = new Image();

function getRandomNum(max) {
    return randomNum = Math.floor(Math.random() * max + 1);
}

getRandomNum(20);

function getSlideNext() {
    randomNum++;
    if(randomNum > 20) randomNum = 1;
    setBg()
}

sliderPrew.addEventListener('click', getSlidePrew)

function getSlidePrew() {
    randomNum--;
    if(randomNum < 1) randomNum = 20;
    setBg()
}

sliderNext.addEventListener('click', getSlideNext)

function getTimeOfDay() {
    const dayHours = ['night', 'morning', 'afternoon', 'evening'];
    const hours = new Date().getHours();
    return  Math.floor(hours / 6) < 1 ? `${dayHours[0]}`:
    Math.floor(hours / 6) < 2 ? `${dayHours[1]}`: 
    Math.floor(hours / 6) < 3 ? `${dayHours[2]}`:
    Math.floor(hours / 6) < 4 ? `${dayHours[3]}`: null
}

export async function setBg () {
    let bgNum = String(randomNum).padStart(2, "0");
    let timeOfDay = getTimeOfDay();
    let photoTag = tagSelect.value;

    const urlFlickr = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKeyFlicr}&tags=${photoTag}&extras=url_l&format=json&nojsoncallback=1`;
    const urlUnsplash = `https://api.unsplash.com/photos/random?orientation=landscape&query=${photoTag}&client_id=${apiKeyUnsplash}`
    
    try {
        const flicrRes = await fetch(urlFlickr);
        const flickrData = await flicrRes.json();

        const unsplashRes = await fetch(urlUnsplash);
        const unsplashData = await unsplashRes.json();

        img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`

        if (photoSelect.value === 'unsplash') {
        img.src = await unsplashData.urls.regular;
        }
        if (photoSelect.value === 'flickr') {
        img.src = await flickrData.photos.photo[randomNum].url_l;
        } 
        else {
        img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`
        }

        img.onload = ()=> {
            body.style.backgroundImage = `url(${img.src})`
        } 
    } catch {
        img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`
    }
}
photoSelect.addEventListener('change', setBg);
tagSelect.addEventListener('change', setBg);