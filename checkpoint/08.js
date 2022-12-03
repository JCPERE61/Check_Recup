const { LinkedList } = require('../DS');
/* ⚠️ NO MODIFICAR NADA POR ENCIMA DE ESTA LÍNEA ⚠️

8️⃣ ***** EJERCICIO 8 ***** - generarLista() 8️⃣

Como las listas nos están siendo útiles para organizar nuestras películas, vamos a pedirte que crees un nuevo método
en el prototipo de "LinkedList" para que podamos generarlas más rápido. El método "generarLista" recibirá por parámetro
el número de la cantidad de nodos (longitud) que tiene que tener la lista.


⛔️ IMPORTANTE ⛔️
1) Cada número en la lista debe incrementarse +1 respecto al anterior comenzando desde el 1.
2) Debes retornar una LinkedList con la misma longitud que recibes por parámetro.


📝 EJEMPLO 📝
INPUT ---> 4
OUTPUT --> Head ➡ (1) ➡ (2) ➡ (3) ➡ (4)
*/

// 1.- Qué nos llega? Longitud de la lista a crear. 
// 2.- Qué se debe hacer? Crear el método "generarLista" del prototype LinkedList que recibe por parámetro
//     el número de la cantidad de nodos (length) que tiene la lista. Cada número de la lista debe incrementarse en +1ç
//     respecto al anterior comenzando desde 1. Devolver una lista que contiene la misma longitud que se recibe 
//     por parámetro
// 3.- Cómo proceder?

LinkedList.prototype.generarLista = function (longitud) {
   // Tu código aquí:
};

/*⚠️ NO MODIFICAR NADA DEBAJO DE ESTA LINEA ⚠️*/
module.exports = LinkedList;
