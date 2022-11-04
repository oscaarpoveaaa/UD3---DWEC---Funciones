/* Crear una función temporizador que reciba como parámetro 
los minutos y segundos de duración de éste, de modo, que cada segundo mostrará por 
consola el tiempo que le queda al temporizador hasta llegar a 0. La función recibirá dos 
parámetros, con los minutos y los segundos, pero en el caso que sólo le pasemos un 
parámetro, considerará que son los segundos desde donde comenzará la cuenta atrás. 
Por ejemplo:
temporizador(77); // le pasamos 77 segundos
temporizador(2,50); // le pasamos 2 minutos y 50 segundos */

"use strict";
temporizador(1, 5);
function temporizador(m, s) {
  //Hago el calculo de los sedundos totales
  let seg_totales = m * 60 + s;
  
  let cuenta_atras = setInterval(() => {
    if(seg_totales >= 0){
      //Mientras los senundos totales sean mayor a 0 los sigue mostrando
        console.log(seg_totales)
    }if(seg_totales == 0){
      //Cuando sea 0 muestra el numero el texto "FIN DEL PROGRAMA"
        clearInterval(cuenta_atras);
        console.log("FIN DEL PROGRAMA")
    }
    //En cada vuelta voy reduciendo el numero
    seg_totales--
  }, 1000);
}

