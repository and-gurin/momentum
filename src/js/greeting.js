
const greeting = document.querySelector('.greeting__welcome');

export function showGreeting () {
    greeting.textContent = getTimeOfDay();
    setTimeout(showGreeting, 1000*60);
}

function getTimeOfDay() {
    const dayHours = ['night', 'morning', 'afternoon', 'evening'];
    const hours = new Date().getHours();
    return  Math.floor(hours / 6) < 1 ? `Good ${dayHours[0]}`:
    Math.floor(hours / 6) < 2 ? `Good ${dayHours[1]}`: 
    Math.floor(hours / 6) < 3 ? `Good ${dayHours[2]}`:
    Math.floor(hours / 6) < 4 ? `Good ${dayHours[0]}`: null
}

const input = document.querySelector('.name')

function setLocalStorage() {
    localStorage.setItem('name', input.value);
}

window.addEventListener('beforeunload', setLocalStorage)

function getLocalStorage() {
  if(localStorage.getItem('name')) {
    input.value = localStorage.getItem('name');
  }
}
window.addEventListener('load', getLocalStorage)