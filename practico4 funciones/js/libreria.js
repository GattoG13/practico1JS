//Ej1
function retornarParesEj1(num1, num2) {
 let contadorPares = 0;
 if (!isNaN(num1) && !isNaN(num2)) {
  for (let i = num1; i <= num2; i++) {
   if (i % 2 === 0) {
    contadorPares++;
   }
  }
  return contadorPares;
 } else {
  alert("Ingrear numeros");
 }
}

//Ej2
function esMayorEj2(edad, tope) {
 if (!isNaN(edad) && !isNaN(tope)) {
  if (edad > tope) {
   return true;
  } else {
   return false;
  }
 } else {
  alert("Ingrese un dato valido");
 }
}

//Ej3

function esBisiesto(ano) {
 if (!isNaN(ano)) {
  if ((ano % 4 == 0 && ano % 100 != 0) || ano % 400 == 0) {
   return true;
  } else {
   return false;
  }
 }
}

//Ej4

function calcularAreaTriangulo(base, altura) {
 if (!isNaN(base) && !isNaN(altura)) {
  if (base >= 0 && altura >= 0) {
   return (base * altura) / 2;
  } else {
   alert("deben ser numero positivos");
  }
 } else {
  alert("ingrese numero");
 }
}

//Ej5

function calcularAreaRectangulo(base, altura) {
 if (!isNaN(base) && !isNaN(altura)) {
  if (base >= 0 && altura >= 0) {
   return base * altura;
  } else {
   alert("deben ser numero positivos");
  }
 } else {
  alert("ingrese numero");
 }
}

//Ej6

function calcularAFarenheit(tCelcius) {
 if (!isNaN(tCelcius)) {
  tFahrenheit = tCelcius * (9 / 5) + 32;
  return tFahrenheit.toFixed(0);
 }
}

//Ej7
function calcularTemperaturas(temp, uMedidaFinal) {
 let tFinal = 0;
 if (!isNaN(temp)) {
  if (uMedidaFinal === "ce") {
   tFinal += (temp - 32) / (9 / 5);
  } else if (uMedidaFinal === "ke") {
   tFinal += (temp + 459.67) / (9 / 5);
  } else if (uMedidaFinal === "ra") {
   tFinal += temp + 459.67;
  } else if (uMedidaFinal === "re") {
   tFinal += (temp - 32) / (9 / 4);
  }
  return tFinal.toFixed(0);
 }
}

// Ej8

function calcularPotencia(base, exponente) {
 let base2 = 0;
 if (!isNaN(base) && !isNaN(exponente)) {
  base2 = base ** exponente;
 } else {
  alert("Ingrese un dato valido");
 }
 return base2;
}

//Ej8 con repetitiva

function calcularPotenciaFOR(base, exponente) {
 let resultado = 1;
 if (!isNaN(base) && !isNaN(exponente)) {
  for (let i = 0; i < exponente; i++) {
   resultado *= base;
  }
 } else {
  alert("Ingrese un dato valido");
 }
 return resultado;
}

//Ej 9
function nPositivo(valor) {
 if (!isNaN(valor) && valor > 0) {
  return true;
 } else {
  return false;
 }
}

function calcularPresupuesto(cAsiste, cHoras, cDias) {
 let precio = 0;
 if (nPositivo(cHoras) && nPositivo(cDias)) {
  if (cAsiste === "no") {
   precio = 200 * cHoras * cDias;
  }
  if (cAsiste === "si") {
   precio = (200 + 150) * cHoras * cDias;
  }
 } else {
  alert("Ingrese un numero valido");
 }
 return precio;
}

function calcularMateriales(materiales) {
 let precioM = 0;
 if (nPositivo(materiales)) {
  precioM = materiales * 0.1;
 } else {
  alert("Ingrese un numero valido");
 }
 return precioM;
}
