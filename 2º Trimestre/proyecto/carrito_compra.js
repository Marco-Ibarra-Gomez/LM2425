// Definimos los productos y su cantidad en el carrito
let carro = [
    {id:0, titulo:'Hera', precio: 20, uds: 0},
    {id:1, titulo:'Tulipanes multicolor', precio: 15, uds: 0},
    {id:2, titulo:'Margaritas', precio: 15, uds: 0},
    {id:3, titulo:'Arreglo de 24 rosas', precio: 40, uds: 0}
];

let almacenado = null;

// Función para cargar el carrito desde localStorage
function iniciar() {
    almacenado = localStorage.getItem("carro");
    if (almacenado != null) {
        almacenado = JSON.parse(almacenado);
        carro = almacenado;
        refrescar();
    }
}

// Función para agregar unidades de un producto al carrito
function anadir(producto) {
    let objeto = carro[producto];
    objeto['uds'] += 1; // Aumento de unidad
    carro[producto] = objeto;
    document.getElementById("id" + producto).value = objeto['uds']; // Actualizamos el input con el número de unidades
    document.getElementById("item" + (producto + 1)).style.display = 'flex'; // Mostramos el contenedor del producto
    localStorage.setItem("carro", JSON.stringify(carro)); // Guardamos el carrito actualizado
    refrescar(); // Refrescamos la visualización del carrito
}

// Función para quitar unidades de un producto del carrito
function quitar(producto) {
    let objeto = carro[producto];
    if (objeto['uds'] > 0) {
        objeto['uds'] -= 1; // Restamos una unidad
        carro[producto] = objeto;
        document.getElementById("id" + producto).value = objeto['uds']; // Actualizamos el input con el nuevo número de unidades
        if (objeto['uds'] === 0) {
            document.getElementById("item" + (producto + 1)).style.display = 'none'; // Ocultamos el contenedor si no hay unidades
        }
        localStorage.setItem("carro", JSON.stringify(carro)); // Guardamos el carrito actualizado
        refrescar(); // Refrescamos la visualización del carrito
    }
}

// Función para actualizar la visualización del carrito y el total
function refrescar() {
    let total = 0;  // Inicializamos el total
    for (let i = 0; i < carro.length; i++) {
        let producto = carro[i];
        if (producto['uds'] > 0) {
            total += producto['uds'] * producto['precio'];  // Sumamos el precio total
        }
    }
    // Actualizamos el total en el carrito
    document.getElementById("total_carrito").innerHTML = "Total: " + total.toFixed(2) + "€";
}


// Función para mostrar el carrito al hacer clic en "Realizar compra"
function realizar() {
    document.getElementById("carrito").style.display = 'flex';
}

// Función para ocultar el carrito
function desaparecer() {
    document.getElementById("carrito").style.display = 'none';
}
function cambiarDisplay(producto) {
    // Actualizamos la unidad del producto
    let objeto = carro[producto];
    objeto['uds'] += 1;  // Aumentamos la unidad del producto
    carro[producto] = objeto;
    
    // Actualizamos el valor del input correspondiente al producto
    let input = document.getElementById("id" + producto);
    input.value = objeto['uds'];  // Actualizamos el input con el número de unidades
    
    // Si el producto tiene unidades, hacemos visible su contenedor
    if (objeto['uds'] > 0) {
        document.getElementById("item" + (producto + 1)).style.display = 'flex'; // Mostramos el contenedor
    }
    
    // Guardamos el carrito actualizado en el almacenamiento local
    localStorage.setItem("carro", JSON.stringify(carro));
    
    // Llamamos a la función refrescar para actualizar la visualización del carrito
    refrescar();
}
