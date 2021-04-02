function loading() {
    let cities = document.querySelector('.cities');
    let template = document.querySelector('.templateCity');
    template.content.querySelector('.sectionCity').setAttribute('id', '-1');
    let clone = document.importNode(template.content, true);
    cities.append(clone);
}