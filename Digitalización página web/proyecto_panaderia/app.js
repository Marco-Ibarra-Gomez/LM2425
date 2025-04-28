document.addEventListener('DOMContentLoaded', () => {
    // Obtenemos los elementos del formulario
    const form = document.getElementById('pedidoForm');
    const productoSelect = document.getElementById('producto');
    const cantidadInput = document.getElementById('cantidad');
    const carritoElement = document.getElementById('carrito');
    const vaciarCarritoBtn = document.getElementById('vaciarCarrito');
    const realizarPedidoBtn = document.getElementById('realizarPedido');
  
    // Función para obtener los pedidos desde el backend (base de datos)
    async function cargarCarrito() {
      try {
        const response = await fetch('http://localhost:3000/api/pedidos');
        const pedidos = await response.json();
  
        // Limpiamos el carrito actual
        carritoElement.innerHTML = '';
  
        // Mostramos los pedidos en el carrito
        pedidos.forEach(pedido => {
          const li = document.createElement('li');
          li.classList.add('list-group-item');
          li.textContent = `${pedido.cantidad} x ${pedido.producto}`;
          
          // Agregar botón para eliminar el pedido
          const eliminarBtn = document.createElement('button');
          eliminarBtn.textContent = 'Eliminar';
          eliminarBtn.classList.add('btn', 'btn-danger', 'btn-sm', 'ms-2');
          eliminarBtn.onclick = async () => {
            await eliminarPedido(pedido._id);
            cargarCarrito();  // Recargamos el carrito
          };
  
          li.appendChild(eliminarBtn);
          carritoElement.appendChild(li);
        });
      } catch (error) {
        console.error('Error cargando el carrito:', error);
      }
    }
  
    // Función para eliminar un pedido
    async function eliminarPedido(id) {
      try {
        await fetch(`http://localhost:3000/api/pedidos/${id}`, {
          method: 'DELETE',
        });
        cargarCarrito();  // Recargamos el carrito
      } catch (error) {
        console.error('Error eliminando el pedido:', error);
      }
    }
  
    // Cargar el carrito al inicio
    cargarCarrito();
  
    // Manejo de formulario de pedidos
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
  
      const producto = productoSelect.value;
      const cantidad = parseInt(cantidadInput.value);
  
      try {
        // Enviar pedido al backend
        const response = await fetch('http://localhost:3000/api/pedidos', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ producto, cantidad }),
        });
  
        const nuevoPedido = await response.json();
        cargarCarrito();  // Recargamos el carrito después de añadir el pedido
      } catch (error) {
        console.error('Error añadiendo el pedido:', error);
      }
    });
  
    // Vaciar el carrito
    vaciarCarritoBtn.addEventListener('click', async () => {
      try {
        await fetch('http://localhost:3000/api/pedidos', {
          method: 'DELETE',  // Puedes implementar un endpoint específico para vaciar el carrito
        });
        cargarCarrito();  // Recargamos el carrito
      } catch (error) {
        console.error('Error vaciando el carrito:', error);
      }
    });
  
    // Realizar pedido (esto es solo un ejemplo, puedes adaptarlo según el flujo que quieras)
    realizarPedidoBtn.addEventListener('click', () => {
      alert('Pedido realizado con éxito!');
      cargarCarrito();  // Recargamos el carrito
    });
  });
  