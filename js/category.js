let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let categoria = queryStringObj.get("categoria");

let tituloCategoria = document.querySelector(".categoria_titulo");
let seccionCategoria = document.querySelector(".categoria_productos");

tituloCategoria.innerText = `Categoría: ${categoria}`;

fetch(`https://dummyjson.com/products/category/${categoria}`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let productos = data.products;
        let listado = "";

        for (let i = 0; i < productos.length; i++) {
            listado += `<article class="index_autos">
                            <img src="${productos[i].thumbnail}" alt="${productos[i].title}">
                            <h3>${productos[i].title}</h3>
                            <p>${productos[i].description}</p>
                            <p class="precio">Precio: USD ${productos[i].price}</p>
                            <a href="./product.html?id=${productos[i].id}">Ver detalle</a>
                        </article>`;
        }

        seccionCategoria.innerHTML = listado;
    })
    .catch(function (error) {
        console.log("El error es: " + error);
    });