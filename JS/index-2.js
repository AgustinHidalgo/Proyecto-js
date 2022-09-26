// aqui realizaremos el estudio y las pruebas de los conceptos

//ciclos y bucles
//empezamos con el for -> su estructura es for (desde, hasta, actualizacion) --> por lo general se usan numeros

console.log( "hola mundo");

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
console.log ("Este es el precio de la" + espaciado + productoA)






















// despues tenemos el while que sirve mas para bucles que no son numeros (aunque tambien se los puede usar con numeros) 