function printMainCity(data) {
    let city = document.querySelector('.city');
    printCity(data, city);
}

function printOtherCity(data, city) {
    printCity(data, city);
}
function printCity(data, city) {
    city.querySelector('.name').innerHTML = data.name;
    city.querySelector('img').src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
    city.querySelector('.temp').innerHTML = `${Math.round(data.main.temp)}°C`;
    city.querySelector(".feels-like").innerHTML = `${Math.round(data.main.feels_like)}°C`;
    city.querySelector(".wind").innerHTML = `${Math.round(data.wind.speed)} м/с`;
    city.querySelector(".pressure").innerHTML = `${data.main.pressure} hPa`;
    city.querySelector(".humidity").innerHTML = `${data.main.humidity}%`
    city.querySelector(".coords").innerHTML = `[${data.coord.lon.toFixed(2)}, ${data.coord.lat.toFixed(2)}]`;
}

function printLoading() {
    let city = document.querySelector('.city');
    city.querySelector('.name').innerHTML = 'Загрузка...';
    city.querySelector('img').src = 'img/reload.svg';
    city.querySelector('.temp').innerHTML = '';
    city.querySelector('.feels-like').innerHTML = '';
    city.querySelector('.wind').innerHTML = '';
    city.querySelector('.humidity').innerHTML = '';
    city.querySelector('.pressure').innerHTML = '';
    city.querySelector('.coords').innerHTML = '';
}