let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let idProducto = queryStringObj.get("id");

let fotoProducto = document.querySelector(".producto_foto");
let nombreProducto = document.querySelector(".producto_nombre");
let marcaProducto = document.querySelector(".producto_marca");
let descripcionProducto = document.querySelector(".producto_descripcion");
let precioProducto = document.querySelector(".producto_precio");
let categoriaProducto = document.querySelector(".producto_categoria");
let stockProducto = document.querySelector(".producto_stock");
let tagsProducto = document.querySelector(".producto_tags");
let seccionReviews = document.querySelector(".reviews");


fetch(`https://dummyjson.com/products/${idProducto}`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {

        fotoProducto.src = data.images[0];
        fotoProducto.alt = data.title;
        nombreProducto.innerText = data.title;

        if (data.brand === undefined) {
            marcaProducto.innerText = "Sin marca";
        } else {
            marcaProducto.innerText = data.brand;
        }

        descripcionProducto.innerText = data.description;
        precioProducto.innerText = `USD ${data.price}`;

        categoriaProducto.innerText = data.category;
        categoriaProducto.href = `./category.html?categoria=${data.category}`;

        stockProducto.innerText = `${data.stock} unidades disponibles`;

        let tags = "";
        for (let i = 0; i < data.tags.length; i++) {
            if (i < 3) {
                tags += `<li>${data.tags[i]}</li>`;
            }
        }
        tagsProducto.innerHTML = tags;
        let reviews = "";
        for (let i = 0; i < data.reviews.length; i++) {
            reviews += `<article class="review">
                            <h3>Usuario: ${data.reviews[i].reviewerName}</h3>
                            <h4>Rating: ${data.reviews[i].rating}/5 | Fecha: ${data.reviews[i].date}</h4>
                            <p>Comentario: "${data.reviews[i].comment}"</p>
                        </article>`;
        }
        seccionReviews.innerHTML = reviews;
    })
    .catch(function (error) {
        console.log("El error es: " + error);
    });