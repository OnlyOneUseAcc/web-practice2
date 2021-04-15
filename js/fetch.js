const key = "6810f239be5b9d8d966b74053e3cec20";
let url = `http://api.openweathermap.org/data/2.5/weather?units=metric&appid=${key}&`;

async function fetchByPosition(lat, lon) {
    try {
        let response = await fetch(`${url}lat=${lat}&lon=${lon}`);
        return response.json();
    } catch (e) {
        console.log(e);
    }
}

async function fetchWeather(name) {
    try {
        let response = await fetch(`${url}q=${name}`);
        return response.json();
    } catch (e) {
        console.log(e);
    }
}

async function fetchWeatherByID(id) {
    try {
        let response = await fetch(`${url}id=${id}`);
        return response.json();
    } catch (e) {
        console.log(e);
    }
}