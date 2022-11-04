/* rear una función que reciba una cadena y la devuelva 
transformada en Cani. Por ejemplo, si le pasamos a la función la cadena "una cadena 
cani es como ésta" obtendremos "UnA KaDeNa kAnI Es kOmO EsTaHHH". Para ello, hay 
que alternar el uso de MAYÚSCULAS y minúsculas, sustituir la letra C por la K y añadir 
tres letras H al final.  */
"use strict";

let frase = prompt("Introduce la frase");
document.write(PasarCani(frase));

function PasarCani(frase) {
  frase = frase.toLowerCase();
  let frase_final = "";
  for (let i = 0; i < frase.length; i++) {
    //Aqui entran solo los pares
    if (i % 2 == 0) {
      if (frase[i] == "c") {
        //Si la letra es igual a c escribe K
        frase_final = frase_final + "K";
      } else {
        frase_final = frase_final + frase[i].toLocaleUpperCase();
      }
    } else {
      //Aqui entran solo los impares
      if (frase[i] == "c") {
        frase_final = frase_final + "k";
      } else {
        frase_final = frase_final + frase[i];
      }
    }
  }
  //Devuelvo la frase transformada y al final le añado un HHH
  return frase_final + "HHH";
}
