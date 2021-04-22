const prefixServer = 'http://localhost:3000';
const CoordsServer = `${prefixServer}/weather/coordinates`;
const NameServer = `${prefixServer}/weather/city`;
const FavoritesServer = `${prefixServer}/favorites`;

async function fetchCityByCoords(lat, lon) {
    try {
        let data = await fetch(`${CoordsServer}?lat=${lat}&lon=${lon}`);
        return data.json();
    } catch (e) {
        console.log(e);
    }
}

async function fetchCityByName(name) {
    try {
        let data = await fetch(`${NameServer}?q=${name}`);
        return data.json();
    } catch (e) {
        console.log(e);
    }
}

async function fetchAdd(name) {
    let data = await fetch(`${FavoritesServer}?q=${name}`, {method: "POST"});
    if (data.status === 201) {
        return await data.json();
    }

    if (data.status === 409) {
        return false;
    }
    throw new Error(`Status ${data.status}`);
}

async function fetchDelete(name) {
    let data = await fetch (`${FavoritesServer}?q=${name}`, {method: "DELETE"});

    if (data.status !== 204) {
        throw new Error(`Status ${data.status}`);
    }
}

async function fetchGetCities() {
    let response = await fetch(FavoritesServer);
    if (response.status === 200) {
        return response.json();
    }
    throw new Error(`Status ${data.status}`);
}