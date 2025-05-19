document.addEventListener("DOMContentLoaded", function () 
{
    const formulario = document.getElementById("formularioRegistro");

    formulario.addEventListener("submit", function (evt) 
    {
        evt.preventDefault();

        const nombre = document.getElementById("nombre");
        const apellidos = document.getElementById("apellidos");
        const telefono = document.getElementById("telefono");
        const email = document.getElementById("email");
        const contrasena1 = document.getElementById("contrasena1");
        const contrasena2 = document.getElementById("contrasena2");
        const terminos = document.getElementById("aceptarTerminos");

        // Validación de nombre
        if (nombre.value === "") 
        {
            mostrarError("error-nombre", "El nombre no puede estar vacío");
        } 
        else 
        {
            ocultarError("error-nombre");
        }

        // Validación de apellidos
        if (apellidos.value === "") 
        {
            mostrarError("error-apellidos", "Los apellidos no pueden estar vacíos");
        } 
        else 
        {
            ocultarError("error-apellidos");
        }

        // Validación de teléfono
        if (telefono.value.length !== 10 || isNaN(telefono.value)) 
        {
            mostrarError("error-telefono", "El teléfono debe tener 10 dígitos numéricos");
        }
        else 
        {
            ocultarError("error-telefono");
        }

        // Validación de email
        if (email.value.indexOf("@") === -1 || email.value.indexOf(".") === -1)
        {
            mostrarError("error-email", "Por favor ingrese un correo electrónico válido");
        }
        else
        {
            ocultarError("error-email");
        }

        // Validación de contraseñas
        if (contrasena1.value === "" || contrasena1.value !== contrasena2.value)
        {
            mostrarError("error-contrasena1", "Las contraseñas no coinciden");
            mostrarError("error-contrasena2", "Las contraseñas no coinciden");
        }
        else
        {
            ocultarError("error-contrasena1");
            ocultarError("error-contrasena2");
        }

        // Validación de términos
        if (terminos.checked === false)
        {
            mostrarError("error-terminos", "Debe aceptar los términos y condiciones");
        }
        else
        {
            ocultarError("error-terminos");
        }
    });

    // Función para mostrar errores
    function mostrarError(id, mensaje) {
        const campoError = document.getElementById(id);
        campoError.innerText = mensaje;
        campoError.classList.add("activo");
    }

    // Función para ocultar errores
    function ocultarError(id) {
        const campoError = document.getElementById(id);
        campoError.innerText = "";
        campoError.classList.remove("activo");
    }
});
