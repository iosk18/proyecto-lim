let botonLogout = document.querySelector(".logout");
let textoSaludo = document.querySelector(".saludo");
let menuLogin = document.querySelector(".login");
let menuRegister = document.querySelector(".register");

botonLogout.addEventListener("click", function (e) {
    e.preventDefault();
    localStorage.removeItem("email");

    textoSaludo.style.display = "none";
    this.style.display = "none";
    menuLogin.style.display = "block";
    menuRegister.style.display = "block";
});