window.addEventListener("load", inicio)

function inicio() {
    // 1
    document.querySelector("#btnEj1").addEventListener("click", ej1)
    // 2
    document.querySelector("#btnEj2").addEventListener("click", ej2)
    // 3 
    document.querySelector("#btnEj3").addEventListener("click", ej3)
    // 4
    document.querySelector("#btnEj4").addEventListener("click", ej4)
    // 5
    document.querySelector("#btnEj5").addEventListener("click", ej5)
    // 6
    document.querySelector("#btnEj6").addEventListener("click", ej6)
    // 7
    document.querySelector("#btnEj7").addEventListener("click", ej7)
    // 8
    document.querySelector("#btnEj8").addEventListener("click", ej8)
    // 9
    document.querySelector("#btnEj9").addEventListener("click", ej9)
    // 10
    document.querySelector("#btnEj10").addEventListener("click", ej10)
    // 11
    document.querySelector("#btnEj11").addEventListener("click", ej11)
    // 12
    document.querySelector("#btnEj12").addEventListener("click", ej12)
    // 13
    document.querySelector("#btnEj13").addEventListener("click", ej13)
    // 14
    document.querySelector("#btnEj14").addEventListener("click", ej14)
    // 15
    document.querySelector("#btnEj15").addEventListener("click", ej15)
    // 16
    document.querySelector("#btnEj16").addEventListener("click", ej16)
    // 17
    document.querySelector("#btnEj17").addEventListener("click", ej17)
    // 18
    document.querySelector("#btnEj18").addEventListener("click", ej18)
    // 19
    document.querySelector("#btnEj19").addEventListener("click", ej19)
    // 20
    document.querySelector("#btnEj20").addEventListener("click", ej20)
    // 21
    document.querySelector("#btnEj21").addEventListener("click", ej21)
    // 22
    document.querySelector("#btnEj22").addEventListener("click", ej22)
    // 23
    document.querySelector("#btnEj23").addEventListener("click", ej23)
    // 24
    document.querySelector("#btnEj24").addEventListener("click", ej24)
    // 25
    document.querySelector("#btnEj25").addEventListener("click", cargaStockInicial)
    document.querySelector("#btn2Ej25").addEventListener("click", ej25p2)
    // disabled
    document.querySelector("#btn2Ej25").setAttribute("disabled", "disabled")
    document.querySelector("#txt3Ej25").setAttribute("disabled", "disabled")
    document.querySelector("#txt2Ej25").setAttribute("disabled", "disabled")
    // ejercicio 26
    document.querySelector("#btnEj26").addEventListener("click", ej26)
}
// ejercicio 1
function ej1() {
    let numero = Number(document.querySelector("#txtEj1").value)
    let resultado;
    if(numero >= 0){
     resultado = "El numero es positivo"
    } else {
        resultado = "El numero es negativo"
    }
    document.querySelector("#pEj1").innerHTML = resultado
}
// ejercicio 2
function ej2() {
    let numero = Number(document.querySelector("#txtEj2").value)
    if(numero > 10){
        document.querySelector("#pEj2").innerHTML = "el numero es mayor que diez"
    } else {
        document.querySelector("#pEj2").innerHTML = "el numero no es mayor que diez"
    }
}
// ejercicio 3
function ej3() {
    let numero = Number(document.querySelector("#txtEj3").value)
    if(numero >= 20){
        alert("MAYOR O IGUAL QUE 20")
    } else {
        alert("MENOR QUE 20")
    }
}
// ejercicio 4
function ej4() {
    let numero = Number(document.querySelector("#txtEj4").value)
    let resultado;
    if(numero < 0){
        resultado = numero * (-1)
    } else {
        resultado = numero
    }
    document.querySelector("#pEj4").innerHTML = resultado
}
// ejercicio 5
function ej5() {
    let numero = Number(document.querySelector("#txtEj5").value)
    let resultado;
    if(numero > 10 && numero < 20){
        resultado = "Mayor que 10 y menor que 20"
    } else {
        resultado = "No es mayor que 10 ni menor que 20"
    }
    document.querySelector("#pEj5").innerHTML = resultado
}
// ejercicio 6
function ej6() {
    let numero = Number(document.querySelector("#txtEj6").value)
    let resultado;
    if(numero % 7 === 0 && numero % 3 === 0){
        resultado = "SI ES MULTIPLO ENTRE 7 y 3"
    } else {
        resultado = "NO ES MULTIPLO ENTRE 7 NI DE 3"
    }
    document.querySelector("#pEj6").innerHTML = resultado
}
// ejercicio 7
function ej7() {
    let numero = Number(document.querySelector("#txtEj7").value)
    let resultado;
    if(numero < -20 || numero > 20){
        resultado = "CUMPLE"
    } else {
        resultado = "NO CUMPLE"
    }
    document.querySelector("#pEj7").innerHTML = resultado
}

