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
  const usuario = new Usuario(nombre.value);
  arrayUsuarios.push(usuario);

  // verifico x consola
  console.log(arrayUsuarios);

  // reset form
  formUsuario.reset();

  // comprobar usuario existente
  let usuarioExiste = arrayUsuarios.find(nombre.value);

  const contenedorSaludo = document.getElementById("contenedorSaludo");
  const saludo = document.createElement("p");
  // saludar usuario
  if (usuarioExiste === nombre.value) {
    return saludo.innerText = `¡Hola ${nombre.value}, bienvenido nuevamente!`;

  } else {
    return saludo.innerText = `¡Bienvenido ${nombre.value}!`;
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

