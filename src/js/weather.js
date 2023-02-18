const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.weather__temperature');
const weatherDescription = document.querySelector('.weather__description');
const wind = document.querySelector('.weater__wind');
const humidity = document.querySelector('.weather__humidity');
const city = document.querySelector('.city');

async function getWeather(city) {  
    weatherIcon.className = 'weather-icon owf';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&appid=f793b145b04b72ffdfd775747be4fac1&units=metric`;
    const res = await fetch(url);
    const data = await res.json(); 
    console.log(data.weather[0].id, data.weather[0].description, data.main.temp, data.name);

    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${Math.round(data.main.temp)}`;
    weatherDescription.textContent = `${data.weather[0].description}`;
    wind.textContent = `скорость ветра: ${data.wind.speed} м/c`;
    humidity.textContent = `влажность: ${data.main.humidity} %`;
}
getWeather('Минск')

city.addEventListener('change', ()=>{
    getWeather(city.value)
})