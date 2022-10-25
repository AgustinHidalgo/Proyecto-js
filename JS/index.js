/* alert("Bienvenido/a a heladeria Lia") */

/* alert("Hoy tenemos en stock los siguiente sabores de helados* \n -Dulce de leche a $600 \n -Chocolate a $600 \n -Americana a $550 \n -Crema del cielo a $500 \n Si no desea comprar ponga ESC \n *Solo tenemos baldes de 1/2 kilo por hoy") */

/* function Productos(nombre, precio, categoria){
    this.nombre = nombre;
    this.precio = precio;
    this.categoria = categoria;
}

let producto1 = new Productos ("Dulce de leche", 600, "crema");
let producto2 = new Productos ("Chocolate", 600, "crema");
let producto3 = new Productos ("Americana", 550, "crema");
let producto4 = new Productos ("Crema del cielo", 500, "crema");
let producto5 = new Productos ("Sandia", 420, "agua");
let producto6 = new Productos ("Frutilla", 440, "agua");
let producto7 = new Productos ("Maracuya", 390, "agua");

let productos = [producto1, producto2, producto3, producto4, producto5, producto6, producto7]

let pDestacados = document.getElementById("pDestacados")

function render (listas){
    
    for (const producto of listas) {
        
        let card = document.createElement("div")
        
        
        card.className = "card"

        card.innerHTML = `<h3> ${producto.nombre} </h3> <p> Precio por 1/2 kilo: $${producto.precio} </p> <button> Comprar </button>`
        card.button.setatributte
        pDestacados.append(card)
    }
}

render(productos)

pDestacados.innerHTML = ""
let elegirCategoria = prompt("¿Que tipo helado le gustaria comprar?(Crema o Agua)")

let nuevoFiltro = productos.filter( (producto) => producto.categoria == elegirCategoria)

render(nuevoFiltro) */

/* let precioTotal = 0

function calcularPrecio(cantidad, precio){
    precioTotal += (cantidad * precio)
    
}
let elegirSabor = prompt("¿Que helado le gustaria comprar?").toUpperCase()
while(elegirSabor != "ESC"){
    let cantidadDeHelado = prompt("¿Cuantos baldes le gustaria comprar de " + elegirSabor + "?")
    if(elegirSabor == "DULCE DE LECHE"){
        let totalDulceDeLeche = alert( "Su total a abonar es: " + cantidadDeHelado * producto1.precio)
        calcularPrecio(cantidadDeHelado, producto1.precio)
    }
    else if (elegirSabor == "CHOCOLATE"){
        let totalChocolate = alert("Su total a abonar es: " + cantidadDeHelado * producto2.precio)
        calcularPrecio(cantidadDeHelado, producto2.precio)
    }
    else if (elegirSabor == "AMERICANA"){
        let totalAmericana = alert("Su total a abonar es: " + cantidadDeHelado * producto3.precio)
        calcularPrecio(cantidadDeHelado, producto3.precio)
    }
    else if (elegirSabor == "CREMA DEL CIELO"){
        let totalCremaDelCielo = alert("Su total a abonar es: " + cantidadDeHelado * producto4.precio)
        calcularPrecio(cantidadDeHelado, producto4.precio)
    }
    else if (elegirSabor == "SANDIA"){
        let totalCremaDelCielo = alert("Su total a abonar es: " + cantidadDeHelado * producto5.precio)
        calcularPrecio(cantidadDeHelado, producto5.precio)
    }
    else if (elegirSabor == "FRUTILLA"){
        let totalCremaDelCielo = alert("Su total a abonar es: " + cantidadDeHelado * producto6.precio)
        calcularPrecio(cantidadDeHelado, producto6.precio)
    }
    else if (elegirSabor == "MARACUYA"){
        let totalCremaDelCielo = alert("Su total a abonar es: " + cantidadDeHelado * producto7.precio)
        calcularPrecio(cantidadDeHelado, producto7.precio)
    }
    else{
        alert("Si no desea comprar nada mas ponga ESC")
    }
    elegirSabor = prompt("¿Que helado le gustaria comprar?").toUpperCase()
    
    

}
if(precioTotal != 0){
    alert("El precio total es " + precioTotal)
}
else{
    alert("Gracias por su visita")
} */