// ejercicio 8

function ej8() {
    let numero = Number(document.querySelector("#txtEj8").value)
    let resultado;
    if(numero > 30){
        resultado = "ES MAYOR QUE TREINTA"
    } else if(numero < 10){
        resultado = "ES MENOR QUE DIEZ"
    } else {
        resultado = "ENTRE DIEZ Y 30"
    }
    document.querySelector("#pEj8").innerHTML = resultado

}

// ejercicio 9

function ej9(){
    let dia = document.querySelector("#slc2Ej9").value
    let temperatura = document.querySelector("#slcEj9").value
    let abrigo;
    let trabaja;
    if(dia !== "do"){
        trabaja = "Ir al trabajo"
    } else {
        trabaja = "Quedarse en casa, hoy no trabaja"
    }
    if(temperatura === "frio"){
        abrigo = "Abrigarse mucho"
    } else if(temperatura === "calor"){
        abrigo = "Ponerse ropa comoda"
    } else {
        abrigo = "Abrigo moderado"
    }

    document.querySelector("#pEj9").innerHTML = `Levantarse <br>
    ${abrigo} <br>
    ${trabaja}
    `
}

// ejercicio 10

function ej10() {
    let numero = Number(document.querySelector("#txtEj10").value)
    let numero2 = Number(document.querySelector("#txt2Ej10").value)
    let resultado;
    if(numero > numero2){
        resultado = numero - numero2
    } else {
        resultado = numero2 - numero
    }
    document.querySelector("#pEj10").innerHTML = resultado
}
// ejercicio 11

function ej11() {
    let numero = Number(document.querySelector("#txtEj11").value)
    let numero2 = Number(document.querySelector("#txt2Ej11").value)
    let operacion = document.querySelector("#slcEj11").value
    let resultado;
    switch(operacion){
        case "S":
                resultado = numero + numero2
            break
        case "R":
                resultado = numero - numero2
            break
        case "M":
                resultado = numero * numero2
            break
        case "D":
                resultado = numero / numero2
            break
        default:
            }
    document.querySelector("#pEj11").innerHTML = resultado
}

function ej12() {
    let letra = document.querySelector("#txtEj12").value
    let resultado;
    switch(letra){
        case "a":
        case "A":
        case "e":
        case "E":
        case "i":
        case "I":
        case "o":
        case "O":
        case "u":
        case "U":
                resultado = "ES VOCAL"
            break
        default:
                resultado = "NO ES VOCAL"
            break
          }
    document.querySelector("#pEj12").innerHTML = resultado
}

// ejercicio 13

function ej13(){
    let numero = Number(document.querySelector("#txtEj13").value)
    let numero2 = Number(document.querySelector("#txt2Ej13").value)

    if(numero % numero2 === 0){
        document.querySelector("#pEj13").innerHTML = "El numero es multiplo"
    } else {
        document.querySelector("#pEj13").innerHTML = "El numero no es multiplo"
    }
}

// ejercicio 14

let millas = 0

function ej14(){
    millas = Number(document.querySelector("#txtEj14").value)
    let plan = document.querySelector("#slcEj14").value
   
    if(plan === "si"){
        millas = millas * 2
    }

    if(millas >= 60000) {
        document.querySelector("#pEj14").innerHTML = "Puede viajar a Europa como destino mas lejano"
    } else if (millas >= 30000){
        document.querySelector("#pEj14").innerHTML = "Puede viajar a America del Norte como destino mas lejano"
    }else if (millas >= 15000){
        document.querySelector("#pEj14").innerHTML = "Puede viajar a America del Sur como destino mas lejano"
    } else{
        document.querySelector("#pEj14").innerHTML = "No tiene millas suficientes"
    }
}

// ejercicio 15
function ej15(){
    let depto = document.querySelector("#slcEj15").value
    let deptoShow;
    switch(depto){
        case "A":
        deptoShow = "Canelones"
        break
        case "B":
        deptoShow = "Maldonado"
        break
        case "C":
        deptoShow = "Rocha"
        break
        case "D":
        deptoShow = "Treinta y Tres"
        break
        case "E":
        deptoShow = "Cerro Largo"
        break
        case "F":
        deptoShow = "Rivera"
        break
        case "G":
        deptoShow = "Artigas"
        break
        case "H":
        deptoShow = "Salto"
        break
        case "I":
        deptoShow = "Paysandú"
        break
        case "J":
        deptoShow = "Rio Negro"
        break
        case "K":
        deptoShow = "Soriano"
        break
        case "L":
        deptoShow = "Colonia"
        break
        case "M":
        deptoShow = "San Jose"
        break
        case "N":
        deptoShow = "Flores"
        break
        case "O":
        deptoShow = "Florida"
        break
        case "P":
        deptoShow = "Lavalleja"
        break
        case "Q":
        deptoShow = "Durazno"
        break
        case "R":
        deptoShow = "Tacuarembó"
        break
        case "S":
        deptoShow = "Montevideo"
        break
    }
    document.querySelector("#pEj15").innerHTML = `El departamento elegido es ${deptoShow}`
}

