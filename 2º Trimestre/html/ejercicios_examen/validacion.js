    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let telefono = document.getElementById("telefono").value;
    let email = document.getElementById("email").value;
    let contrasena1 = document.getElementById("contrasena1").value;
    let contrasena2 = document.getElementById("contrasena2").value;
    let marcado = document.getElementById("aceptarTerminos").checked;

function validar(){
    if(nombre == '' || nombre.length === 0){
        document.getElementById("error-nombre").style.display = "block";
        document.getElementById("error-nombre").innerHTML = "El nombre no puede estar vacío";
    }else{
        document.getElementById("error-nombre").innerHTML = "";    
    };

    if(apellidos == ''){
    document.getElementById("error-apellidos").innerHTML = "Los apellidos no pueden estar vacío";
    }else{
        document.getElementById("error-apellidos").innerHTML = "";
    }
};