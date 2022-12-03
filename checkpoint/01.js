const { Queue } = require('../DS');
/* ⚠️ NO MODIFICAR NADA POR ENCIMA DE ESTA LÍNEA ⚠️

1️⃣ ***** EJERCICIO 1 - QUEUE ***** - guardarPeliculas() 1️⃣

Ha llegado un camión con un nuevo conjunto de Películas. Ahora debemos recogerlas y guardarlas dentro del cine.
Para esto tendrás que implementar la función guardarPeliculas(), la cuál recibirá por parámetro una Queue con muchas 
películas. Tu objetivo es guardarlas en un objeto que nos sirve como contenedor.

El objeto contenedor deberá tener las propiedades con números ascendentes desde el 1 (1, 2, 3, etc...), expetuando la
primera propiedad. Esta primera debe tener el nombre "estrenar". 

A medida que guardas las películas, debes ir quitándolas de la Queue. Para guardarlas debes respetar el orden dado 
de las películas a partir de FIFO.


⛔️ IMPORTANTE ⛔️
1) El primer key del objeto contenedor no es un numero. Debe de ser un string que diga "estrenar".
2) ¡Si o si necesitás utilizar una Queue! Por lo que tendrás que inicializar una...
3) Revisa el archivo "DS.js" para ver cómo es la función constructora Queue, y los métodos que puedes utilizar.


📝 EJEMPLO 📝
INPUT ---> Queue ['Morbius', 'La invitación', 'Halloween: el final', 'Muerte en el Nilo', 'Black Adam']
OUTPUT ---> { "estrenar": 'Morbius', 1: 'La invitación', 2: 'Halloween: el final', 3:'Black Adam' }
*/

// 1.- Qué nos llega? Una Queue con muchas películas
// 2.- Qué se debe hacer? Implementar una función que guarde las películas como contenedor con números ascendientes exceptuando
//      la primera propiedad que debe tener nombre de "estrenar". A medida que se guardan las películas se debe ir quitando
//      de la Queue. Se debe respetar el orden de FIFO. 
// 3.- Cómo proceder?

function guardarPeliculas(pelisQueue) {
   // Tu código aquí:

   let obj = {};
   let tamano = pelisQueue.size();
   let pelicula = pelisQueue.dequeue();
   obj['estrenar']= pelicula;
   for (let i=1; i< tamano;i++){
      obj[i]=pelisQueue.dequeue();
   }
   return obj;
}

/*⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️*/
module.exports = guardarPeliculas;
