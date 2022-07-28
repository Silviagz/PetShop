const contenedorCarro = document.getElementsByClassName('modelo-carrito')[0]
const botonAbrir = document.getElementById('boton-carrito')
const botonCerrar = document.getElementById('carritoCerrar')
const modalCarrito = document.getElementsByClassName('carrito-compras')[0]

/* Funciones para que se muestre y se oculte la ventana emergente del carrito */
botonAbrir.addEventListener('click', ()=>{
    contenedorCarro.classList.toggle('modal-active')
});

botonCerrar.addEventListener('click', ()=>{
    contenedorCarro.classList.toggle('modal-active')
});

contenedorCarro.addEventListener('click', (event) =>{
    contenedorCarro.classList.toggle('modal-active')
});

modalCarrito.addEventListener('click', (event) =>{
    event.stopPropagation()
});