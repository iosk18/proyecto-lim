let seccionCelulares = document.querySelector(".celulares");
let seccionDeportes = document.querySelector(".deportes");

fetch("https://dummyjson.com/products/category/smartphones?limit=10")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let productos = data.products;
        let celulares = "";

        for (let i = 0; i < productos.length; i++) {
            celulares += `<article class="index_autos">
                            <img src="${productos[i].thumbnail}" alt="${productos[i].title}">
                            <h3>${productos[i].title}</h3>
                            <p>${productos[i].description}</p>
                            <p class="precio">Precio: USD ${productos[i].price}</p>
                            <a href="./product.html?id=${productos[i].id}">Ver detalle</a>
                        </article>`;
        }

        seccionCelulares.innerHTML = celulares;
    })
    .catch(function (error) {
        console.log("El error es: " + error);
    });

fetch("https://dummyjson.com/products/category/sports-accessories?limit=10")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let productos = data.products;
        let deportes = "";

        for (let i = 0; i < productos.length; i++) {
            deportes += `<article class="index_autos">
                            <img src="${productos[i].thumbnail}" alt="${productos[i].title}">
                            <h3>${productos[i].title}</h3>
                            <p>${productos[i].description}</p>
                            <p class="precio">Precio: USD ${productos[i].price}</p>
                            <a href="./product.html?id=${productos[i].id}">Ver detalle</a>
                        </article>`;
        }

        seccionDeportes.innerHTML = deportes;
    })
    .catch(function (error) {
        console.log("El error es: " + error);
    });