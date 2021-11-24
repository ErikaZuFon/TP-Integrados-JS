

const cantidadDeEntradas= document.getElementById('cantidad')

const categoria = document.getElementById('autoSizingSelect')

const totalPagar = document.getElementById ('totalapagar')

const botonCalcular= document.getElementById('botoncalcular')


function resumen(){

var Entrada = 200
var Descuento = 0


console.log(categoria.value)
console.log(cantidadDeEntradas.value)

cantidadDeEntradas.value

totalPagar.value=Entrada*cantidadDeEntradas.value
console.log(totalPagar.value)

if(categoria.value == "estudiante"){
    Descuento=(totalPagar.value*80)/100
} else
    if(categoria.value == "trainee"){
    Descuento=(totalPagar.value*50)/100
}else
    if(categoria.value == "junior"){
    Descuento=(totalPagar.value*15)/100
}

console.log(Descuento)

totalPagar.value=totalPagar.value-Descuento

console.log(totalPagar.value)

totalPagar.innerHTML = "Total a pagar: $ " + totalPagar.value

}

function borrarTotal(){
    totalPagar.innerHTML = "Total a pagar: $ "
}
