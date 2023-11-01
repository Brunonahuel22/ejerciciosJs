/* 9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)
 */ 

let frase = prompt("Ingrese su frase: ");
let contador = 0;
let longitud = frase.length;
let vocalesEncontradas = ''; 

while (contador < longitud) {
    let caracter = frase.charAt(contador);
    
    if ((caracter == 'a') || (caracter == 'A')) {
        vocalesEncontradas += caracter; 
    } 
    else if ((caracter == 'e') || (caracter == 'E')) {
        vocalesEncontradas += caracter; 
    } 
    else if ((caracter == 'i') || (caracter == 'I')) {
        vocalesEncontradas += caracter; 
    } 
    else if ((caracter == 'o') || (caracter == 'O')) {
        vocalesEncontradas += caracter; 
    } 
    else if ((caracter == 'u') || (caracter == 'U')) {
        vocalesEncontradas += caracter; 
    } 
    
    contador++;
}

document.write("Las vocales encontradas son: " + vocalesEncontradas);



