// carrito.js
const carrito = []; 

function agregarAlCarrito(id) {
  console.log("Producto ID:", id);  // Verificar que el id se pasa correctamente
  const producto = productos.find(p => p.id === id);
  if (producto) {
    console.log("Producto agregado:", producto);  // Verificar el producto agregado
    carrito.push(producto);
    mostrarCarrito();
  }
}
// Mostrar los productos en el carrito
function mostrarCarrito() {
  const contenedorCarrito = document.getElementById("carrito");
  contenedorCarrito.innerHTML = ""; // Limpiar carrito antes de mostrarlo

  // Aplicar estilo de grid al contenedor
  contenedorCarrito.style.display = "grid";
  contenedorCarrito.style.gridTemplateColumns = "repeat(auto-fill, minmax(200px, 1fr))";
  contenedorCarrito.style.gap = "15px";

  carrito.forEach(item => {
    const card = document.createElement("div");
    card.style.border = "1px solid #ddd";
    card.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.1)";
    card.style.borderRadius = "8px";
    card.style.overflow = "hidden";
    card.style.backgroundColor = "#fff";
    card.style.textAlign = "center";
    card.style.padding = "10px";

    const img = document.createElement("img");
    img.src = item.imagen || "placeholder.jpg"; // Asegúrate de que los productos tengan una propiedad 'imagen'
    img.alt = item.nombre;
    img.style.width = "100%";
    img.style.height = "150px";
    img.style.objectFit = "cover";
    img.style.borderBottom = "1px solid #ddd";
    img.style.marginBottom = "10px";

    const nombre = document.createElement("p");
    nombre.textContent = item.nombre;
    nombre.style.margin = "0";
    nombre.style.fontWeight = "bold";
    nombre.style.fontSize = "16px";

    const precio = document.createElement("p");
    precio.textContent = `$${item.precio}`;
    precio.style.margin = "5px 0 0";
    precio.style.color = "#555";
    precio.style.fontSize = "14px";

    card.appendChild(img);
    card.appendChild(nombre);
    card.appendChild(precio);
    contenedorCarrito.appendChild(card);
  });
}
