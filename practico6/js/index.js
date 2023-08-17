window.addEventListener("load", inicio);

function inicio() {
 // ejercicio 1
 document.querySelector("#btnEj1Agregar").addEventListener("click", tomarDatos);
 document
  .querySelector("#btnEj1Mostrar")
  .addEventListener("click", mostrarResultado);
 // ejercicio 2
 document
  .querySelector("#btnEj2Agregar")
  .addEventListener("click", tomarDatosEj2);
 document
  .querySelector("#btnEj2Mostrar")
  .addEventListener("click", mostrarResultadoEj2);
 // ejercicio 3
 document.querySelector("#btn1Ej3").addEventListener("click", tomarDatosEj3);
 document.querySelector("#btn2Ej3").addEventListener("click", mostrarArrayEj3);
 // ejercicio 4
 document.querySelector("#btn1Ej4").addEventListener("click", tomarDatosEj4);
 document.querySelector("#btn2Ej4").addEventListener("click", mostrarArrayEj4);
 // ejercicio 5
 document.querySelector("#btn1Ej5").addEventListener("click", tomarDatosEj5);
 document.querySelector("#btn2Ej5").addEventListener("click", mostrarArrayEj5);
 // ejercicio 6
 document
  .querySelector("#btn1Ej6")
  .addEventListener("click", tomarDatosYMostrarEj6);
 // ejercicio 7
 document
  .querySelector("#btn1Ej7")
  .addEventListener("click", tomarDatosYMostrarEj7);
 document
  .querySelector("#btn2Ej7")
  .addEventListener("click", recorrerYMostrarPosicionEj7);
 document
  .querySelector("#btn3Ej7")
  .addEventListener("click", reemplazarNombreEj7);
 // ejercicio 8
 document
  .querySelector("#btnEj8")
  .addEventListener("click", completarArrayConFibonacci);
 // ejercicio 9
 document
  .querySelector("#btnEj9")
  .addEventListener("click", completarArrayConFibonacciHastaMil);
}

// ejercicio 1

let palabras = [];

function tomarDatos() {
 texto = document.querySelector("#txtEj1").value;
 agregarAlArray(texto, palabras);
}

function mostrarResultado() {
 let mensaje = "Mostrando los elementos del array numérico: [";

 let arrayCantidadLetrasEnPalabras = contarLetrasElementosDeArray(palabras);

 for (let i = 0; i < arrayCantidadLetrasEnPalabras.length; i++) {
  mensaje += arrayCantidadLetrasEnPalabras[i] + ", ";
 }

 mensaje += "]";
 document.querySelector("#pResultadoEj1").innerHTML = mensaje;
}

// ejercicio 2

let numerosArray = [];

function tomarDatosEj2() {
 let numero = Number(document.querySelector("#txtEj2").value);
 if (!isNaN(numero)) {
  agregarAlArray(numero, numerosArray);
 } else {
  alert("Ingrese un número");
 }
}

function mostrarResultadoEj2() {
 let mensaje = mayorNumero(numerosArray);
 document.querySelector(
  "#pResultadoEj2"
 ).innerHTML = `El numero mayor en el array [${numerosArray}] <br> es ${mensaje}`;
}

// ejercicio 3

let arrayPalabras = [];

function tomarDatosEj3() {
 let palabra = document.querySelector("#txtEj3").value;
 agregarAlArray(palabra, arrayPalabras);
}

function mostrarArrayEj3() {
 document.querySelector(
  "#pResultadoEj3"
 ).innerHTML = `El array es [${arrayPalabras}]`;
}

// ejercicio 4

let numerosAPromedio = [];

function tomarDatosEj4() {
 let numero = Number(document.querySelector("#txtEj4").value);
 if (!isNaN(numero)) {
  agregarAlArray(numero, numerosAPromedio);
 } else {
  document.querySelector("#pResultadoEj4").innerHTML = `Ingrese un numero!!`;
 }
}

function mostrarArrayEj4() {
 let promedio = calcularPromedio(numerosAPromedio);
 document.querySelector(
  "#pResultadoEj4"
 ).innerHTML = `El promedio de [${numerosAPromedio}] <br>
 es: ${promedio}`;
}

// ejercicio 5

