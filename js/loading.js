function loading(id) {
    let cities = document.querySelector('.cities');
    let template = document.querySelector('.templateCity');
    template.content.querySelector('.sectionCity').setAttribute('id', id);
    let clone = document.importNode(template.content, true);
    cities.append(clone);
}