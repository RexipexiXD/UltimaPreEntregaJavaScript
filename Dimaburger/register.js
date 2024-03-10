function Register() {
    Swal.fire({
        icon: "error",
        title: "Usuario no encontrado",
        text: "El nombre y la contraseña que ingreso no coinciden con ninguna cuenta.",
        footer: '<a href="../pagsec/register2.html">¿No posee una cuenta? Registrese aqui!</a>',
        timer: 2000
    });
}