function deleteCity(obj) {
    let id = obj.parentElement.parentElement.id;
    console.log(obj.parentElement.parentElement);
    window.localStorage.removeItem(id);
    obj.parentElement.parentElement.remove();
}