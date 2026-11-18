let titulo = document.querySelector('.titulo_busqueda');
let resultados = document.querySelector('.resultados');

let queryString = location.search;
let params = new URLSearchParams(queryString);
let termino = params.get('busqueda');

titulo.innerText = 'Resultados de búsqueda para: ' + termino;

fetch('https://dummyjson.com/products/search?q=' + termino)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        if (data.products.length === 0) {
            let aviso = '';
            aviso += '<div class="sin_resultados">';
            aviso += '<p>No hay resultados para el término: ' + termino + '</p>';
            aviso += '<a href="./index.html">Volver al inicio</a>';
            aviso += '</div>';
            resultados.innerHTML = aviso;
        } else {
            let productos = '';

            for (let i = 0; i < data.products.length; i++) {
                productos += '<article class="index_autos">';
                productos += '<img src="' + data.products[i].thumbnail + '" alt="' + data.products[i].title + '">';
                productos += '<h3>' + data.products[i].title + '</h3>';
                productos += '<p>' + data.products[i].description + '</p>';
                productos += '<p class="precio">USD ' + data.products[i].price + '</p>';
                productos += '<a href="./product.html?id=' + data.products[i].id + '">Ver detalle</a>';
                productos += '</article>';
            }

            resultados.innerHTML = productos;
        }
    })
    .catch(function (error) {
        console.log('Error: ' + error);
    });

    