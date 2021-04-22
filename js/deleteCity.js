function deleteCity(obj) {
    try {
        fetchDelete(obj.parentElement.querySelector("h3").textContent)
            .then(obj.parentElement.parentElement.remove());
    } catch (e) {
        console.log(e);
    }
}