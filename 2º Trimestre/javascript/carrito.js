let carro = [
    {id:0, 'titulo':'monitor','precio':129.99, uds:0},
    {id:1,'titulo':'teclado','precio':39.99, uds:0},
    {id:2, 'titulo':'ratón', 'precio':22.99, uds:0},
    {id:3, 'titulo':'gráfica', 'precio':1449.99, uds:0}
];
let almacenado=null;
function iniciar(){
    almacenado = localStorage.getItem("carro");
    if (almacenado!=null){
        almacenado = JSON.parse(almacenado);
        carro = almacenado;
        refrescar();
    }
}
function anadir(producto){
     // En producto llevamos el identificador del producto a guardar en el carrito
     let objeto = carro[producto];
     objeto['uds'] += 1; // Añado unidad
     carro[producto] = objeto;
     document.getElementById("id"+producto).value = objeto['uds'];
     localStorage.setItem("carro", JSON.stringify(carro));
     refrescar();
}
function quitar(producto){
    // En producto llevamos el identificador del producto a guardar en el carrito
    let objeto = carro[producto];
    let numuds = objeto['uds'];
    if (numuds>=1){
        objeto['uds'] -= 1; // Quito unidad
        carro[producto] = objeto;
        document.getElementById("id"+producto).value = objeto['uds'];
        localStorage.setItem("carro", JSON.stringify(carro));
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