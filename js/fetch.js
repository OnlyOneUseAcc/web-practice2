const key = "6810f239be5b9d8d966b74053e3cec20";
const url = "http://api.openweathermap.org/data/2.5/weather?";

async function fetchByPosition(lat, lon) {
    let api = url + "lat=" + lat + "&lon=" + lon +
        "&units=metric&lang=ru&appid=" + key;
    let response = await fetch(api);

    if (response.status.toString() === '200') {
        let data = await response.json();
        printMainCity(data);
    }
}

async function fetchWeather(name, id) {
    console.log(name, id);
    let api = url + "q=" + name +
        "&units=metric&lang=ru&appid=" + key;
    let response = await fetch(api);

    if (response.status.toString() === '200') {
        let data = await response.json();
        if (id === -111) {
            printMainCity(data);
        } else {
            printCity(data, id);
        }
    }
}