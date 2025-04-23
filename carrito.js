// carrito.js

// Declaración del array vacío
const carritoFrutas = [];

// Función para agregar frutas al carrito
const agregarAlCarrito = (frutald) => {
  if (frutald > 0) {
    // Buscar el producto por ID en el array productos
    const producto = productos.find((prod) => prod.id === frutald);
    if (producto !== undefined) {
      carritoFrutas.push(producto);
      console.table(carritoFrutas);
    }
  }
};