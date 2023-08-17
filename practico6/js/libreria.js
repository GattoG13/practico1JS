//Funciones ej 1
function agregarAlArray(elemento, array) {
 array.push(elemento);
}

function contarLetrasElementosDeArray(palabras) {
 let cantidadLetrasPalabras = [];

 for (let i = 0; i < palabras.length; i++) {
  let cantidadLetras = palabras[i].length;
  cantidadLetrasPalabras.push(cantidadLetras);
 }
 return cantidadLetrasPalabras;
}

// ejercicio 3

function mayorNumero(numeros) {
 let max = Number.NEGATIVE_INFINITY;
 for (const numeroActual of numeros) {
  if (numeroActual > max) {
   max = numeroActual;
  }
 }
 return max;
}

// ejercicio 4

function calcularPromedio(array) {
 let suma = 0;
 for (let i = 0; i < array.length; i++) {
  suma += array[i];
 }
 let promedio = suma / array.length;
 return promedio;
}

// ejercicio 5

function sonMayoresAVeinte(arrayViejo) {
 let arrayNuevo = [];
 for (let i = 0; i < arrayViejo.length; i++) {
  if (arrayViejo[i] > 20) {
   arrayNuevo.push(arrayViejo[i]);
  }
 }
 return arrayNuevo;
}

// ejercicio 6
function repetido(string, array) {
 let existe = false;
 for (let i = 0; i < array.length; i++) {
  if (string === array[i]) {
   existe = true;
   break;
  }
 }
 return existe;
}

// ejercicio 7

function buscarElementoEnArray(array, elemento) {
 let elementoAbuscar = array.indexOf(elemento);
 return elementoAbuscar;
}

//Funcion para el ejercicio de completar el array con fibonacci

function completarFibonacci(array, longitud) {
 for (let i = 2; i < longitud; i++) {
  let nuevoNumero = array[i - 1] + array[i - 2];

  array.push(nuevoNumero);
 }
}

// ejercicio 9

function completarFibonacciHataMil(array) {
 for (let i = 2; array[i - 1] + array[i - 2] < 1000; i++) {
  let numeroNuevo = array[i - 1] + array[i - 2];

  array.push(numeroNuevo);
 }

 return array;
}
