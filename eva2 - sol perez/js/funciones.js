let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function agregarProducto(nombre, precio) {

    const productoExistente = carrito.find(
        producto => producto.nombre === nombre
    );

    if (productoExistente) {
        productoExistente.cantidad++;
    } else {
        carrito.push({
            nombre,
            precio,
            cantidad: 1
        });
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));

    alert(nombre + " agregado al carrito");
}

function mostrarCarrito() {

    const tabla = document.getElementById("tabla-carrito");

    if (!tabla) return;

    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    tabla.innerHTML = "";

    let total = 0;

    carrito.forEach(producto => {

        let subtotal = producto.precio * producto.cantidad;

        total += subtotal;

        tabla.innerHTML += `
            <tr>
                <td>${producto.nombre}</td>
                <td>$${producto.precio}</td>
                <td>${producto.cantidad}</td>
                <td>$${subtotal}</td>
                <td>
                    <button class="btn btn-danger"
                            onclick="eliminarProducto('${producto.nombre}')">
                        Eliminar
                    </button>
                </td>
            </tr>
        `;
    });

    document.getElementById("total").textContent = total;
}

function eliminarProducto(nombre) {

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    carrito = carrito.filter(producto => producto.nombre !== nombre);

    localStorage.setItem("carrito", JSON.stringify(carrito));

    mostrarCarrito();
}

function vaciarCarrito() {
    localStorage.removeItem("carrito");
    location.reload();
}

function validarCorreo() {

    const correo = document.getElementById("correo").value;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regex.test(correo);
}

function validarContrasena() {

    const contrasena = document.getElementById("contrasena").value;
    const confirmar = document.getElementById("confirmarContrasena").value;

    const regex = /^(?=.*[A-Z])(?=.*\d).+$/;

    return regex.test(contrasena) &&
           contrasena === confirmar;
}

function registrar() {

    if (!validarCorreo()) {
        alert("Correo inválido");
        return;
    }

    if (!validarContrasena()) {
        alert("La contraseña no cumple los requisitos");
        return;
    }

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const correo = document.getElementById("correo").value;
    const telefono = document.getElementById("telefono").value;

    const usuario = { nombre, apellido, correo, telefono };
    localStorage.setItem("usuario", JSON.stringify(usuario));

    mostrarUsuario();
 }

function mostrarUsuario() {
    const usuario = JSON.parse(localStorage.getItem("usuario"));

    if (!usuario) return;

    document.getElementById("datosUsuario").innerHTML = `
        <table class="table table-striped mt-3">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Correo</th>
                    <th>Teléfono</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>${usuario.nombre}</td>
                    <td>${usuario.apellido}</td>
                    <td>${usuario.correo}</td>
                    <td>${usuario.telefono}</td>
                </tr>
            </tbody>
        </table>
    `;
}


mostrarCarrito();
mostrarUsuario();