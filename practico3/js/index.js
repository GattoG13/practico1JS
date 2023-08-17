window.addEventListener("load", inicio);

function inicio() {
 // 1
 document.querySelector("#btnEj1For").addEventListener("click", ej1For);
 document.querySelector("#btnEj1While").addEventListener("click", ej1While);
 document.querySelector("#btnEj1DoWhile").addEventListener("click", ej1DoWhile);
 // 2
 document.querySelector("#btnEj2For").addEventListener("click", ej2For);
 document.querySelector("#btnEj2While").addEventListener("click", ej2While);
 document.querySelector("#btnEj2DoWhile").addEventListener("click", ej2DoWhile);
 // 3
 document.querySelector("#btnEj3For").addEventListener("click", ej3For);
 document.querySelector("#btnEj3While").addEventListener("click", ej3While);
 document.querySelector("#btnEj3DoWhile").addEventListener("click", ej3DoWhile);
 // 4
 document.querySelector("#btnEj4").addEventListener("click", ej4);
 // 5
 document.querySelector("#btnEj5").addEventListener("click", ej5);
 // 6
 document.querySelector("#btnEj6").addEventListener("click", ej6);
 // 7
 document.querySelector("#btnEj7").addEventListener("click", ej7);
 // 8
 document.querySelector("#btnEj8").addEventListener("click", ej8);
 //  9
 document.querySelector("#btnEj9").addEventListener("click", ej9);
 //  10
 document.querySelector("#btnEj10").addEventListener("click", ej10);
 //  11
 document.querySelector("#btnEj11").addEventListener("click", ej11);
 //  12
 document.querySelector("#btnEj12").addEventListener("click", ej12);
 // 13
 document.querySelector("#btnEj13").addEventListener("click", ej13);
 // 14
 document.querySelector("#btnEj14").addEventListener("click", ej14);
 // 15
 document.querySelector("#btnEj15").addEventListener("click", ej15);
 // 16
 document.querySelector("#btnEj16").addEventListener("click", ej16);
 // 17
 document.querySelector("#btnEj17").addEventListener("click", ej17);
}
// ejercicio 1

function ej1For() {
 let resultado = "for <br>";
 for (let i = 1; i <= 1000; i++) {
  resultado += i + " ";
  // console.log(i);
 }
 document.querySelector("#pEj1").innerHTML = resultado;
}

function ej1While() {
 let resultado = "while <br>";
 let i = 1;
 while (i <= 1000) {
  resultado += i + " ";
  i++;
  // console.log(i);
 }
 document.querySelector("#pEj1").innerHTML = resultado;
}

function ej1DoWhile() {
 let i = 1;
 let resultado = "do while <br> ";
 do {
  resultado += i + " ";
  i++;
 } while (i <= 1000);
 document.querySelector("#pEj1").innerHTML = resultado;
 //   console.log(i);
}

// ejercicio 2
function ej2For() {
 let resultado = "for <br> ";
 for (let i = -100; i <= 10; i++) {
  resultado += i + " ";
 }
 document.querySelector("#pEj2").innerHTML = resultado;
 //   console.log(i);
}

function ej2While() {
 let resultado = "while <br> ";
 let i = -100;
 while (i <= 10) {
  resultado += i + " ";
  i++;
 }
 document.querySelector("#pEj2").innerHTML = resultado;
 //   console.log(i);
}

function ej2DoWhile() {
 let resultado = "do while <br>";
 let i = -100;
 do {
  resultado += i + " ";
  i++;
 } while (i <= 10);
 document.querySelector("#pEj2").innerHTML = resultado;
 //   console.log(i);
}

// ejercicio 3

function ej3For() {
 let resultado = "for <br>";
 for (let i = 40; i >= 10; i--) {
  resultado += i + " ";
 }
 document.querySelector("#pEj3").innerHTML = resultado;
 //   console.log(i);
}

function ej3While() {
 let resultado = "while <br>";
 let i = 40;
 while (i >= 10) {
  resultado += i + " ";
  i--;
 }
 document.querySelector("#pEj3").innerHTML = resultado;
 //   console.log(i);
}

