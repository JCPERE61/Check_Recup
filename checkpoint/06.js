/* 6️⃣ ***** EJERCICIO 6 - ORDENAMIENTO ***** - ordenarPorAño() 6️⃣

En Henry Buster nos dimos cuenta que nuestro catálogo de películas sestá desordenado. Necesitamos que nos ayudes a
resolver este problema. Para esto deberás ordenar todas las películas por año, tanto las que están en nuestro catálogo
como las que están por ingresar. Es decir que recibirás dos listas de películas y tendraás que ordenarlas a todas.


⛔️ IMPORTANTE ⛔️
1) Tienes que ordenar todas las películas a partir de su propiedad AÑO, y de MENOR a MAYOR.

📝 EJEMPLO 📝

--> catalogo
[
  {
    nombre: 'Avengers: La era de Ultrón',
    añoDeEstreno: 2015,
    genero: 'Fantasia/Aventura/Acción',
    taquillera: true,
   },
  {
    nombre: 'Toy Story 3',
    añoDeEstreno: 2010,
    genero: 'Infantil/Animación',
    taquillera: true,
   }
 ]
 
--> nuevasPeliculas
[
  {
    nombre: 'Sonic',
    añoDeEstreno: 2012,
    genero: 'Aventura',
    taquillera: false,
   }
 ]  

INPUT ---> (catalogo, nuevasPeliculas)
OUTPUT ---> 
[
  {
    nombre: 'Toy Story 3',
    añoDeEstreno: 2010,
    genero: 'Infantil/Animación',
    taquillera: true,
   },
  {
    nombre: 'Sonic',
    añoDeEstreno: 2012,
    genero: 'Aventura',
    taquillera: false,
   },
  {
    nombre: 'Avengers: La era de Ultrón',
    añoDeEstreno: 2015,
    genero: 'Fantasia/Aventura/Acción',
    taquillera: true,
   }
  
 ]
 
💡TIP 💡
1) Te sugerimos que investiges métodos de objetos. Tal vez el "assign" te podría servir...

*/

// 1.- Qué nos llega? Dos listas desordenadas de películas una del catálogo y otra con las películas por ingresar.
// 2.- Qué se debe hacer? Ordenar las películas de las dos listas de acuerdo a la propiedad "AÑO" de MENOR a MAYOR. 
// 3.- Cómo proceder?


const ordenarPorAño = (catalogo, nuevasPeliculas) => {
   // Tu código aquí
   
  let combinado = catalogo.concat(nuevasPeliculas); 
  let swap = true;
   while (swap){
    swap = false;
    for (let i=0; i<combinado.length-1;i++){
      if (combinado[i]['añoDeEstreno'] > combinado[i+1]['añoDeEstreno']){
        let aux = combinado[i]['añoDeEstreno'];
        combinado[i]['añoDeEstreno'] = combinado[i+1]['añoDeEstreno'];
        combinado[i+1]['añoDeEstreno'] = aux;
        swap = true;
      }
    }
   }
   return combinado;

};

/*⚠️ NO MODIFICAR NADA DEBAJO DE ESTA LINEA ⚠️*/
module.exports = ordenarPorAño;
