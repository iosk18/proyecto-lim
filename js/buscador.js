let formulario = document.querySelector('.busqueda');
let campo = document.querySelector('.busqueda input');

formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    if (campo.value === "") {
        alert("Escribí algo para buscar");
    } else {
        if (campo.value.length < 3) {
            alert("Escribí al menos 3 caracteres");
        } else {
            this.submit();
        }
    }
});