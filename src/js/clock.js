import { locale } from './translation.js';

const clock = document.querySelector('.time');
const date = document.querySelector('.date');

export let timer

export function showTime (lang) {
    const currentTime = new Date().toLocaleTimeString();
    clock.textContent = currentTime;
    showDate(lang);
    timer = setTimeout(showTime, 1000);
}

export function showDate (lang='en') {
    const options = {weekday: 'long', day: 'numeric',month: 'long'};
    const currentDate = new Date().toLocaleDateString(locale[lang], options);
    date.textContent = 
    `${currentDate[0].toUpperCase()}${currentDate.split(' ')[0].slice(1)} ${currentDate.split(' ')[1]} ${currentDate.split(' ')[2][0].toUpperCase() + currentDate.split(' ')[2].slice(1)}`;
}
