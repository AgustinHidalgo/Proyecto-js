alert("Bienvenido/a a heladeria Lia")

alert("Hoy tenemos en stock los siguiente sabores de helados* \n -Dulce de leche a $600 \n -Chocolate a $600 \n -Americana a $550 \n -Crema del cielo a $500 \n Si no desea comprar ponga ESC \n *Solo tenemos baldes de 1/2 kilo por hoy")

function Productos(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
}

let producto1 = new Productos ("Dulce de leche", 600);
let producto2 = new Productos ("Chocolate", 600);
let producto3 = new Productos ("Americana", 550);
let producto4 = new Productos ("Crema del cielo", 500);

let precioTotal = 0

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
}