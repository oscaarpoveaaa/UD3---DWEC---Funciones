/* Función pow(x,n): Escriba la función pow(x,n) que devuelva x como 
potencia de n. O, en otras palabras, multiplique x por si mismo n veces y devuelva el 
resultado.
pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1
Cree una página web que solicite x y n, y luego muestre el resultado de pow(x,n).
Nota: La función solo debe admitir valores naturales de n: enteros desde 1. */

"use strict"

let numero = parseInt(prompt("Introduce el número"));
let potencia = parseInt(prompt("Introduce su potencia"));

alert(pow(numero,potencia));

function pow(x,n){

    //Devuelvo mediante la expresion ** que el 1º es el numero y el 2º es la potencia. 
    return (x**n);
}


