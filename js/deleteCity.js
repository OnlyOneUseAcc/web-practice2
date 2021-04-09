function deleteCity(obj) {
    let id = obj.parentElement.parentElement.id;
    citiesFromStorage.splice(Number(id), 1);
    updateStorage();
    obj.parentElement.parentElement.remove();
    let cities = document.querySelectorAll('.sectionCity');
    for (let i = 0; i < cities.length; i++) {
        cities[i].id = i.toString();
    }
    if (citiesFromStorage.length === 0) {
        localStorage.removeItem('favorites');
    }
}