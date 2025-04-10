let carrito_compra = [
    {id:0, titulo:'Hera', precio: 20, uds: 0},
    {id:1, titulo:'Tulipanes multicolor', precio: 15, uds: 0},
    {id:2, titulo:'Margaritas', precio: 15, uds: 0},
    {id:3, titulo:'Arreglo de 24 rosas', precio: 40, uds: 0}
];
let carrito_almacenado = null;

function iniciar() {
    carrito_almacenado = localStorage.getItem("carrito_compra");
    if (carrito_almacenado != null) {
        carrito_almacenado = JSON.parse(carrito_almacenado);
        carrito_compra = carrito_almacenado;
        refrescar();
    }
    for (let i = 0; i < carrito_compra.length; i++) {
        if (carrito_compra[i].uds > 0) {
            document.getElementById("carrito").style.display = 'flex';
            document.getElementById("item" + (i + 1)).style.display = 'flex';
        }
    }
}

function anadir(item_carrito) {
    carrito_compra[item_carrito].uds += 1;
    document.getElementById("id" + item_carrito).value = carrito_compra[item_carrito].uds; 
    document.getElementById("item" + (item_carrito + 1)).style.display = 'flex'; 
    localStorage.setItem("carrito_compra", JSON.stringify(carrito_compra));
    refrescar(); 
}

function quitar(item_carrito) {
    if (carrito_compra[item_carrito].uds > 0) {
        carrito_compra[item_carrito].uds -= 1;
        document.getElementById("id" + item_carrito).value = carrito_compra[item_carrito].uds;

        if (carrito_compra[item_carrito].uds === 0) {
            document.getElementById("item" + (item_carrito + 1)).style.display = 'none';
        }

        localStorage.setItem("carrito_compra", JSON.stringify(carrito_compra));
        refrescar();
    }
}

function refrescar() {
    let guardarcarrito_compra = localStorage.getItem("carrito_compra");
    carrito_compra = JSON.parse(guardarcarrito_compra);
    let total = 0; 
    for (let i = 0; i < carrito_compra.length; i++) {
        let item_carrito = carrito_compra[i];
        if (item_carrito['uds'] > 0) {
            total += item_carrito['uds'] * item_carrito['precio']; 
            document.getElementById("id"+i).value = item_carrito['uds'];
        }
    }
    document.getElementById("total_carrito").innerHTML = "Total: " + total.toFixed(2) + "€";

}

function aparecer() {
    document.getElementById("carrito").style.display = 'flex';
}

function desaparecer() {
    document.getElementById("carrito").style.display = 'none';
}

function cambiarDisplay(item_carrito) {
    carrito_compra[item_carrito].uds += 1;
    document.getElementById("id" + item_carrito).value = carrito_compra[item_carrito].uds;

    if (carrito_compra[item_carrito].uds > 0) {
        document.getElementById("carrito").style.display = 'flex';
        document.getElementById("item" + (item_carrito + 1)).style.display = 'flex';
    }

    localStorage.setItem("carrito_compra", JSON.stringify(carrito_compra));
    refrescar();
}
window.onload=iniciar;
