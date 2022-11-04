/* ¿Es "else" requerido?
La siguiente función devuelve true si el parámetro age es mayor a 18. De lo contrario, 
solicita una confirmación y devuelve su resultado:
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('¿Tus padres te permitieron?');
  }
}
¿Funcionará la función de manera diferente si se borra else? ¿Hay alguna diferencia en 
el comportamiento de estas dos variantes? */
"use strict";

checkAge(17);

function checkAge(age) {
    if (age > 18) {
      return true;
    }
      return confirm('¿Tus padres te permitieron?');
  }

  /* 
  Si borras el ELSE sigue haciendo lo mismo ya que al ser una funcion booleana, lo que hace comprobar el if, si no entra al estar el return despues del
  if lo interpreta como si fuera un ELSE y hace lo mismo que un if else.
  */