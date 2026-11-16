let formRegister = document.querySelector(".form_register");
let campoMail = document.querySelector("#MailUsuario");
let campoContra = document.querySelector("#ContrasenaUsuario");
let campoRepetir = document.querySelector("#ContraUsuario");
let feedbackMail = document.querySelector(".feedback_mail");
let feedbackContra = document.querySelector(".feedback_contra");
let feedbackRepetir = document.querySelector(".feedback_repetir");

formRegister.addEventListener("submit", function (event) {
    event.preventDefault();

    let hayErrores = false;
    feedbackMail.innerText = "";
    feedbackContra.innerText = "";
    feedbackRepetir.innerText = "";

    if (campoMail.value === "") {
        feedbackMail.innerText = "El email es obligatorio";
        hayErrores = true;
    }

    if (campoContra.value === "") {
        feedbackContra.innerText = "La contraseña es obligatoria";
        hayErrores = true;
    } else if (campoContra.value.length < 6) {
        feedbackContra.innerText = "La contraseña debe tener al menos 6 caracteres";
        hayErrores = true;
    }

    if (campoContra.value !== campoRepetir.value) {
        feedbackRepetir.innerText = "Las contraseñas no coinciden";
        hayErrores = true;
    }

    if (hayErrores === false) {
        this.submit();
    }
});