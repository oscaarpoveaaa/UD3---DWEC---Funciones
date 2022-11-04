/* Función min(a, b)
Escriba una función min(a,b) la cual devuelva el menor de dos números a y b.
Por ejemplo:
min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1 */

"use strict";

alert(min(3331,23));

function min(a, b) {

  //Se compara si el numero A es menor o igual que el B para asi, si lo es devolver el A
    if (a <= b) {
      return a;
    } else {
  //En este caso si el numero A no es menor ni igual que el B, evidentemente el numero mas chico es el B, por eso lo devuelvo
      return b;
    }
}
