guardar_local();
obtener_localstorage();

function guardar_local(){
    let persona = {
        nombre: "Fernando",
        edad: 31,
        correo: "xyz@xyz.com",
        coords:{
            lat: 10,
            lng: -10
        }
    };

    let nombre = "Juan";

    localStorage.setItem("persona", JSON.stringify(persona));
    localStorage.setItem( "nombre", nombre);
}

function obtener_localstorage(){
    if(localStorage.getItem("nombre")){
        // se que existe el nombre en el local storage    
        let nombre = localStorage.getItem("nombre");
        let persona = JSON.parse(localStorage.getItem("persona"));
    
        console.log(nombre);
        console.log(persona);      
    }

}