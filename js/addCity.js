async function addCity() {
    let input = document.querySelector('.search').value;
    if (input !== '') {

        let city = loading();

        try {
            let data = await fetchAdd(input);
            if (data === false) {
                console.log("Город уже существует")
                city.remove();
                return;
            }
            printOtherCity(data, city);
        }
        catch (e) {
            console.log(e);
            city.remove();
            return;
        }

        document.querySelector('.search').value = '';
    }
}