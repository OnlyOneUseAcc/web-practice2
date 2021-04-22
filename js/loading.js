function loading() {
    let cities = document.querySelector('.cities');
    let template = document.querySelector('.templateCity');
    let clone = document.importNode(template.content, true);
    cities.append(clone);
    return cities.lastElementChild;
}