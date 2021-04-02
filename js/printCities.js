function printMainCity(data) {
    let city = document.querySelector('.city');

    city.querySelector('h2').innerHTML = data.name;
    city.querySelector('img').src = "http://openweathermap.org/img/wn/"
        + data.weather[0].icon + "@4x.png";
    city.querySelector('.currentCity p').innerHTML = Math.floor(data.main.temp) + "°C";
    city.querySelector(".cityList .feels-like").innerHTML = Math.floor(data.main.feels_like) + "°C";
    city.querySelector(".cityList .wind").innerHTML = Math.floor(data.wind.speed) + " м/с";
    city.querySelector(".cityList .pressure").innerHTML = data.main.pressure + " hPa";
    city.querySelector(".cityList .humidity").innerHTML = data.main.humidity + "%";
    city.querySelector(".cityList .coords").innerHTML = "[" + data.coord.lon.toFixed(4)
        + ", " + data.coord.lat.toFixed(4) + "]";
}

function printCity(data, id) {
    let city = document.getElementById(id);

    city.querySelector('.headerCity h3').innerHTML = data.name;
    city.querySelector('.headerCity img').src = "http://openweathermap.org/img/wn/"
        + data.weather[0].icon + "@4x.png";
    city.querySelector('.headerCity p').innerHTML = Math.floor(data.main.temp) + "°C";
    city.querySelector(".otherList .feels-like").innerHTML = Math.floor(data.main.feels_like) + "°C";
    city.querySelector(".otherList .wind").innerHTML = Math.floor(data.wind.speed) + " м/с";
    city.querySelector(".otherList .pressure").innerHTML = data.main.pressure + " hPa";
    city.querySelector(".otherList .humidity").innerHTML = data.main.humidity + "%";
    city.querySelector(".otherList .coords").innerHTML = "[" + data.coord.lon.toFixed(4)
        + ", " + data.coord.lat.toFixed(4) + "]";
}