import { weather, lang } from './translation.js';

const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.weather__temperature');
const weatherDescription = document.querySelector('.weather__description');
const wind = document.querySelector('.weater__wind');
const humidity = document.querySelector('.weather__humidity');
const city = document.querySelector('.city');

export async function getWeather(lang, city = localStorage.getItem('city') ? localStorage.getItem('city') : 'Minsk') {  
    weatherIcon.className = 'weather-icon owf';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=${lang}&appid=f793b145b04b72ffdfd775747be4fac1&units=metric`;
    try {
        const res = await fetch(url);
        const data = await res.json(); 

        weatherIcon.classList.add(`owf-${data.weather[0].id}`);
        temperature.textContent = `${Math.round(data.main.temp)} °C`;
        weatherDescription.textContent = `${data.weather[0].description}`;
        wind.textContent = `${weather[lang].wind}: ${Math.round(data.wind.speed)} ${weather[lang].wind_units}`;
        humidity.textContent = `${weather[lang].humidity}: ${data.main.humidity} %`;
    } catch {
        temperature.textContent = '';
        wind.textContent = '';
        humidity.textContent = '';
        weatherDescription.textContent = 'Data loading error. Enter the city again';
    }
}

function setLocalStorage() {
    localStorage.setItem('city', city.value);
}

function getLocalStorage () {
    localStorage.getItem('city')
}

window.addEventListener('beforeunload', setLocalStorage);

city.value = localStorage.getItem('city') ? localStorage.getItem('city') : 'Minsk'

window.addEventListener('load', getLocalStorage)

city.addEventListener('change', (e)=>{
    getWeather(lang, city.value);
    localStorage.setItem('city', e.target.value)
})