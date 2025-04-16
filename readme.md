# Actividad 1: E-commerce de Frutas

## Contexto
La **Asociación Sudamericana de Productores de Frutas** está lanzando su cadena de fruterías en toda Latinoamérica, junto con un sistema de **e-commerce** que permitirá a los clientes realizar compras en línea. Este sistema será funcional tanto en computadoras de escritorio como en dispositivos móviles, sirviendo como base para futuros desarrollos en el segmento móvil.

El objetivo inicial es construir un **mockup funcional** del proyecto web, utilizando un código base de HTML y CSS proporcionado por el equipo de diseño, al cual se le añadirá la lógica necesaria con **JavaScript**.

---

## Consigna
El proyecto requiere implementar la lógica en **JavaScript** para generar dinámicamente las tarjetas de productos (Cards) y cargarlas en el DOM. A continuación, se detallan los pasos necesarios:

### 1. Función `retornarCardHTML(producto)`
- **Descripción**: Esta función recibe un objeto literal que representa un producto y retorna un bloque de código HTML utilizando **Template Strings**.
- **Requisitos**:
  - El bloque HTML debe incluir las propiedades del objeto: `imagen`, `nombre`, `descripcion`, `precio`.
  - Utilizar el atributo `id` del botón para referenciar la plantilla literal: `${producto.id}`.

### 2. Función `cargarProductos(array)`
- **Descripción**: Esta función recibe un array de objetos (como `productos`) y genera dinámicamente las tarjetas de productos en el DOM.
- **Requisitos**:
  - Iterar el array utilizando el método `forEach()`.
  - Llamar a `retornarCardHTML(producto)` en cada iteración para generar el HTML de cada producto.
  - Referenciar el contenedor `<div id="contenedor-productos">` en el DOM utilizando `getElementById`.
  - Escribir de manera acumulativa todas las tarjetas generadas en el contenedor.

### 3. Integración
- **Pasos**:
  - Llamar a la función `cargarProductos()` pasando el array `productos` como parámetro.
  - Eliminar el bloque HTML estático de la tarjeta modelo en `index.html`, ya que las tarjetas serán generadas dinámicamente.
  - Asegurarse de que el archivo `index.js` esté correctamente referenciado en el documento HTML.

---

## Estructura del Proyecto
El proyecto está compuesto por los siguientes archivos:

1. **`index.html`**: Contiene la estructura base del sitio web.
2. **`style.css`**: Define los estilos para las tarjetas y el diseño general.
3. **`index.js`**: Implementa la lógica para generar y cargar dinámicamente las tarjetas de productos.

---

## Ejecución
1. **Abrir el archivo `index.html` en el navegador**.
2. Verificar que las tarjetas de productos se generen dinámicamente en el contenedor.
3. Probar la funcionalidad en diferentes dispositivos para garantizar la compatibilidad.

---