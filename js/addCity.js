async function addCity() {
    let input = document.querySelector('.search').value;
    if (input !== '') {
        let data = await fetchWeather(input);
        if (data.cod === '404') {
            alert('Город не найден');
        } else {
            let id = data.id.toString();
            if (citiesFromStorage.indexOf(id) === -1) {
                let sectionID = citiesFromStorage.length.toString();
                loading(sectionID);
                citiesFromStorage.push(id);
                await sleep(1000).then(() => { printOtherCity(data, sectionID) });
                updateStorage();
            } else {
                alert('Город уже существует!');
            }
        }
        document.querySelector('input').value = '';
    }
}

function updateStorage() {
    let key = 'favorites';
    let value = citiesFromStorage.join();
    localStorage.setItem(key, value);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}