function ej3DoWhile() {
 let resultado = "do while <br>";
 let i = 40;
 do {
  resultado += i + " ";
  i--;
 } while (i >= 10);
 document.querySelector("#pEj3").innerHTML = resultado;
 //   console.log(i);
}

function ej4() {
 let resultado = "";
 let i = 20;
 while (i >= -30) {
  resultado += i + " ";
  i--;
 }
 document.querySelector("#pEj4").innerHTML = resultado;
 //   console.log(i);
}

// ejercicio 5

function ej5() {
 let resultado = "";
 for (let i = 1; i <= 450; i++) {
  if (i % 5 === 0) {
   resultado += i + " ";
  }
 }
 document.querySelector("#pEj5").innerHTML = resultado;
 //   console.log(i);
}

// ejercicio 6

function ej6() {
 let resultado = "";
 for (let i = -33; i < 230; i++) {
  if (i % 4 === 0) {
   resultado += i + " ";
  }
 }
 document.querySelector("#pEj6").innerHTML = resultado;
 // console.log(i);
}

// ejercicio 7

function ej7() {
 let guiones = Number(document.querySelector("#txtEj7").value);
 let resultado = "";
 if (!isNaN(guiones)) {
  for (let i = 0; i < guiones; i++) {
   resultado += "-";
  }
 } else {
  alert("Ingrese un numero valido");
 }
 document.querySelector("#pEj7").innerHTML = resultado;
}

// ejercicio 8
function ej8() {
 let numero1 = Number(document.querySelector("#txtEj8").value);
 let numero2 = Number(document.querySelector("#txt1Ej8").value);
 let invertir;
 let resultado = "";
 if (numero1 > numero2) {
  invertir = numero2;
  numero2 = numero1;
  numero1 = invertir;
 }

 if (!isNaN(numero1) && !isNaN(numero2)) {
  for (let i = numero1; i <= numero2; i++) {
   resultado += i + " ";
  }
 } else {
  alert("Ingrese un numero valido");
 }
 document.querySelector("#pEj8").innerHTML = resultado;
}

// ejercicio 9

function ej9() {
 let num1 = Number(document.querySelector("#txtEj9").value);
 let num2 = Number(document.querySelector("#txt1Ej9").value);
 let resultado = 0;
 if (!isNaN(num1) && !isNaN(num2)) {
  for (let i = 0; i < num2; i++) {
   resultado += num1;
  }
  document.querySelector("#pEj9").innerHTML = resultado;
 } else {
  document.querySelector("#pEj9").innerHTML =
   "Ingrese un numero valido por favor";
 }
}

// ejercicio 10
function ej10() {
 let num1 = Number(document.querySelector("#txtEj10").value);
 let num2 = Number(document.querySelector("#txt1Ej10").value);
 let resultado = 1;
 if (!isNaN(num1) && !isNaN(num2)) {
  if (num1 < num2) {
   for (let i = num1; i <= num2; i++) {
    resultado *= i;
   }
  } else {
   alert("el numero 1 es mayor al numero 2; corrigelo");
  }
 } else {
  alert("datos invalidos");
 }
 document.querySelector("#pEj10").innerHTML = resultado;
}

// ejercicio 11

function ej11() {
 let num1 = Number(document.querySelector("#txtEj11").value);
 let num2 = Number(document.querySelector("#txt1Ej11").value);
 let num3 = Number(document.querySelector("#txt2Ej11").value);
 let resultado = "";

 if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
  if (num1 > num2) {
   let aux = num1;
   num1 = num2;
   num2 = aux;
  }

  for (let i = num1; i <= num2; i++) {
   if (i % num3 === 0) {
    resultado += i;
   } else {
    resultado = "No hay multiplos";
   }
  }
 } else {
  alert("datos invalidos");
 }
 document.querySelector("#pEj11").innerHTML = resultado;
}

// ejercicio 12

function ej12() {
 let num = Number(document.querySelector("#txtEj12").value);
 let factorial = 1;
 if (!isNaN(num)) {
  if (num > 0) {
   for (let i = 2; i <= num; i++) {
    factorial *= i;
   }
  } else {
   alert("El numero debe ser mayor a 0");
  }
 } else {
  alert("Ingrese un numero");
 }
 document.querySelector("#pEj12").innerHTML =
  "El factorial de " + num + " es " + factorial;
}

