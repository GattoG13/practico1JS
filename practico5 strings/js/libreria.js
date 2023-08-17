// ejercicio 1
function invertirTxt(texto) {
 let invertirTxt = "";

 for (let i = texto.length - 1; i >= 0; i--) {
  invertirTxt += texto.charAt(i);
 }
 return invertirTxt;
}
// ejercicio 2
function contarLetras(texto, letra) {
 let contador = 0;

 for (let i = 0; i < texto.length; i++) {
  if (texto.charAt(i) === letra) {
   contador++;
  }
 }

 return contador;
}
//  ejercicio 3
function contarVocales(texto) {
 let contador = 0;
 texto = texto.toLowerCase();
 for (let i = 0; i < texto.length; i++) {
  if (
   texto.charAt(i) === "a" ||
   texto.charAt(i) === "e" ||
   texto.charAt(i) === "i" ||
   texto.charAt(i) === "o" ||
   texto.charAt(i) === "u"
  ) {
   contador++;
  }
 }
 return contador;
}

//  ejercicio 4
function convertirMinusculuas(texto) {
 for (let i = 0; i < texto.length; i++) {
  texto = texto.toLowerCase(i);
 }
 return texto;
}

//  ejercicio 5
function convertirMayusculas(texto) {
 for (let i = 0; i < texto.length; i++) {
  texto = texto.toUpperCase(i);
 }
 return texto;
}

//  ejercicio 6
function verificarSubcadena(texto, texto2) {
 texto = texto.toLowerCase();
 texto2 = texto2.toLowerCase();

 if (texto.indexOf(texto2) === -1) {
  return false;
 }

 return true;
}

//  ejercicio 7

function contarPalabras(texto) {
 let cuenta = 1;
 let espaciosBlank = " ";
 let cortado = texto.trim();
 for (let i = 0; i < cortado.length; i++) {
  if (cortado.charAt(i) === espaciosBlank) {
   cuenta++;
  }
 }
 return cuenta;
}

// ejercicio 8

function determinarLetra(texto) {
 let primerLetra = texto.charAt(0);
 let resultado = false;
 for (let i = 0; i < texto.length; i++) {
  if (texto.charAt(i) === primerLetra) {
   resultado = true;
  } else {
   resultado = false;
  }
 }
 return resultado;
}

function determinarMatriculas(texto) {
 let depto = texto.charAt(0);
 switch (depto) {
  case "A":
   return "Canelones";
  case "B":
   return "Maldonado";
  case "C":
   return "Rocha";
  case "D":
   return "Treinta y Tres";
  case "E":
   return "Cerro Largo";
  case "F":
   return "Rivera";
  case "G":
   return "Artigas";
  case "H":
   return "Salto";
  case "I":
   return "Paysandú";
  case "J":
   return "Río Negro";
  case "K":
   return "Soriano";
  case "L":
   return "Colonia";
  case "M":
   return "San José";
  case "N":
   return "Flores";
  case "O":
   return "Florida";
  case "P":
   return "Lavalleja";
  case "Q":
   return "Durazno";
  case "R":
   return "Tacuarembó";
  case "S":
   return "Montevideo";
  default:
   return "Departamento desconocido";
 }
}

// ejercicio 10

function usoReplaceDale(texto, letraRemplazable, letraAremplazar) {
 let textoRemplazado = "";
 for (let i = 0; i < texto.length; i++) {
  if (texto.charAt(i) === letraRemplazable) {
   textoRemplazado += letraAremplazar;
  } else {
   textoRemplazado += texto.charAt(i);
  }
 }
 return textoRemplazado;
}

// ejercicio 11

function minusculas(texto) {
 let textoAcc = "";
 let primeraLetra = texto.charAt(0).toUpperCase();
 texto = convertirMinusculuas(texto);
 for (let i = 0; i < texto.length; i++) {
  if (i === 0 && texto !== "") {
   textoAcc += primeraLetra + texto;
  }
 }

 return textoAcc;
}

// ejercicio 12
function laTablaMasci(texto) {
 let minusculas = 0;
 let mayusculas = 0;
 for (let i = 0; i < texto.length; i++) {
  let textoCharCode = texto.charCodeAt(i);
  if (textoCharCode >= 65 && textoCharCode <= 90) {
   mayusculas++;
  } else if (textoCharCode >= 97 && textoCharCode <= 122) {
   minusculas++;
  }
 }
 return `Mayusculas: ${mayusculas} <br>
         Minusculas: ${minusculas}`;
}
// ejercicio 13

function esPalindromo(texto) {
 let textoInvertido = "";
 let resultado = false;
 let textoCortao = texto.trim();
 for (let i = texto.length - 1; i >= 0; i--) {
  textoInvertido += texto.charAt(i);
 }
 if (textoCortao === textoInvertido) {
  resultado = true;
 }
 return resultado;
}

// ejercicio 14

function contadorPrimerLetra(texto) {
 let textoMinusculas = texto.toLowerCase();
 let contador = 0;
 let primerLetra = textoMinusculas.charAt(0);

 for (let i = 0; i < textoMinusculas.length; i++) {
  if (textoMinusculas.charAt(i) === primerLetra) {
   contador++;
  }
 }
 return contador;
}
