window.onload = function () {

    showTime();
}

const clock = document.querySelector('.time__clock');
const date = document.querySelector('.time__date');

export function showTime () {
    const currentTime = new Date().toLocaleTimeString();
    clock.textContent = currentTime;
    showDate();
    setTimeout(showTime, 1000);
}

export function showDate () {
    const options = {weekday: 'long', day: 'numeric',month: 'long'};
    const currentDate = new Date().toLocaleDateString('En-en', options);
    date.textContent = 
    `${currentDate[0].toUpperCase()}${currentDate.split(' ')[0].slice(1)} ${currentDate.split(' ')[1]} ${currentDate.split(' ')[2][0].toUpperCase() + currentDate.split(' ')[2].slice(1)}`;
    console.log(currentDate)
}

