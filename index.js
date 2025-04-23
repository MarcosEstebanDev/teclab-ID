// index.js
// Función para activar eventos click en botones
const activarClickEnBotones = () => {
  const botonesAgregar = document.querySelectorAll(".button.button-outline.button-add");
  
  if (botonesAgregar) {
    for (const boton of botonesAgregar) {
      boton.addEventListener("click", (event) => {
        agregarAlCarrito(parseInt(event.target.id));
      });
    }
  }
};

// Función de ejemplo que carga productos al DOM
const cargarProductos = () => {
  const contenedor = document.getElementById("contenedor-productos");
  
  productos.forEach((producto) => {
    contenedor.innerHTML += `
<div class="card">
  <div class="card-img-container">
    <img class="card-img" src="${producto.imagen}" alt="${producto.nombre}">
  </div>
  <div class="card-content">
    <h3 class="card-title">${producto.nombre}</h3>
    <p class="card-description">${producto.descripcion}</p>
    <p class="card-price">$${producto.precio}</p>
    <button class="card-btn" id="${producto.id}">Agregar</button>
  </div>
</div>
    `;
  });

  // Activar los botones una vez se cargan los productos
  activarClickEnBotones();
};

// Llamar a cargarProductos al iniciar
cargarProductos();
  
  