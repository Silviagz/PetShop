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
    <h3>${comedero.nombre}</h3>
    <p>${comedero.descripcion}</p>
    <p class="precioProducto">Precio:$ ${comedero.precio}</p>
    <button id="agregar${comedero.id}" class="boton-agregar">Agregar <i class="fa-regular fa-heart"></i></button>
    `
    contenedorComederos.appendChild(div)
});

/*Creación del carrito de compras */
let carrito = [];

const agregarAlCarrito = (prodId) =>{
    const item =stockProductos.find((prod) => prod.id ===prodId)
    carrito.push(item)
}
