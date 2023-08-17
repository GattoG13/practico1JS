window.addEventListener("load", inicio);

function inicio() {
 // 1
 document.querySelector("#btnEj1").addEventListener("click", tomarValoresEj1);
 // 2
 document.querySelector("#btnEj2").addEventListener("click", tomarValoresEj2);
 // 3
 document.querySelector("#btnEj3").addEventListener("click", tomarValoresEj3);
 // 4
 document.querySelector("#btnEj4").addEventListener("click", tomarValoresEj4);
 // 5
 document.querySelector("#btnEj5").addEventListener("click", tomarValoresEj5);
 // 6
 document.querySelector("#btnEj6").addEventListener("click", tomarValoresEj6);
 // 7
 document.querySelector("#btnEj7").addEventListener("click", tomarValoresEj7);
 // 8
 document.querySelector("#btnEj8").addEventListener("click", tomarValoresEj8);
 // 9
 document.querySelector("#btnEj9").addEventListener("click", tomarValoresEj9);
 // 10
 document.querySelector("#btnEj10").addEventListener("click", tomarValoresEj10);
 // 11
 document.querySelector("#btnEj11").addEventListener("click", tomarValoresEj11);
 // 12
 document.querySelector("#btnEj12").addEventListener("click", tomarValoresEj12);
 // 13
 document.querySelector("#btnEj13").addEventListener("click", tomarValoresEj13);
 // 14
 document.querySelector("#btnEj14").addEventListener("click", tomarValoresEj14);
}

// ejercicio 1
function tomarValoresEj1() {
 let texto = document.querySelector("#txtEj1").value;
 let invertir = invertirTxt(texto);
 let resultado = document.querySelector("#pResultadoEj1");

 resultado.innerHTML = `Resultado: ${invertir}`;
}

// ejercicio 2
function tomarValoresEj2() {
 let texto = document.querySelector("#txt1Ej2").value;
 let letra = document.querySelector("#txt2Ej2").value;
 let pResultado = document.querySelector("#pResultadoEj2");
 let resultado = contarLetras(texto, letra);

 pResultado.innerHTML = `Resultado: La letra ${letra} aparece ${resultado} veces`;
}

// ejercicio 3
function tomarValoresEj3() {
 let texto = document.querySelector("#txt1Ej3").value;
 let pResultado = document.querySelector("#pResultadoEj3");

 let resultado = contarVocales(texto);

 pResultado.innerHTML = `Resultado: El texto tiene ${resultado} vocales`;
}

// ejercicio 4
function tomarValoresEj4() {
 let texto = document.querySelector("#txtEj4").value;
 let pResultado = document.querySelector("#pResultadoEj4");
 texto = convertirMinusculuas(texto);

 pResultado.innerHTML = `Resultado: ${texto}`;
}

// ejercicio 5
function tomarValoresEj5() {
 let texto = document.querySelector("#txtEj5").value;
 let pResultado = document.querySelector("#pResultadoEj5");
 texto = convertirMayusculas(texto);

 pResultado.innerHTML = `Resultado: ${texto}`;
}

// ejercicio 6
function tomarValoresEj6() {
 let texto = document.querySelector("#txt1Ej6").value;
 let texto2 = document.querySelector("#txt2Ej6").value;

 let pResultado = document.querySelector("#pResultadoEj6");
 let resultado = verificarSubcadena(texto, texto2);

 if (resultado) {
  resultado = "Es una subcadena";
 } else {
  resultado = "No es una subcadena";
 }

 pResultado.innerHTML = `Resultado: ${resultado}`;
}

// ejercicio 7

function tomarValoresEj7() {
 let texto = document.querySelector("#txtEj7").value;
 let pResultado = document.querySelector("#pResultadoEj7");
 texto = contarPalabras(texto);

 pResultado.innerHTML = `Resultado: ${texto}`;
}

// ejercicio 8

function tomarValoresEj8() {
 let texto = document.querySelector("#txtEj8").value;
 let pResultado = document.querySelector("#pResultadoEj8");
 texto = determinarLetra(texto);
 if (texto === true) {
  texto = "Son letras iguales";
 } else {
  texto = "No son letras iguales";
 }

 pResultado.innerHTML = `Resultado: ${texto}`;
}
// ejercicio 9

function tomarValoresEj9() {
 let texto = document.querySelector("#txtEj9").value;
 let pResultado = document.querySelector("#pResultadoEj9");
 texto = determinarMatriculas(texto);

 pResultado.innerHTML = `Resultado: ${texto}`;
}

// ejercicio 10

function tomarValoresEj10() {
 let texto = document.querySelector("#txtEj10").value;
 let letraRemplazable = document.querySelector("#txt1Ej10").value;
 let letraAremplazar = document.querySelector("#txt2Ej10").value;

 let pResultado = document.querySelector("#pResultadoEj10");
 texto = usoReplaceDale(texto, letraRemplazable, letraAremplazar);

 pResultado.innerHTML = `Resultado: ${texto}`;
}

// ejercicio 11

function tomarValoresEj11() {
 let texto = document.querySelector("#txtEj11").value;
 let pResultado = document.querySelector("#pResultadoEj11");
 texto = minusculas(texto);

 pResultado.innerHTML = `Resultado: ${texto}`;
}

// ejercicio 12

function tomarValoresEj12() {
 let texto = document.querySelector("#txtEj12").value;
 let pResultado = document.querySelector("#pResultadoEj12");
 texto = laTablaMasci(texto);

 pResultado.innerHTML = `Resultado: ${texto}`;
}

// ejercicio 13

function tomarValoresEj13() {
 let texto = document.querySelector("#txtEj13").value;
 let pResultado = document.querySelector("#pResultadoEj13");
 texto = esPalindromo(texto);
 if (texto === true) {
  texto = "Son Palindromos!!";
 } else {
  texto = "No son Palindromos!!";
 }

 pResultado.innerHTML = `Resultado: ${texto}`;
}

// ejercicio 14
function tomarValoresEj14() {
 let texto = document.querySelector("#txtEj14").value;
 let cantidadVecesPrimeraLetra = contadorPrimerLetra(texto);
 let pResultado = document.querySelector("#pResultadoEj14");

 pResultado.innerHTML = `La cantidad de letras es ${cantidadVecesPrimeraLetra}`;
}

// function tomarValoresEj15() {}

// function verificarCI() {
//  let cI = document.querySelector("#txtCIEj15").value;
//  cI = eliminarCaracter(cI, ",");
//  cI = eliminarCaracter(cI, "-");

//  let multiplicador = 2987634;
//  let digitoverificador = cI.charAt(cI.length - 1);
//  let acumulador = 0;
// }

// function eliminarCaracter(texto, letra) {
//  let textoSustituido = "";
//  for (let i = 0; i < texto.length; i++) {
//   if (texto.charAt(i) === !letra) {
//    textoSustituido += texto.charAt(i);
//   }
//  }
//  return textoSustituido;
// }