let arrayViejo = [];

function tomarDatosEj5() {
 let numero = Number(document.querySelector("#txtEj5").value);
 if (!isNaN(numero)) {
  agregarAlArray(numero, arrayViejo);
 } else {
  document.querySelector("#pResultadoEj5").innerHTML = `Ingrese un numero!!`;
 }
}

function mostrarArrayEj5() {
 let nuevoArray = sonMayoresAVeinte(arrayViejo);
 document.querySelector(
  "#pResultadoEj5"
 ).innerHTML = `El array nuevo es: [${nuevoArray}]`;
}

// ejercicio 6

let arrayEmpresa = [];

function tomarDatosYMostrarEj6() {
 let nombreDeUsuario = document.querySelector("#txtEj6").value;
 let repetidoo = repetido(nombreDeUsuario, arrayEmpresa);

 if (!repetidoo) {
  agregarAlArray(nombreDeUsuario, arrayEmpresa);
  document.querySelector(
   "#pResultadoEj6"
  ).innerHTML = `Los nombres de usuario ingresados son: ${arrayEmpresa}`;
 } else {
  document.querySelector(
   "#pResultadoEj6"
  ).innerHTML = `El nombre de usuario ya existe`;
 }
}

// ejercicio 7
let arrayEj7 = [];

function tomarDatosYMostrarEj7() {
 let nombre = document.querySelector("#txtEj7").value;
 let repeated = repetido(nombre, arrayEj7);

 if (!repeated) {
  agregarAlArray(nombre, arrayEj7);
  document.querySelector(
   "#pResultadoEj7"
  ).innerHTML = `el array va: [${arrayEj7}] <br>`;
 } else {
  document.querySelector("#pResultadoEj7").innerHTML = `error, nombre repetido`;
 }
}

// [5, 8, 7]

function recorrerYMostrarPosicionEj7() {
 let posicion = Number(document.querySelector("#txt1Ej7").value); // 1

 if (!isNaN(posicion)) {
  if (posicion <= arrayEj7.length - 1) {
   document.querySelector(
    "#pResultadoEj7"
   ).innerHTML += `El valor de la posicion es: ${
    arrayEj7[posicion]
   }, la ultima posicion es ${arrayEj7.length - 1}`;
  } else {
   document.querySelector("#pResultadoEj7").innerHTML = `la posicion no existe`;
  }
 } else {
  document.querySelector(
   "#pResultadoEj7"
  ).innerHTML = `La posicion no es numerica, ingrese un numero`;
 }
}

function reemplazarNombreEj7() {
 let nombreABuscar = document.querySelector("#txt2Ej7").value;
 let nombreAReemplazar = document.querySelector("#txt3Ej7").value;
 let resultado = document.querySelector("#pResultadoEj7");

 let elemento = buscarElementoEnArray(arrayEj7, nombreABuscar);

 if (elemento !== -1) {
  arrayEj7[elemento] = nombreAReemplazar;
  resultado.innerHTML = `El nombre ${nombreABuscar} fue reemplazado por ${nombreAReemplazar}`;
 } else {
  resultado.innerHTML = `El nombre ${nombreABuscar} no existe en la lista;`;
 }
}

// ejercicio 8

let arrayFibonacci = [1, 1];

function completarArrayConFibonacci() {
 completarFibonacci(arrayFibonacci, 20);

 let resultado = "";

 for (let i = 0; i < arrayFibonacci.length; i++) {
  resultado += arrayFibonacci[i] + ", ";
 }

 document.querySelector(
  "#pResultadoEj8"
 ).innerHTML = `Los numeros del array de Fibonacci son:[ ${resultado} ] `;
}

// ejericio 9

let arrayFibonacciHataMil = [1, 1];

function completarArrayConFibonacciHastaMil() {
 let resultado = "";

 completarFibonacciHataMil(arrayFibonacciHataMil);

 for (let i = 0; i < arrayFibonacciHataMil.length; i++) {
  resultado += arrayFibonacciHataMil[i] + ",";
 }

 document.querySelector(
  "#pResultadoEj9"
 ).innerHTML = `Los numeros del array de Fibonacci menores que 1000 son: [ ${resultado} ]`;
}