// ejercicio 13

function ej13() {
 let ancho = Number(document.querySelector("#txtEj13").value);
 let alto = Number(document.querySelector("#txt1Ej13").value);
 let circulo = "0";
 let resultado = "";
 if (!isNaN(ancho) && !isNaN(alto)) {
  if (alto > 0 && ancho > 0) {
   for (let i = 0; i < ancho; i++) {
    resultado += circulo;
   }
   let resultadoAncho = resultado;
   for (let j = 1; j < alto; j++) {
    resultado += "<br> " + resultadoAncho;
   }
  } else {
   document.querySelector("#pEj13").innerHTML = "ingrese datos validos";
  }
 } else {
  alert("Ingrese un valor valido");
 }

 document.querySelector("#pEj13").innerHTML = resultado;
}

// ejercicio 14

function ej14() {
 let numero = Number(document.querySelector("#txtEj14").value);
 if (!isNaN(numero)) {
  let cantidadDigitos = 0;
  let mensaje = "";
  if (numero < 10) {
   cantidadDigitos = 1;
   mensaje = "La cantidad de digitos de " + numero + " es " + cantidadDigitos;
  } else {
   for (let i = numero; i >= 1; i = i / 10) {
    cantidadDigitos++;
   }
  }
  mensaje = "La cantidad de digitos de " + numero + " es " + cantidadDigitos;
  document.querySelector("#pEj14").innerHTML = mensaje;
 } else {
  document.querySelector("#pEj14").innerHTML = "Ingrese un número válido";
 }
}

// ejercicio 15

function ej15() {
 let num = Number(document.querySelector("#txtEj15").value);
 let mensaje;
 if (!isNaN(num)) {
  if (num > 2000) {
   while (num / 20 >= 100) {
    num = num / 20;
   }
   mensaje = "El numero " + num.toFixed(0);
  } else {
   alert("Debes ingresar un numero mayor a 2000");
  }
 } else {
  alert("Debes ingresar un numero");
 }
 document.querySelector("#pEj15").innerHTML = mensaje;
}
// ejercicio 16

function ej16() {
 let num1 = Number(document.querySelector("#txtEj16").value);
 let num2 = Number(document.querySelector("#txt1Ej16").value);
 let multiplo = 0;
 if (!isNaN(num1) && !isNaN(num2)) {
  if (num1 > num2) {
   let aux = num2;
   num2 = num1;
   num1 = aux;
  }

  for (let i = num1; i <= num2; i++) {
   if (i % 4 === 0 && i % 6 === 0) {
    multiplo = i;
    break;
   }
  }
 } else {
  alert("Ingrese un valor valido");
 }
 if (multiplo !== 0) {
  document.querySelector("#pEj16").innerHTML =
   "El primer multiplo de 4 y 6 entre " +
   num1 +
   " y " +
   num2 +
   " es " +
   multiplo;
 } else {
  document.querySelector("#pEj16").innerHTML =
   "No hay multiplo de 4 y 6 entre " + num1 + " y " + num2;
 }
}

// ejercicio 17

function ej17() {
 let cociente = 0;
 let resto;
 let resultado;
 let dividendo = Number(document.querySelector("#txtEj17").value);
 let divisor = Number(document.querySelector("#txtEj17").value);

 if (!isNaN(divisor) && !isNaN(dividendo)) {
  if (dividendo > 0 && divisor > 0) {
   resto = dividendo;
   while (resto >= divisor) {
    resto -= divisor;
    cociente++;
   }
   resultado = `Dividendo: ${dividendo} <br>
             Divisor: ${divisor} <br>
             Cociente: ${cociente} <br>
             Resto: ${resto} `;
  } else {
   resultado = "el dividendo debe ser mayor al divisor";
  }
 } else {
  alert("INGRESE UN DATO VALIDO");
 }
 document.querySelector("#pEj17").innerHTML = resultado;
}