// ejercicio 16

function ej16() {
    let a = Number(document.querySelector("#txtEj16").value)
    let b = Number(document.querySelector("#txt2Ej16").value)
    let c = 4
    let resultado;

    if(a > b && a > c){
        resultado = " A es el mas grande"
    } else {
        resultado = "A no es el mas grande"
    }

document.querySelector("#pEj16").innerHTML = resultado
}

// ejercicio 17

function ej17(){
    let a = Number(document.querySelector("#txtEj17").value)
    let resultado;

    if(a < 0 || a > 10){
        resultado = " A esta fuera del rango"
    } else {
        resultado = "A esta en rango"
    }

    document.querySelector("#pEj17").innerHTML = resultado
}

// ejercicio 18
let resultado = 0
let contador = 0

function ej18(){
    let valor = Number(document.querySelector("#txtEj18").value)
    contador ++
    if(contador < 7) {
        if(valor < 0){
        valor *= -1
    }
    resultado += valor
    }
    if(contador === 6){
    document.querySelector("#pEj18").innerHTML = resultado     
    document.querySelector("#txtEj18").setAttribute("disabled", "disabled")
    document.querySelector("#btnEj18").setAttribute("disabled", "disabled") 
}
}   
// ejercicio 19
let multiplo5 = 0
let mayorA20 = 0
let mayorYmultiplo = 0

function ej19(){
    let valor = Number(document.querySelector("#txtEj19").value)
    contador ++

    if(valor % 5 === 0) {
        multiplo5 ++
    }
    if(valor > 20) {
        mayorA20 ++
    }
    if(valor % 5 === 0 && valor > 20) {
        mayorYmultiplo ++
    }

    if(contador === 5){
    document.querySelector("#pEj19").innerHTML = `Los multiplos de 5 fueron ${multiplo5} <br>
    Los mayores a 20 fueron ${mayorA20} <br>
    Los multiplos de 5 y mayores a 20 fueron ${mayorYmultiplo}`     
    document.querySelector("#txtEj19").setAttribute("disabled", "disabled")
    document.querySelector("#btnEj19").setAttribute("disabled", "disabled") 
}
}    

// ejercicio 20
let minimo = Number.POSITIVE_INFINITY

function ej20(){
    let azucar = Number(document.querySelector("#txtEj20").value)
    let harina = Number(document.querySelector("#txt2Ej20").value) / 100
    let aceite = Number(document.querySelector("#txt3Ej20").value)
    let agua = Number(document.querySelector("#txt4Ej20").value)
    
    if (agua < minimo) {
        minimo = agua
    } 

    if (aceite < minimo) {
        minimo = aceite
    }

    if (azucar < minimo){
        minimo = azucar
    }

    if (harina < minimo){
        minimo = harina
    }

    document.querySelector("#pEj20").innerHTML = "tenemos para hacer " + minimo + " recetas" 
} 

// ejercicio 21
function ej21(){
    let ingreso = Number(document.querySelector("#txtEj21").value)
    let casa = Number(document.querySelector("#txt2Ej21").value)
    let primerPago;
    let restoPago;
    let cuotas;

    if(ingreso < 20000){
        cuotas = 86
        primerPago = casa * (0.015)
        restoPago = (casa - primerPago)/cuotas 
    } else if (ingreso > 20000){
        cuotas = 12
        primerPago = casa * (0.030)
        restoPago = (casa - primerPago)/ cuotas

    }

    document.querySelector("#pEj21").innerHTML = `El comprador debe pagar ${primerPago} en el primer pago y ${restoPago.toFixed(0)} por cada pago parcial, durante ${cuotas} meses`
}

// ejercicio 22

const DESCUENTO = 4

function ej22() {
    let montoFinal;
    let medio;
    let montoIngresado = Number(document.querySelector("#txtEj22").value)
    let tarjeta = document.querySelector("#slcEj22").value
    
    if(tarjeta === "si"){
        medio = "tarjeta"
    }else {
        medio = efectivo
    }
    if(montoIngresado < 10000 && tarjeta === "si"){
        montoFinal = montoIngresado * ((100-DESCUENTO)/100);
    } else {
        montoFinal = montoIngresado
    }
    document.querySelector("#pEj22").innerHTML = `El monto original es ${montoIngresado} <br> 
    El pago se hizo con ${medio} y el monto final es ${montoFinal}`
}

// ejercicio 23 