const listaDeProductos = [
    {
        id: 1,
        nombre: "Dulce de leche",
        precio: 600,
        categoria: "crema"
    },
    {
        id: 2,
        nombre: "Chocolate",
        precio: 600,
        categoria: "crema"
    },
    {
        id: 3,
        nombre: "Americana",
        precio: 550,
        categoria: "crema",
    },
    {
        id: 4,
        nombre: "Crema del cielo",
        precio: 500,
        categoria: "crema"
    },
    {
        id: 5,
        nombre: "Sandia",
        precio: 420,
        categoria: "agua"
    },
    {
        id: 6,
        nombre: "Frutilla",
        precio: 440,
        categoria: "agua"
    },
    {
        id: 7,
        nombre: "Maracuya",
        precio: 390,
        categoria: "agua"
    }
]

let catalog = document.getElementById('items')
let cartList = document.getElementById('carrito')
let buttonEmpty = document.getElementById('boton-vaciar')
let totalValue = document.getElementById('total')
let cart = []

buttonEmpty.addEventListener('click', emptyButtonHandler)

loadCartFromStorage()
renderCart()


listaDeProductos.forEach((prod) => {
    let container = document.createElement('div')
    container.classList.add('card', 'col-sm-4')
    //Body
    let cardBody = document.createElement("div")
    cardBody.classList.add('card-body')
    //Title
    let cardTitle = document.createElement("h5")
    cardTitle.classList.add('card-title')
    cardTitle.innerText = prod.nombre
    //Precio
    let cardPrice = document.createElement("p")
    cardPrice.classList.add('card-text')
    cardPrice.innerText = `$${prod.precio}`
    //Stock
    let cardStock = document.createElement("p")
    cardStock.classList.add('card-text')
    cardStock.innerText = `Categoria: ${prod.categoria}`
    //Button
    let cardButton = document.createElement("button")
    cardButton.classList.add('btn', 'btn-primary')
    cardButton.innerText = `Comprar`
    cardButton.setAttribute('mark', prod.id)
    cardButton.addEventListener('click', addProdToCart)

    cardBody.append(cardTitle)
    cardBody.append(cardPrice)
    cardBody.append(cardStock)
    cardBody.append(cardButton)
    container.append(cardBody)
    catalog.append(container)
})

function addProdToCart(event){
    let id = event.target.getAttribute('mark')
    cart.push(id)
    renderCart()

    Toastify({
        text: `Agregaste correctamente el producto id: ${id} al carrito`,
        className: "info",
        duration: 5000,
        gravity: 'bottom'
    }).showToast();
}

function renderCart(){

    saveCartToStorage()

    cartList.innerHTML = ''

    let cartWithoutRepeatedElements = [...new Set(cart)]

    cartWithoutRepeatedElements.forEach((itemId) => {
        let item = listaDeProductos.filter((producto) => {
            return producto.id === parseInt(itemId)
        })
        let quantity = cart.reduce((total, id) => {
            return id === itemId ? total += 1 : total
        }, 0)
    

    let linea = document.createElement('li')
    linea.classList.add('list-group-item', 'text-right', 'mx-2')
    linea.innerText = `${quantity} x ${item[0].nombre} - $${item[0].precio}`

    let buttonDelete = document.createElement('button')
    buttonDelete.classList.add('btn', 'btn-danger', 'mx-5')
    buttonDelete.innerText = 'X'
    buttonDelete.dataset.item = itemId
    buttonDelete.addEventListener('click', deleteProduct)

    linea.append(buttonDelete)
    cartList.append(linea)
    })

    totalValue.innerText = calculateTotalPrice()
}

function deleteProduct(event){
let id = event.target.dataset.item
cart = cart.filter((cartId) => {
    return cartId != id
})
renderCart()
Swal.fire({
    title: "Eliminaste correctamente el producto!",
    icon: 'success'
})

}

function emptyButtonHandler(){
    cart = []
    cartList.innerHTML = ''
    totalValue.innerText = 0
}

function calculateTotalPrice(){
    return cart.reduce((total, itemId) => {
        let item = listaDeProductos.filter((producto) => {
            return producto.id === parseInt(itemId)
        })

        return total + item[0].precio
    }, 0)
}

function saveCartToStorage(){
    localStorage.setItem('cart', JSON.stringify(cart))
}

function loadCartFromStorage(){
    if(localStorage.getItem('cart') !== null){
        cart = JSON.parse(localStorage.getItem('cart'))
    }
}