/* 4️⃣ ***** EJERCICIO 4 - RECURSIÓN ***** - seleccionarPelicula() 4️⃣

¡Felicitaciones! Te han asignado el rol de manejar nuestro cine recien inagurado. Junto con este rol también te
asignaron un objeto con los nombres de varias películas que tenemos dentro de Henry Buster. El público te dirá qué
película quieren ver. Tu tarea es buscarla de forma recursiva y devolverla.


⛔️ IMPORTANTE ⛔️
1) Debes utilizar recursión.
2) Si el objeto está vacío retornar el string: 'por favor indicar las peliculas a buscar'.
3) Si no se encuentra la pelicula retornar el string: 'no tenemos la pelicula: "nombrePelicula"'.
4) Si encuentras la película retornar el string: 'se encontro la pelicula: "nombrePelicula"'.


📝 EJEMPLO 📝

LISTA
{
 0: "El padrino",
 1: "Iron Man",
 2: "Terminator",
 3: "Rambo",
 4: "Creed"
}

INPUT ---> (LISTA, "Terminator")
OUTPUT --> 'se encontro la pelicula: Terminator'

💡 TIP 💡
Puedes definir un default-parameter para ayudarte.
*/

// 1.- Qué nos llega? Un objeto con los nombres de varias películas y las películas que quieren ver.
// 2.- Qué se debe hacer? Utilizando recursión  para retornar: 
//     a) Si no se pasa ninguna película: 'por favor indicar las peliculas a buscar'
//     b) Si no se encuentra la pelicula retornar el string: 'no tenemos la pelicula: "nombrePelicula"'.
//     c) Si se encuentra la película: 'se encontro la pelicula: "nombrePelicula"'.
// 3.- Cómo proceder?

function seleccionarPelicula(peliculas, nombrePelicula, i = 0) {
   // Tu código aquí:
   if (!peliculas.hasOwnProperty('0')) return 'por favor indicar las peliculas a buscar';
   while (peliculas.hasOwnProperty (i.toString())){
      if (peliculas[i.toString()] === nombrePelicula){
         return 'se encontro la pelicula: ' + nombrePelicula;
      } else
      {i=i+1;}
   }
   return 'no tenemos la pelicula: ' + nombrePelicula;
}

/*⚠️ NO MODIFICAR NADA DEBAJO DE ESTA LINEA ⚠️*/
module.exports = seleccionarPelicula;
