const { Stack } = require('../DS');
/* ⚠️ NO MODIFICAR NADA POR ENCIMA DE ESTA LÍNEA ⚠️

 2️⃣ ***** EJERCICIO 2 - STACK ***** - acomodarPeliculas() 2️⃣

La función "acomodarPeliculas" recibirá dos datos por parámetro. Por un lado recibe un arreglo de películas, y por
lado un string con el nombre de una película.

El objetivo de este ejercicio es que crees un Stack en el cuál guardes las películas del arreglo. Sólo debes
guardar aquellas películas cuyo nombre no coincida con el string que recibes por parámetro. Si además la
película tiene una duración menor a una hora, tampoco debe estar incluida en el Stack. Finalmente, retorna
el Stack.

⛔️ IMPORTANTE ⛔️
1) Retornar un Stack.
2) Respetar la condición LIFO a la hora de agregar películas al Stack.


📝 EJEMPLO 📝
INPUT ---> ([{
                nombre: "Spider-Man: Sin camino a casa",
                estreno: 2022,
                duracion: "2:30 hs",
            }, {
                nombre: "Batman",
                estreno: 2022,
                duracion: "1:45 hs",
            }], 
            "Top Gun: Maverick")


OUTPUT ---> Stack [
      {
        nombre: "Spider-Man: Sin camino a casa",
        estreno: 2022,
        duracion: "2:30 hs",
      },
      {
        nombre: "Batman",
        estreno: 2022,
        duracion: "1:45 hs",
      }]
*/

// 1.- Qué nos llega? Un arreglo de películas y un string con el nombre de la película
// 2.- Qué se debe hacer? Crear un Stack para guardar las películas del arreglo. Guardar sólamente las películas que no coincidan
//     con el string recibido. Si tiene duración menor a una hora, tampoco incluir en el Stack. Retornar el Stack
// 3.- Cómo proceder?

function acomodarPeliculas(listaDePeliculas, nombre) {
   // Tu código aquí:
}

/* ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️*/
module.exports = acomodarPeliculas;
