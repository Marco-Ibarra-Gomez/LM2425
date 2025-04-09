// funciones "carrito"
function desaparecer() {
    document.getElementById("carrito").style.display='none';
}

function realizar(){
    document.getElementById("carrito").style.display='flex';
}

// funciones añadir o eliminar items a carrito
let carrito_compra = [
    {id:0, 'titulo':'Hera','precio':20, uds:0},
    {id:1,'titulo':'Tulipanes multicolor','precio':15, uds:0},
    {id:2, 'titulo':'Margaritas', 'precio':15, uds:0},
    {id:3, 'titulo':'Arreglo de 24 rosas', 'precio':40, uds:0}
];
let almacenado=null;
function iniciar(){
    almacenado = localStorage.getItem("carrito_compra");
    if (almacenado!=null){
        almacenado = JSON.parse(almacenado);
        carro = almacenado;
        refrescar();
    }
}
function anadir(producto){
     // En producto llevamos el identificador del producto a guardar en el carrito
     let objeto = carrito_compra[producto];
     objeto['uds'] += 1; // Añado unidad
     carro[producto] = objeto;
     document.getElementById("id"+producto).value = objeto['uds'];
     localStorage.setItem("carrito_compra", JSON.stringify(carrito_compra));
     refrescar();
}
function quitar(producto){
    // En producto llevamos el identificador del producto a guardar en el carrito
    let objeto = carrito_compra[producto];
    let numuds = objeto['uds'];
    if (numuds>=1){
        objeto['uds'] -= 1; // Quito unidad
        carro[producto] = objeto;
        document.getElementById("id"+producto).value = objeto['uds'];
        localStorage.setItem("carrito_compra", JSON.stringify(carrito_compra));
        refrescar();
    }
}
// Actualiza visualización carrito y almacenamiento local
function refrescar(){
    let listaCarrito = document.getElementById("carrito");
    let total=0;
    listaCarrito.innerHTML="";
    for (var i=0;i<carro.length;i++)
    {
        
        let producto = carro[i];
        if (producto['uds']>0){
            let nodo = document.createElement("li");
            let texto = document.createTextNode("Producto: " + producto['titulo']+" Unidades:"+producto['uds']+" Precio ud:"+producto['precio']);
            document.getElementById("id"+i).value = producto['uds'];
            nodo.appendChild(texto);
            listaCarrito.appendChild(nodo);
            total = total + producto['uds']*producto['precio'];
        }
    }
    document.getElementById("datos").innerHTML = "Total: " + total.toFixed(2) + "€";
}