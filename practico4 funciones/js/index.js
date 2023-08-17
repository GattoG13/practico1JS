window.addEventListener("load", inicio);

function inicio() {
 // 1
 document.querySelector("#btnEj1").addEventListener("click", tomarValoresEj1);
 //  2
 document.querySelector("#btnEj2").addEventListener("click", tomarValoresEj2);
 //  3
 document.querySelector("#btnEj3").addEventListener("click", tomarValoresEj3);
 //  4
 document.querySelector("#btnEj4").addEventListener("click", tomarValoresEj4);
 //  5
 document.querySelector("#btnEj5").addEventListener("click", tomarValoresEj5);
 //  6
 document.querySelector("#btnEj6").addEventListener("click", tomarValoresEj6);
 //  7
 document.querySelector("#btnEj7").addEventListener("click", tomarValoresEj7);
 //  8
 document.querySelector("#btnEj8").addEventListener("click", tomarValoresEj8);
 // 9
 document.querySelector("#btnEj9").addEventListener("click", tomarValoresEj9);
}

// EJ1

function tomarValoresEj1() {
 let num1 = Number(document.querySelector("#txtEj1").value);
 let num2 = Number(document.querySelector("#txt2Ej1").value);
 let pares = retornarParesEj1(num1, num2);
 document.querySelector("#pEj1").innerHTML = pares;
}

// EJ2
function tomarValoresEj2() {
 let edad = Number(document.querySelector("#txtEj2").value);
 let tope = Number(document.querySelector("#txt2Ej2").value);
 let mayor = esMayorEj2(edad, tope);

 if (mayor) {
  document.querySelector("#pEj2").innerHTML = "es mayor al tope";
 } else {
  document.querySelector("#pEj2").innerHTML = "es menor al tope";
 }
}

//Ej3

function tomarValoresEj3() {
 let anio = Number(document.querySelector("#txtEj3").value);
 let anioBisiesto = esBisiesto(anio);

 if (anioBisiesto) {
  document.querySelector("#pEj3").innerHTML = "es bisiesto";
 } else {
  document.querySelector("#pEj3").innerHTML = "no es bisiesto";
 }
}

// Ej4

function tomarValoresEj4() {
 let base = Number(document.querySelector("#txtBaseEj4").value);
 let alto = Number(document.querySelector("#txtAlturaEj4").value);
 let area = calcularAreaTriangulo(base, alto);
 document.querySelector("#pEj4").innerHTML = "El area del triangulo es " + area;
}

// EJ5
function tomarValoresEj5() {
 let base = Number(document.querySelector("#txtAnchoEj5").value);
 let alto = Number(document.querySelector("#txtAlturaEj5").value);
 let area = calcularAreaRectangulo(base, alto);
 document.querySelector("#pEj5").innerHTML =
  "El area del rectangulo es " + area;
}

// EJ6

function tomarValoresEj6() {
 let temp = Number(document.querySelector("#txtTempEj6").value);
 let converF = calcularAFarenheit(temp);
 document.querySelector("#pEj6").innerHTML =
  "La temperatura en Farenheit es " + converF + " °";
}

// Ej7

function tomarValoresEj7() {
 let temp = Number(document.querySelector("#txtTempEj7").value);
 let medida = document.querySelector("#txtMedidaEj7").value;
 let conversionFaren = calcularTemperaturas(temp, medida);
 document.querySelector("#pEj7").innerHTML =
  "La temperatura es " + conversionFaren + " °";
}

// Ej8

function tomarValoresEj8() {
 let base = Number(document.querySelector("#txtEj8").value);
 let exponente = Number(document.querySelector("#txt2Ej8").value);
 let potencia = calcularPotencia(base, exponente);
 document.querySelector("#pEj8").innerHTML =
  base + "elevado a " + exponente + " = " + potencia;
}

// Ej9

function tomarValoresEj9() {
 let horas = Number(document.querySelector("#txtHorasEj9").value);
 let usuario = document.querySelector("#slcUsuarioEj9").value;
 let dias = Number(document.querySelector("#txtDiasEj9").value);
 let materiales = Number(document.querySelector("#txtMatsEj9").value);

 precioServicio = calcularPresupuesto(usuario, horas, dias);
 precioMateriales = calcularMateriales(materiales);
 precioFinal = precioServicio + precioMateriales;
 document.querySelector("#pEj9").innerHTML =
  "El costo del servicio es de " + precioFinal;
}
