const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Conectar a MongoDB (si usas MongoDB Atlas, reemplaza la URI con la tuya)
mongoose.connect('mongodb://localhost:27017/panaderia', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado a la base de datos MongoDB'))
  .catch((err) => console.log('Error al conectar a la base de datos: ' + err));

// Crear el esquema y modelo para los pedidos
const pedidoSchema = new mongoose.Schema({
  producto: String,
  cantidad: Number,
  fecha: { type: Date, default: Date.now }
});

const Pedido = mongoose.model('Pedido', pedidoSchema);

// Ruta para recibir pedidos
app.post('/api/pedidos', async (req, res) => {
  const { producto, cantidad } = req.body;

  const nuevoPedido = new Pedido({
    producto,
    cantidad
  });

  try {
    await nuevoPedido.save();
    res.status(201).json(nuevoPedido);
  } catch (err) {
    res.status(400).json({ error: 'No se pudo guardar el pedido.' });
  }
});

// Ruta para obtener todos los pedidos
app.get('/api/pedidos', async (req, res) => {
  try {
    const pedidos = await Pedido.find();
    res.json(pedidos);
  } catch (err) {
    res.status(500).json({ error: 'No se pudieron obtener los pedidos.' });
  }
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

app.delete('/api/pedidos', async (req, res) => {
    try {
      await Pedido.deleteMany();
      res.status(200).json({ message: 'Carrito vacío' });
    } catch (err) {
      res.status(500).json({ error: 'Error al vaciar el carrito' });
    }
  });
  