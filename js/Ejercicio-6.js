let numero1 = parseInt(prompt("Ingrese su primer numero: "));
let numero2 = parseInt(prompt("Ingrese su segundo numero: "));

if (numero1 > numero2) {
    document.write("El numero " + numero1  +" es mayor a " + numero2);
} else {
    document.write("El numero " + numero2  +" es mayor a " + numero1);
}