let formLogin = document.querySelector(".form_login");
let campoEmail = document.querySelector("#MailUsuario");
let campoContrasena = document.querySelector("#ContrasenaUsuario");
let feedbackEmail = document.querySelector(".feedback_email");
let feedbackContrasena = document.querySelector(".feedback_contrasena");

formLogin.addEventListener("submit", function (event) {
    event.preventDefault();

    let hayErrores = false;
    feedbackEmail.innerText = "";
    feedbackContrasena.innerText = "";

    if (campoEmail.value === "") {
        feedbackEmail.innerText = "El email es obligatorio";
        hayErrores = true;
    }

    if (campoContrasena.value === "") {
        feedbackContrasena.innerText = "La contraseña es obligatoria";
        hayErrores = true;
    } else if (campoContrasena.value.length < 6) {
        feedbackContrasena.innerText = "La contraseña debe tener al menos 6 caracteres";
        hayErrores = true;
    }

    if (hayErrores === false) {
        localStorage.setItem("email", campoEmail.value);
        this.submit();
    }
});