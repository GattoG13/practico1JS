window.addEventListener("load", iniciar)

function iniciar () {
    // 1
    document.querySelector("#btnEj1").addEventListener("click", formatear)
    // 2
    document.querySelector("#btnEj2").addEventListener("click", sumar)
    // 3
    document.querySelector("#btnEj3").addEventListener("click", sumar3)
    // 4
    document.querySelector("#btnEj4").addEventListener("click", sumar4)
    // 5
    document.querySelector("#btnEj5").addEventListener("click", area)
    // 6
    document.querySelector("#btnEj6").addEventListener("click", conversion)
    // 7
    document.querySelector("#btnEj7").addEventListener("click", division)
    // 8
    document.querySelector("#btnEj8").addEventListener("click", sumar3ej8)
    // 9
    document.querySelector("#btnEj9").addEventListener("click", elevar)
    // 10
    document.querySelector("#btnEj10").addEventListener("click", importeRecargo)
    // 11
    document.querySelector("#btnEj11").addEventListener("click", importeSubTotal)
    // 12
    document.querySelector("#btnEj12").addEventListener("click", masaCorporal)
    // 13
    document.querySelector("#btnEj13").addEventListener("click", contador)
    // 14
    document.querySelector("#btnEj14").addEventListener("click", contadorTres)
    // 15
    document.querySelector("#btnEj15").addEventListener("click", contadorTexto)
    // 16
    document.querySelector("#btnEj16").addEventListener("click", partido)
}


// ejercicio 1
function formatear() {
   let nombre = document.querySelector("#txtEj1").value
   let apellido = document.querySelector("#txt2Ej1").value
   let nombreCompleto = nombre + " " + apellido
    document.querySelector("#pEj1").innerHTML = "El nombre completo es " +  nombreCompleto
}


// ejercicio 2
function sumar(){
   let suma1 = Number(document.querySelector("#txtEj2").value)
   let suma2 = Number(document.querySelector("#txt2Ej2").value)
   let suma = suma1 + suma2
    document.querySelector("#pEj2").innerHTML = "Resultado de la suma es " + suma
}



// ejercicio 3
function sumar3() {
    suma1Ej3 = Number(document.querySelector("#txt1Ej3").value)
    suma2Ej3 = Number(document.querySelector("#txt2Ej3").value)
    suma3Ej3 = Number(document.querySelector("#txt3Ej3").value)
    sumaEj3 = suma1Ej3 + suma2Ej3 + suma3Ej3
    document.querySelector("#pEj3").innerHTML = "Resultado de la suma es " + sumaEj3
}


// ejercicio 4
function sumar4() {
   let suma1Ej4 = Number(document.querySelector("#txt1Ej4").value)
   let suma2Ej4 = Number(document.querySelector("#txt2Ej4").value)
   let multi1Ej4 = Number(document.querySelector("#txt1Ej4").value)
   let multi2Ej4 = Number(document.querySelector("#txt2Ej4").value)
   let multiEj4 = multi1Ej4 * multi2Ej4
   let sumaEj4 = suma1Ej4 + suma2Ej4
    document.querySelector("#pEj4").innerHTML = "Resultado de la suma es " + sumaEj4 + " y el resultado de la multiplicacion es " + multiEj4
}


// ejercicio 5
function area() {
    let lado1 = Number(document.querySelector("#txtEj5").value)
    let area = lado1 * lado1
    document.querySelector("#pEj5").innerHTML = "El area es " + area
}

// ejercicio 6
function conversion() {
    let valorDolar = 41
    let valorPesos = Number(document.querySelector("#txtEj6").value)
    let conversion = valorPesos / valorDolar;
    document.querySelector("#pEj6").innerHTML = "La conversion es " + conversion.toFixed(2)
}

// ejercicio 7
function division(){
    let valor1 = Number(document.querySelector("#txt1Ej7").value)
    let valor2 = Number(document.querySelector("#txt2Ej7").value)
    let resto = valor1 % valor2
     document.querySelector("#pEj7").innerHTML = "El resto de la division es " + resto
 }

// ejercicio 8
function sumar3ej8(){
     let suma1Ej8 = Number(document.querySelector("#txt1Ej8").value)
     let suma2Ej8 = Number(document.querySelector("#txt2Ej8").value)
     let suma3Ej8 = Number(document.querySelector("#txt3Ej8").value)
     let sumaEj8 = suma1Ej8 + suma2Ej8 - suma3Ej8
        document.querySelector("#pEj8").innerHTML = "Resultado de la suma es " + sumaEj8
}

// ejercicio 9
function elevar(){
    let suma1Ej9 = Number(document.querySelector("#txt1Ej9").value)
    let suma2Ej9 = Number(document.querySelector("#txt2Ej9").value)
    let suma3Ej9 = Number(document.querySelector("#txt3Ej9").value)
    // DUDA: SUMA2 - SUMA3 no se puede entre ()
    let elevar = Math.pow(suma1Ej9, 2) - suma2Ej9 - suma3Ej9
    document.querySelector("#pEj9").innerHTML = "El resultado es: " + elevar;
}

// ejercicio 10

function importeRecargo() {
    let monto = Number(document.querySelector("#txt1Ej10").value)
    let recargo = Number(document.querySelector("#txt2Ej10").value)
    let importeTotal =  monto + monto * (recargo /100);
    document.querySelector("#pEj10").innerHTML = "El importe total es: " + importeTotal
}

// ejercicio 11

function importeSubTotal() {
    let monto = Number(document.querySelector("#txtEj11").value)
    let recargo = monto * (22/100)
    let importeTotal =  monto + recargo
    document.querySelector("#pEj11").innerHTML = "El importe total es: " + importeTotal
}

// ejercicio 12

function masaCorporal() {
    let masa = Number(document.querySelector("#txt1Ej12").value)
    let altura = Number (document.querySelector("#txt2Ej12").value)
    let imc = masa / Math.pow(altura, 2)
    document.querySelector("#pEj12").innerHTML = "El indice de masa corporal es: " + imc
}

// ejercicio 13
let cantidad = 0

function contador() {
    cantidad++;
    document.querySelector("#pEj13").innerHTML = "Contador: " + cantidad
}

// ejercicio 14

let cantidadTres = 0

function contadorTres() {
    cantidadTres = cantidadTres + 3;
    document.querySelector("#pEj14").innerHTML = "Contador: " + cantidadTres
}

// ejercicio 15

let cantidadTexto = 0

function contadorTexto() {
    // cantidadTexto = cantidadTexto + Number(document.querySelector("#txtEj15").value)
    cantidadTexto += Number(document.querySelector("#txtEj15").value)
    
    document.querySelector("#pEj15").innerHTML = cantidadTexto
}

// ejercicio 16

function partido() {
    let ganado = Number(document.querySelector("#txtEj16").value) * 3
    let empate = Number(document.querySelector("#txt2Ej16").value) * 1
    let resultado = ganado + empate
    document.querySelector("#pEj16").innerHTML = resultado
}
