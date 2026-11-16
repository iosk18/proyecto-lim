let emailGuardado = localStorage.getItem("email");
let saludo = document.querySelector(".saludo");
let linkLogout = document.querySelector(".logout");
let linkLogin = document.querySelector(".login");
let linkRegister = document.querySelector(".register");

if (emailGuardado !== null) {
    saludo.innerText = `Bienvenido: ${emailGuardado}`;
    saludo.style.display = "block";
    linkLogout.style.display = "block";
    linkLogin.style.display = "none";
    linkRegister.style.display = "none";
}