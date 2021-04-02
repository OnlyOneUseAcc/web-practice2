function getPosition() {
    navigator.geolocation.getCurrentPosition(position => setPosition(position),
        positionError => setDefault());
}

async function citiesFromLocalStorage() {
    let keys = Object.keys(window.localStorage);

    for (let key of keys) {
        let city = window.localStorage.getItem(key);

        loading();

        document.getElementById('-1').id = key;

        await fetchWeather(city, key);
    }
}

function pressEnter() {
    document.querySelector('.search').addEventListener('keypress',
        function (e) {
            if (e.key === 'Enter' && document.querySelector('.search').value !== "") {
                addCity();
            }
        });
}

async function setDefault() {
    let name = "Москва";
    let id = -111;
    await fetchWeather(name, id);
}

function updateGeolocation() {
    document.querySelector('.currentCity h2').innerHTML = 'Загрузка...';
    document.querySelector('.currentCity img').src = 'image/reload.svg';
    document.querySelector('.currentCity p').innerHTML = "";

    document.querySelector(".cityList .feels-like").innerHTML = "";
    document.querySelector(".cityList .wind").innerHTML = "";
    document.querySelector(".cityList .pressure").innerHTML = "";
    document.querySelector(".cityList .humidity").innerHTML = "";
    document.querySelector(".cityList .coords").innerHTML = "";

    navigator.geolocation.getCurrentPosition(position => setPosition(position),
        positionError => setDefault());
}