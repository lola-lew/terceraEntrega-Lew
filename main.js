// usuario
class Usuario {
  constructor(usuario) {
    this.usuario = usuario;
  }
}

const arrayUsuarios = [];

const formUsuario = document.getElementById("formUsuario");


formUsuario.addEventListener("submit", (e) => {
  e.preventDefault();
  // crear usuario nuevo
  const nombre = document.getElementById("nombre").value;
  const usuario = new Usuario(nombre);

  // verifico x consola
  console.log(arrayUsuarios);

  // reset form
  formUsuario.reset();

  // comprobar usuario existente
  let usuarioExiste = arrayUsuarios.find(el => el.usuario === nombre);

  const contenedorSaludo = document.getElementById("contenedorSaludo");
  const saludo = document.createElement("p");

  // saludar usuario
  if (usuarioExiste) {
    saludo.innerText = `¡Hola ${nombre}, bienvenido nuevamente!`;
  } else {
    // si el usuario no existe almacenar usuario en array y localStorage
    arrayUsuarios.push(usuario);
    const ususarioJSON = JSON.stringify(usuario);
    console.log(ususarioJSON);
    // saludar usuario
    localStorage.setItem("usuario", ususarioJSON);
    saludo.innerText = `¡Bienvenido ${nombre}!`;
  }

  contenedorSaludo.appendChild(saludo);
})


// Buscador
const buscador = document.getElementById("buscador");

buscador.addEventListener("submit", (e) => {
  // Evito que vuelva a cargar la página
  e.preventDefault();
  buscador.reset();
})

/*
// Constructor de productos
class Producto {
  constructor (nombre, precio, id) {
    this.nombre = nombre;
    this.precio = precio;
    this.id = id
  }
}

// Productos
const kanpaiPandas = new Producto ("Kanpai Pandas", 8.4, 1);
const cryptoPunks = new Producto ("Crypto Punks", 7.6, 2);
const boredApe = new Producto ("Bored Ape Yacht Club", 5.9, 3);
const wonderPals = new Producto ("Wonder Pals", 3.2, 4);

// Array de productos
const articulos = [kanpaiPandas, cryptoPunks, boredApe, wonderPals];

// Array de productos vacía en la cual se iran almacenando los precios de los productos seleccionados
const carrito = [];
*/

// Botón para agregar productos
const btnAdd = document.querySelectorAll(".btnAdd");
btnAdd.forEach(agregarEnCarrito => {
  agregarEnCarrito.addEventListener("click", addClickeado )
})

// div contenedor de carrito donde se iran cargando los productos
const contenedorCarrito = document.querySelector(".carritoProductos");

// Variables del producto
function addClickeado (e) {
  const btn =  e.target;
  const producto = btn.closest(".producto");
  const tituloProducto = producto.querySelector(".tituloProducto").textContent;
  const precio = producto.querySelector(".precio").textContent;

  agregarAlCarrito(tituloProducto, precio);
  const productoJSON = JSON.stringify(producto);
  localStorage.setItem("producto", productoJSON);
  console.log(productoJSON)
}

// carrito armado
function agregarAlCarrito(tituloProducto, precio) {
  const elementoCarrito = document.createElement("div");
  const contenidoCarrito = `
  <div class="productoCarrito">
      <h6>Producto</h6>
      <p>${tituloProducto}</p>
      <h6>Precio</h6>
      <p>${precio}</p>
      <h6>Cantidad</h6>
      <input type="text">
      <button>Quitar</button>
    </div>
  `;
  elementoCarrito.innerHTML = contenidoCarrito
  contenedorCarrito.append(elementoCarrito)
}

