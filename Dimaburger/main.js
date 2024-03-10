let registEmail = document.getElementById ("registerEmail");
let validaRegistroDiv = document.getElementById("validaRegistro");
let contraseña = document.getElementById ("registerPassword");
let validaContraseñaDiv = document.getElementById("validaContraseña");
let repitContraseña = document.getElementById ("registerRepeatPassword");
let validaConfirmacionDiv = document.getElementById("validaConfirmacion");

registEmail.onkeyup = () => {

    if (registEmail.value.length > 0){ 
        if (validaEmail(registEmail.value)) {
        validaRegistroDiv.className = "my-3 p-3 border border-success text-success";
        validaRegistroDiv.innerHTML = "Es una direccion de email valida!"
        } else {
        validaRegistroDiv.className = "my-3 p-3 border border-danger text-danger";
        validaRegistroDiv.innerHTML = "No es una direccion de email valida!"
        }
    } else{
        validaRegistroDiv.className = "";
        validaRegistroDiv.innerHTML = "";
    }
}
contraseña.onkeyup = () => {

    if (contraseña.value.length > 0){ 
        if (validaContraseña(contraseña.value)) {
        validaContraseñaDiv.className = "my-3 p-3 border border-success text-success";
        validaContraseñaDiv.innerHTML = "La contraseña es valida!"
        } else {
        validaContraseñaDiv.className = "my-3 p-3 border border-danger text-danger";
        validaContraseñaDiv.innerHTML = "La contraseña no es valida!"
        }
    } else{
        validaContraseñaDiv.className = "";
        validaContraseñaDiv.innerHTML = "";
    }
}

repitContraseña.onkeyup = () => {
    let confirmPassword = repitContraseña.value;
    let password = contraseña.value;

    if (repitContraseña.value.length > 0){ 
        if (validaContraseña(contraseña.value)) {
            validaConfirmacionDiv.className = "my-3 p-3 border border-success text-success";
            validaConfirmacionDiv.innerHTML = "Las contraseñas si coninsiden!"
        } else {
            validaConfirmacionDiv.className = "my-3 p-3 border border-danger text-danger";
            validaConfirmacionDiv.innerHTML = "Las contraseñas no coinciden!"
        }
    } else{
        validaConfirmacionDiv.className = "";
        validaConfirmacionDiv.innerHTML = "";
    }
}


function validaEmail (registerEmail) {
    if (registerEmail.includes("@")) {
        return true
    } else {
        return false
    }
}

function validaContraseña (password) {
    let regex = /^(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return regex.test(password);
}

function validaConfirmacion (password, confirmPassword) {
    if (password != confirmPassword){
        return false

    } else {
        return true
    }
}

function validarEmail () {

    let registEmail = document.getElementById ("registerEmail");

    if (registEmail.value.length == 0) {
        Toastify({
            text: "completa todos los campos de texto.",
            duration:2000,
            gravity:"top",
            position:"right",
            close:true,
            style:{
                background:"FF4343"
            }
        }).showToast();
        
        return false;
    } else {
        guardarDatos();

        Toastify({
            text: "sus datos fueron guardados correctamente!",
            duration:2000,
            gravity:"top",
            position:"right",
            close:true,
            style:{
                background:"65FF43"
            }
        }).showToast();
    }
}

function guardarDatos() {
    let registEmail = document.getElementById ("registerEmail");
    localStorage.setItem("datosForm", JSON.stringify(registEmail.value));
}

function eliminarDatos() {
    localStorage.removeItem("datosForm");
}
