/* 11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible) */
let numeroIngresado = parseFloat(prompt("Ingrese un numero: "));

if (
  numeroIngresado % 2 == 0 &&
  numeroIngresado % 3 == 0 &&
  numeroIngresado % 5 == 0 &&
  numeroIngresado % 7 == 0
) {
  document.write(
    `El numero ${numeroIngresado} es divisible por 2, por 3, por 5 y por 7.`
  );
} else if (
  numeroIngresado % 2 == 0 &&
  numeroIngresado % 3 == 0 &&
  numeroIngresado % 5 == 0
) {
  document.write(
    `El numero ${numeroIngresado} es divisible por 2, por 3, por 5.`
  );
} else if (
  numeroIngresado % 2 == 0 &&
  numeroIngresado % 3 == 0 &&
  numeroIngresado % 7 == 0
) {
  document.write(
    `El numero ${numeroIngresado} es divisible por 2, por 3 y por 7.`
  );
} else if (
  numeroIngresado % 2 == 0 &&
  numeroIngresado % 5 == 0 &&
  numeroIngresado % 7 == 0
) {
  document.write(
    `El numero ${numeroIngresado} es divisible por 2, por 5 y por 7.`
  );
} else if (
  numeroIngresado % 3 == 0 &&
  numeroIngresado % 5 == 0 &&
  numeroIngresado % 7 == 0
) {
  document.write(
    `El numero ${numeroIngresado} es divisible por 3, por 5 y por 7.`
  );
} else if (numeroIngresado % 2 == 0 && numeroIngresado % 3 == 0) {
  document.write(`El numero ${numeroIngresado} es divisible por 2 y por 3.`);
} else if (numeroIngresado % 5 == 0 && numeroIngresado % 7 == 0) {
  document.write(`El numero ${numeroIngresado} es divisible por 5 y por 7.`);
} else if (numeroIngresado % 2 == 0 && numeroIngresado % 5 == 0) {
  document.write(`El numero ${numeroIngresado} es divisible por 2 y por 5.`);
} else if (numeroIngresado % 3 == 0 && numeroIngresado % 7 == 0) {
  document.write(`El numero ${numeroIngresado} es divisible por 3 y por 7.`);
} else if (numeroIngresado % 2 == 0 && numeroIngresado % 7 == 0) {
  document.write(`El numero ${numeroIngresado} es divisible por 2 y por 7.`);
} else if (numeroIngresado % 3 == 0 && numeroIngresado % 5 == 0) {
  document.write(`El numero ${numeroIngresado} es divisible por 3 y por 5.`);
}
