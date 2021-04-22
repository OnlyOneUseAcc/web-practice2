function getPosition() {
    navigator.geolocation.getCurrentPosition(position => setPosition(position),
        positionError => setDefault());
}

async function citiesFromStorage() {
    try {
        let data = await fetchGetCities();
        for (let name of data.cities) {
            let city = loading();
            try {
                let data = await fetchCityByName(name);
                printOtherCity(data, city);
            } catch (e) {
                console.log(e);
                city.remove();
                return;
            }
        }
    } catch (e) {
        console.log(e);
    }
}

async function setDefault() {
    let name = "Москва";

    printMainCity(await fetchCityByName(name));
}

function updateGeolocation() {
    printLoading();
    getPosition();
}