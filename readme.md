# Actividad 3: Interfaz de Desarrollo

## Situación: Evolución del Proyecto
El desarrollo presentado como mockup del proyecto web ha sido un éxito. Ahora es necesario avanzar hacia la siguiente etapa para generar mayor interactividad en el sitio. En esta oportunidad, se requiere aplicar cambios sobre el mockup original, recuperando el código del proyecto trabajado previamente con la API del módulo I.

Las pruebas sobre el armado del carrito de compras han sido exitosas, y contamos con el visto bueno para continuar con los próximos módulos del proyecto.

---

## Consignas
A continuación, se detallan los pasos necesarios para implementar las nuevas funcionalidades:

### 1. Almacenamiento Progresivo del Carrito
- **Archivo**: `carrito.js`
- **Descripción**: Editar el archivo para almacenar el array `carritoFrutas` de forma progresiva a medida que se agregan productos.
- **Requisitos**:
  - Crear una función que utilice `LocalStorage` como mecanismo de persistencia.

### 2. Función `almacenarCarrito()`
- **Descripción**: Validar si la constante `carritoFrutas` contiene al menos un elemento. Si es así:
  - Crear una clave en `LocalStorage` con el mismo nombre del array.
  - Guardar el array utilizando `JSON.stringify()`.
- **Sugerencia**: Utilizar el operador lógico `AND` para validar la existencia de elementos en el carrito. Como alternativa, se puede usar un `if` simple.

### 3. Integración con `agregarAlCarrito()`
- **Descripción**: Implementar la función `almacenarCarrito()` dentro de `agregarAlCarrito()` para que, cada vez que se agregue un producto al array `carritoFrutas`, este se guarde automáticamente en `LocalStorage`.
- **Nota**: Eliminar el uso de `console.table()` que mostraba el contenido del carrito.

### 4. Función `recuperarCarrito()`
- **Descripción**: Crear una función que recupere la información almacenada en `LocalStorage` bajo la clave `carritoFrutas`.
- **Requisitos**:
  - Retornar la información almacenada o un array vacío si la clave no existe.
  - Utilizar el operador lógico `OR` para manejar valores por defecto.

### 5. Reubicación de `carritoFrutas`
- **Descripción**: Mover la creación de la constante `carritoFrutas` debajo de la función `recuperarCarrito()` y asignarle el valor retornado por esta función.

### 6. Validación de Archivos
- **Descripción**: Asegurarse de que el archivo `carrito.js` esté referenciado en los archivos `index.html` y `checkout.html`.
- **Nota**: No utilizar el atributo `defer` en el script, ya que no interactúa directamente con el DOM.

---

## Ejecución
1. **Cargar el proyecto con Live Server**.
2. **Agregar productos al carrito** desde `index.html`.
3. **Navegar a `checkout.html`** y validar en la consola de DevTools que `carritoFrutas` contiene los productos previamente agregados.
4. Verificar que el carrito se almacene correctamente en `LocalStorage`.

---

## Entrega
Se debe presentar el archivo `carrito.js` con las funcionalidades implementadas.

---