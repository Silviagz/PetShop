let stockComederos = [
    { id: 1, nombre: "Bebedero agua", tipo: "comedero", cantidad: 1, descripcion: "Comederos geniales para tu mascota", precio: 100000, img: './img/comederos/bebedero-agua.png' },
    { id: 2, nombre: "Comedero gato", tipo: "comedero", cantidad: 1, descripcion: "Comederos geniales para tu mascota", precio: 150000, img: './img/comederos/comedero-gato.png'},
    { id: 3, nombre: "Comedero hamster", tipo: "comedero", cantidad: 1, descripcion: "Comederos geniales para tu mascota", precio: 170000, img: './img/comederos/comedero-hamster.png'},
    { id: 4, nombre: "Comedero perro", tipo: "comedero", cantidad: 1, descripcion: "Comederos geniales para tu mascota", precio: 180000, img: './img/comederos/comedero-perro.png'},
];


/* Generando las i-cards para los productos dependiendo de las categorias*/
const contenedorComederos = document.getElementById('contenedorcomederos')

stockComederos.forEach((comedero) => {
    const div = document.createElement('div')
    div.classList.add('producto')
    div.innerHTML = `
    <img src=${comedero.img} alt="Comedero">
    <h3>${comedero.nombre}
    <p>${comedero.descripcion}</p>
    <p class="precioProducto">Precio:$ ${comedero.precio}</p>
    <button id="agregar${comedero.id}" class="boton-agregar">Agregar <i class="fa-regular fa-heart"></i></button>
    `
    contenedorComederos.appendChild(div)
});



/* INICIO DE PROGRAMACIÓN CARRITO DE COMPRAS*/
/*Creación del carrito de compras */
let carrito = [];

const agregarAlCarrito = (prodId) =>{
    const item =stockComederos.find((comederos) => comederos.id === prodId) /*Recorre el array StockComederos*/
    carrito.push(item) /* Agregar productos seleccionados al carrito, es decir , a la array carrito de la fila 29*/
    actualizarCarrito()
    console.log(carrito)
}

/*Actualizar carrito cuando se agreguen productos */
const contenedorCarrito = document.getElementById('carrito-contenedor')

const actualizarCarrito =() => {
    contenedorCarrito.innerHTML = ""

    carrito.forEach((prod) =>{
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        <p>${comedero.nombre}</p>
        <p>Precio: ${comedero.precio}</p>
        <p>Cantidad: <span id="cantidad">${comedero.cantidad}</span></p>
        <button onclick= "eliminarDelCarrito(${comederos.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></button>
        `
        contenedorCarrito.appendChild(div)

        localStorage.setItem('carrito', JSON.stringify(carrito) )
    })

    contadorCarrito.innerText = carrito.length /* Para que en el carrito se vea la cantidad de articulos*/
    precioTotal.innerText = carrito.reduce((acc, comederos) => acc + comederos.precio, 0)
}

/* Actualizar carrito cuando se eliminan productos */
const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((comederos) => comederos.id=== prodId)
    const indice = carrito.indexOf(item)
    carrito.splice(indice, 1)
    actualizarCarrito()
}


/* Funcionamiento del boton Vaciar Carrito*/
const botonVaciar = document.getElementById('vaciar-carrito')

botonVaciar.addEventListener('click', () =>{
    carrito.length = 0
    actualizarCarrito()
})

/* Contador del carrito, es decir que sume todos los artículos que se van adicionando al carrito*/
const contadorCarrito = document.getElementById('contadorCarrito')
const precioTotal = document.getElementById('precioTotal')

/* Llamamos el local storage, esto con el fin de almacenar los datos desde Javascript*/
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})

