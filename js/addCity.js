async function addCity() {
    if (document.querySelector('.search').value !== "") {
        let city = document.querySelector('.search').value;
        let api = url + "q=" + city + "&units=metric&lang=ru&appid=" + key;

        let response = await fetch(api);

        if (response.status.toString() === '200') {
            let data = await response.json();

            let notErrors = true;
            for (let i = 0; i < window.localStorage.length; i++) {
                if (data.name === window.localStorage.getItem(i)) {
                    alert("Город существует");
                    notErrors = false;
                }
            }

            if (notErrors) {
                loading();
                let keys = Object.keys(window.localStorage);
                let id;
                if (window.localStorage.length === 0) {
                    id = 0;
                    window.localStorage.setItem(id, city);
                } else {
                    id = Math.max.apply(null, keys) + 1;
                    window.localStorage.setItem(id, city);
                }
                document.getElementById('-1').id = id;

                printCity(data, id);
            }
        } else {
            alert('Города не существует');
        }
        document.querySelector('.search').value = "";
    }
}