let menu = document.querySelector('.menu_vertical');

fetch('https://dummyjson.com/products/categories')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let categorias = '';

        for (let i = 0; i < data.length; i++) {
            categorias += `<li><a href="./category.html?categoria=${data[i].slug}">${data[i].name}</a></li>`;
        }

        menu.innerHTML = categorias;
    })
    .catch(function (error) {
        console.log(error);
    });

    