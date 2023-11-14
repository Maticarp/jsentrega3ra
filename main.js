const carritoKey = 'carrito';

// Al inicio del script, cargar el carrito desde el localStorage si existe
const storedCarrito = localStorage.getItem(carritoKey);
const carrito = storedCarrito ? JSON.parse(storedCarrito) : [];

function guardarCarritoEnLocalStorage() {
    localStorage.setItem(carritoKey, JSON.stringify(carrito));
}

function agregarProducto() {
    const nombre = document.getElementById("producto").value;
    const precio = parseFloat(document.getElementById("precio").value);

    if (nombre && !isNaN(precio)) {
        const producto = { nombre, precio };
        carrito.push(producto);

        total += precio;

        actualizarCarrito();
        guardarCarritoEnLocalStorage();

        document.getElementById("producto").value = "";
        document.getElementById("precio").value = "";

        const totalElement = document.getElementById("total");
        if (!totalElement) {
            const totalElement = document.createElement("p");
            totalElement.id = "total";
            document.body.appendChild(totalElement);
        }
        totalElement.textContent = "Total: $" + total;
    }
}

// ...

function buscarProducto() {
    const nombreProducto = document.getElementById("buscarProducto").value;
    const resultados = carrito.filter(producto => producto.nombre.toLowerCase() === nombreProducto.toLowerCase());

    const resultadoElement = document.getElementById("resultadoBusqueda");

    if (resultados.length > 0) {
        resultadoElement.textContent = "Producto encontrado en el carrito.";
    } else {
        resultadoElement.textContent = "Producto no encontrado en el carrito.";
    }
}

document.getElementById("agregarProducto").addEventListener("click", agregarProducto);
document.getElementById("buscar").addEventListener("click", buscarProducto);


document.getElementById("agregarProducto").addEventListener("click", agregarProducto);
document.getElementById("buscar").addEventListener("click", buscarProducto);
