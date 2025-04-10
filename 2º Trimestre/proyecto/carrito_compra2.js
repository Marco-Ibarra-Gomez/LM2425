let carrito_compra = [
    {id: 0, titulo: 'Hera', precio: 20, uds: 0},
    {id: 1, titulo: 'Tulipanes multicolor', precio: 15, uds: 0},
    {id: 2, titulo: 'Margaritas', precio: 15, uds: 0},
    {id: 3, titulo: 'Arreglo de 24 rosas', precio: 40, uds: 0}
];

let carrito_almacenado = null;

// Función para cargar los datos del carrito al iniciar la página
function iniciar() {
    // Cargar el carrito desde el localStorage si existe
    carrito_almacenado = localStorage.getItem("carrito_compra");
    if (carrito_almacenado != null) {
        carrito_almacenado = JSON.parse(carrito_almacenado);
        carrito_compra = carrito_almacenado;
    }

    // Variable para verificar si hay productos con unidades > 0
    let hayProductosEnCarrito = false;

    // Recorrer todos los productos para mostrar u ocultar según las unidades
    for (let i = 0; i < carrito_compra.length; i++) {
        let producto = carrito_compra[i];

        // Si el producto tiene unidades > 0, lo mostramos
        if (producto.uds > 0) {
            document.getElementById("item" + (i + 1)).style.display = 'flex';  // Mostrar el producto
            hayProductosEnCarrito = true;  // Hay productos en el carrito
        } else {
            document.getElementById("item" + (i + 1)).style.display = 'none';  // Ocultar el producto
        }

        // Actualizar el valor del input correspondiente al producto
        document.getElementById("id" + i).value = producto.uds;
    }

    // Mostrar el carrito solo si hay productos con unidades > 0
    if (hayProductosEnCarrito) {
        document.getElementById("carrito").style.display = 'flex';
    } else {
        document.getElementById("carrito").style.display = 'none';
    }

    // Actualizar el total del carrito
    let total = 0;
    for (let i = 0; i < carrito_compra.length; i++) {
        let item_carrito = carrito_compra[i];
        if (item_carrito.uds > 0) {
            total += item_carrito.uds * item_carrito.precio;
        }
    }
    document.getElementById("total_carrito").innerHTML = "Total: " + total.toFixed(2) + "€";
}

// Función para agregar unidades a un producto
function anadir(item_carrito) {
    carrito_compra[item_carrito].uds += 1;  // Aumentamos las unidades
    localStorage.setItem("carrito_compra", JSON.stringify(carrito_compra));  // Guardamos el carrito actualizado

    // Volver a ejecutar la lógica de iniciar para actualizar la visualización y el total
    iniciar();  // Vuelve a llamar a iniciar() para actualizar la vista
}

// Función para quitar unidades a un producto
function quitar(item_carrito) {
    if (carrito_compra[item_carrito].uds > 0) {
        carrito_compra[item_carrito].uds -= 1;  // Reducimos las unidades
        localStorage.setItem("carrito_compra", JSON.stringify(carrito_compra));  // Guardamos el carrito actualizado

        // Volver a ejecutar la lógica de iniciar para actualizar la visualización y el total
        iniciar();  // Vuelve a llamar a iniciar() para actualizar la vista
    }
}

// Función para mostrar el carrito (hacerlo visible)
function aparecer() {
    document.getElementById("carrito").style.visibility = 'visible';
}

// Función para ocultar el carrito
function desaparecer() {
    document.getElementById("carrito").style.visibility = 'hidden';
}

function cambiarDisplay(item_carrito) {
    carrito_compra[item_carrito].uds += 1;
    document.getElementById("id" + item_carrito).value = carrito_compra[item_carrito].uds;

    if (carrito_compra[item_carrito].uds > 0) {
        document.getElementById("carrito").style.display = 'flex';
        document.getElementById("carrito").style.visibility = 'visible';
        document.getElementById("item" + (item_carrito + 1)).style.display = 'flex';
    }

    localStorage.setItem("carrito_compra", JSON.stringify(carrito_compra));
    iniciar();
}