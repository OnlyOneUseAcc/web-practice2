const key = "6810f239be5b9d8d966b74053e3cec20";
let url = `http://api.openweathermap.org/data/2.5/weather?units=metric&appid=${key}&`;

async function fetchByPosition(lat, lon) {
    return await fetch(`${url}lat=${lat}&lon=${lon}`).then(response =>
        response.json()).catch(e => console.log(e));
}

async function fetchWeather(name) {
    return await fetch(`${url}q=${name}`).then(response => response.json()).catch(e => console.log(e));
}

async function fetchWeatherByID(id) {
    return await fetch(`${url}id=${id}`).then(response => response.json()).catch(e => console.log(e));
}