/* alert("Bienvenido/a a heladeria Lia") */

/* alert("Hoy tenemos en stock los siguiente sabores de helados* \n -Dulce de leche a $600 \n -Chocolate a $600 \n -Americana a $550 \n -Crema del cielo a $500 \n Si no desea comprar ponga ESC \n *Solo tenemos baldes de 1/2 kilo por hoy") */

function Productos(nombre, precio, categoria){
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

        card.innerHTML = `<h3> ${producto.nombre} </h3> <p> Precio por 1/2 kilo: $${producto.precio} </p>`

        pDestacados.append(card)
    }
}

render(productos)

pDestacados.innerHTML = ""
let elegirCategoria = prompt("¿Que tipo helado le gustaria comprar?(Crema o Agua)")

let nuevoFiltro = productos.filter( (producto) => producto.categoria == elegirCategoria)

render(nuevoFiltro)

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