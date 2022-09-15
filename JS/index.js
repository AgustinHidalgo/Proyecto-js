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






//let nombre = "Homero"
//let apellido = "Simpsons"
//let edad = 39 

//console.log("Este es mi nombre"+ espaciado + nombre + ",")
//console.log("este mi apellido" + espaciado + apellido)
//console.log("Y esta mi edad" + espaciado + edad)

//const ciudad1 = "Springfield"
//const ciudad2 = "Shelbyville"
//const ciudad3 = "Capital City"
//const ciudad4 = "Cypress Creek"
//const ciudad5 = "Ogdenville"

//console.log(ciudad1 + espaciado + "esta es la ciudad de" + espaciado + nombre)
//console.log (ciudad2)
//console.log (ciudad3)
//console.log(ciudad4)
//console.log(ciudad5)


//let persona    = "BART SIMPSON"
//let domicilio  = "742 EVERGREEN"
//let pais       = "USA"
//let nacimiento = "02-11-70"
//const codigo   = "B47U89RE243"
//let carnet ="Codigo:" + espaciado + codigo + espaciado +
            //"Nombre:" + espaciado + persona + espaciado +
            //"Pais:" + espaciado + pais + espaciado +
            //"Nacimiento:" + espaciado + nacimiento + espaciado +
            //"Domicilio:" + espaciado + domicilio; 

//alert(carnet)