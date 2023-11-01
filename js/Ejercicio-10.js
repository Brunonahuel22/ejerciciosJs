/*Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro) */
let numeroIngresado = parseFloat(prompt("Ingrese un numero: "));

if (numeroIngresado % 2 == 0) {
  alert("El numero ingresado es divisible en 2");
} else if (numeroIngresado % 3 == 0) {
  alert("El numero ingresado es divisible en 3");
} else if (numeroIngresado % 5 == 0) {
  alert("El numero ingresado es divisible en 5");
} else if (numeroIngresado % 7 == 0) {
  alert("El numero ingresado es divisible en 7");
}
