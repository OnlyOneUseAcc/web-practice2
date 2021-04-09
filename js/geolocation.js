async function setPosition(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;

    printMainCity(await fetchByPosition(lat, lon));
}