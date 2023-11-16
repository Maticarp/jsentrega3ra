const carrito = [];
let total = 0;

function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}

function agregarProducto() {
    const nombre = document.getElementById("producto").value;
    const precio = parseFloat(document.getElementById("precio").value);

    if (validarEntradas(nombre, precio)) {
        const producto = new Producto(nombre, precio);
        carrito.push(producto);

        total += precio;

        actualizarCarrito();
        limpiarEntradas();
        actualizarTotal();
    }
}

function validarEntradas(nombre, precio) {
    const mensajeError = document.getElementById("mensajeError");

    if (nombre && !isNaN(precio) && precio > 0) {
        mensajeError.style.display = "none";
        return true;
    } else {
        mensajeError.textContent = "Por favor, ingresa un nombre y un precio válido.";
        mensajeError.style.display = "block";
        return false;
    }
}

function limpiarEntradas() {
    document.getElementById("producto").value = "";
    document.getElementById("precio").value = "";
}

function actualizarTotal() {
    document.getElementById("total").textContent = "Total: $" + total.toFixed(2);
}

function actualizarCarrito() {
    const listaProductos = document.getElementById("listaProductos");
    listaProductos.innerHTML = "";

    carrito.forEach(function (producto, index) {
        const li = document.createElement("li");
        li.textContent = `${producto.nombre} - $${producto.precio.toFixed(2)}`;
        listaProductos.appendChild(li);
    });
}

function buscarProducto() {
    const nombreProducto = document.getElementById("buscarProducto").value;
    const resultados = carrito.filter(producto => producto.nombre.toLowerCase() === nombreProducto.toLowerCase());

    const resultadoTexto = resultados.length > 0 ? "Producto encontrado en el carrito." : "Producto no encontrado en el carrito.";
    alert(resultadoTexto);
}

document.getElementById("agregarProducto").addEventListener("click", agregarProducto);
document.getElementById("buscar").addEventListener("click", buscarProducto);

