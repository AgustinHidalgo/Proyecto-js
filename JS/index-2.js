// aqui realizaremos el estudio y las pruebas de los conceptos

//ciclos y bucles
//empezamos con el for -> su estructura es for (desde, hasta, actualizacion) --> por lo general se usan numeros

/* console.log( "hola mundo");

let espaciado = " "
let productoA = "Mesa"
let productoB = "Silla"
let productoC = "Lampara"

let precioProductoA = 100
let precioProductoB = 40
let precioProductoC = 25

let eligeProducto = prompt("Que producto esta buscando? \n Mesa \n Silla \n Lampara" )

let cantidad = prompt("Indique la cantidad:")

if(eligeProducto == "Mesa"){
    alert("El total de su compra es:" + precioProductoA * cantidad)}
else if(eligeProducto == "Silla"){
    alert("El total de su compra es:" + precioProductoB * cantidad)}
else if (eligeProducto == "Lampara"){
    alert("El total de su compra es:" + precioProductoC * cantidad)}
else{
    alert("Perdon no tenemos ese producto disponible")}

console.log("Final del Ejercicio")
/* class Producto{
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
        this.stock = 0;
    }
    restarStock(cantidad){
        this.stock -= cantidad
    }
} */
/* console.log ("Este es el precio de la" + espaciado + productoA) */ 



//console.log(productoC.stock)

/* for(const x in productoA){
    console.log(productoA[x])
} */


/* let nombreProductoB = 'Silla'
let precioProductoB = 10
let stockProductoB = 20 */

/* let nombreProductoC = 'Lampara'
let precioProductoC = 20
let stockProductoC = 50 */

/* function Producto(nombre, precio, stock){
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock || 0;
    this.restarStock = function(cantidad){
        this.stock -= cantidad
    }
    this.sumarStock = function(cantidad){
        this.stock += cantidad
    }
}


let productoA = new Producto("Mesa", 100, 20)
let productoB = new Producto("Silla", 10, 10)
let productoC = new Producto("Lampara", 20)
let precioTotal = 0 */

//let compra = prompt("Ingrese SI si quiere comprar: " + nombreProductoA + " y " + nombreProductoB)

/* alert("Estos son nuestros productos: \n - Mesa\n - Silla\n - Lampara") */

//Ciclo de compra con FOR

/* function calculoPrecio(cantidad, precio){
    precioTotal += (cantidad * precio)
}

function calculoStock(cantidad, stock, precio){
    if(cantidad <= stock){
        calculoPrecio(cantidad, precio)
    }
    else{
        alert("Actualmente tenemos " + stock + " unidades de este producto")
    }
}



let cantidadCompra = parseInt(prompt("Que cantidad de productos distintos quiere comprar:"))

for(let i = 0; i < cantidadCompra; i = i + 1){

    let productoCompra = prompt("Ingrese que producto quiere comprar: \n - Mesa\n - Silla\n - Lampara")
    
    if(productoCompra.toUpperCase() == 'MESA'){
        let cantidadProductoMesa = prompt("ingrese que cantidad de " + productoA.nombre + " desea comprar:")
        calculoStock(cantidadProductoMesa, productoA.stock, productoA["precio"])
        productoA.restarStock(cantidadProductoMesa)
    }
    else if(productoCompra == 'Silla'){
        let cantidadProductoSilla = prompt("ingrese que cantidad de " + productoB.nombre + " desea comprar:")
        calculoStock(cantidadProductoSilla, productoB.stock, precioProductoB)
        productoB.restarStock(cantidadProductoSilla)
    }
    else if(productoCompra == 'Lampara'){
        let cantidadProductoLampara = prompt("ingrese que cantidad de " + productoC.nombre + " desea comprar:")
        calculoStock(cantidadProductoLampara, stockProductoC, precioProductoC)
        productoC.restarStock(cantidadProductoLampara)
    }
    else{
        alert("No tenemos ese producto a la venta")
    }

} 

if(precioTotal != 0){
    alert("El precio total es: " + precioTotal)
}
else{
    alert("Gracias por su visita!")
}

 */

















// despues tenemos el while que sirve mas para bucles que no son numeros (aunque tambien se los puede usar con numeros) 