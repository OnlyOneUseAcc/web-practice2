let citiesFromStorage = [];

function getPosition() {
    navigator.geolocation.getCurrentPosition(position => setPosition(position),
        positionError => setDefault());
}

async function citiesFromLocalStorage() {
    if (localStorage.length !== 0) {
        citiesFromStorage = localStorage.getItem('favorites').split(',');
        Promise.all(citiesFromStorage).then(citiesFromStorage => citiesFromStorage.forEach(function (value, index) {
            loading(index);
        }));

        citiesFromStorage.forEach(function (value, index) {
            fetchWeatherByID(value).then(data => printOtherCity(data, index));
        })
    }
}



function pressEnter() {
    document.querySelector('.search').addEventListener('keypress',
        function (e) {
            if (e.key === 'Enter') {
                addCity();
            }
        });
}

async function setDefault() {
    let name = "Москва";

    printMainCity(await fetchWeather(name));
}

function updateGeolocation() {
    printLoading();
    getPosition();
}