let sumatoriaNotas = 0;
let contadorNotas = 0;
let buenaNota = 0;
let salvado = 0;
let perdido = 0;
let promedio;
let notaMinima = Number.POSITIVE_INFINITY;
let notaMaxima = Number.NEGATIVE_INFINITY;

function ej23() {
  let nota = Number(document.querySelector("#txtEj23").value);

  if (!isNaN(nota)) {
    sumatoriaNotas += nota;
    contadorNotas++;
    promedio = sumatoriaNotas / contadorNotas;

    if (nota > 90) {
      buenaNota++;
    }

    if (nota >= 70) {
      salvado++;
    } else {
      perdido++;
    }

    if (nota < notaMinima) {
      notaMinima = nota;
    }
    if (nota > notaMaxima) {
      notaMaxima = nota;
    }
  } else {
    document.querySelector("#pEj23").innerHTML =
      "Debes ingresar un número";
  }

  document.querySelector(
    "#pEj23"
  ).innerHTML = `Resultado: perdieron:${perdido}, salvaron:${salvado} y sacaron una muy buena nota: ${buenaNota}. Promedio de notas: ${promedio.toFixed(0)}, nota máxima: ${notaMaxima} y la nota mínima: ${notaMinima}`;
}


// ejercicio 24
let totalSueldos = 0;
let cantidadEmpleados = 0;
let sueldoMaximo = Number.NEGATIVE_INFINITY
let sueldoMinimo = Number.POSITIVE_INFINITY


function ej24() {
    let sueldo = Number(document.querySelector("txtEj24").value)
    cantidadEmpleados ++;
    totalSueldos += sueldo

    if(sueldoMaximo < sueldo){
        sueldoMaximo = sueldo
    }

    if(sueldoMinimo > sueldo){
        sueldoMinimo = sueldo
    }
    document.querySelector("#pEj24").innerHTML = `El sueldo total es ${totalSueldos} <br>
       El numero de empleados es ${cantidadEmpleados} <br>
       El sueldo maximo es ${sueldoMaximo}<br>
       El sueldo maximo es ${sueldoMinimo}`
}

// ejercicio 25

let stockRestante;
let cantidadCompras = 0
let cantidadMayorCompra = 0
let clienteMasPillo;

function cargaStockInicial() {
    let stockInicial = Number(document.querySelector("#txtEj25").value)
    stockRestante = stockInicial

    // removiendo los disabled
    document.querySelector("#txt2Ej25").removeAttribute("disabled")
    document.querySelector("#txt3Ej25").removeAttribute("disabled")
    document.querySelector("#btn2Ej25").removeAttribute("disabled")

    // agregando disableds al stock 
    document.querySelector("#txtEj25").setAttribute("disabled", "disabled")
    document.querySelector("#btnEj25").setAttribute("disabled", "disabled")
}

function ej25p2(){
    let nombreUsuario;
   let cantidadCamarasAComprar = Number(document.querySelector("#txt2Ej25").value)
    if (cantidadCamarasAComprar <= stockRestante) {
        nombreUsuario = document.querySelector("#txt3Ej25").value
        cantidadCompras ++;
        stockRestante -= cantidadCamarasAComprar

        if(cantidadCamarasAComprar > cantidadMayorCompra){
            cantidadMayorCompra = cantidadCamarasAComprar
            clienteMasPillo = nombreUsuario
        }

        if(stockRestante === 0){
            document.querySelector("#txt2Ej25").setAttribute("disabled", "disabled")
        }
        document.querySelector("#pEj25").innerHTML = `cantidad de compras: ${cantidadCompras}<br>
        Stock restante: ${stockRestante}<br> 
        Cantidad máxima de camaras en una compra fue de: ${cantidadMayorCompra}<br>
        y las compro: ${clienteMasPillo}`


    } else {
        document.querySelector("#pEj25").innerHTML = "No hay camaras suficiente"
    }
}


function ej26(){
    let noches = Number(document.querySelector("#txtEj26").value)
    let tarjeta = document.querySelector("#slcEj26").value
    let nochesRegaladas = 0
    let nochesTotales = 0
    let costoTotal = 0
    let costoXNoche = 40
    let medio;

    if(tarjeta === "si"){
        medio = "tarjeta"
        nochesRegaladas++
    } else {
        medio = "efectivo"
    }
  

    if(!isNaN(noches)){
    if(noches >= 3 && noches < 7){
        nochesRegaladas += 1;
    } else if(noches >= 7) {
        nochesRegaladas += 2
    }

    nochesTotales = noches + nochesRegaladas
    costoTotal = noches * costoXNoche

      
    document.querySelector("#pEj26").innerHTML = `El cliente pago ${noches} noches con ${medio} ---> hay ${nochesRegaladas} noches regaladas, se hospeda ${nochesTotales} noche/s con un costo total de ${costoTotal}.`
    } else{
        alert("INGRESE UN NUMERO!")
    }

}