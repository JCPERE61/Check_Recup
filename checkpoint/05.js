/*5️⃣ ***** EJERCICIO 5 - RECURSIÓN ***** - peliTaquillera() 5️⃣

Ya que eres el responsable administrativo de Henry Buster tienes que buscar entre todas las películas aquellas que son
taquilleras (que más ganancias redituan). Para este ejercicio recibiras un arreglo de objetos, donde cada objeto es 
una película que tendrá la siguiente estructura:
{
  nombre: "Harry Potter y las reliquias de la muerte 2",
  añoDeEstreno: "2011",
  genero: "Fantasia/Aventura",
  taquillera: true
}


⛔️ IMPORTANTE ⛔️
1) Tienes que recorrer el arreglo de forma recursiva y devolver aquellas películas que tengan la propidad "taquillera"
igual a true.
2) Si el arreglo está vacío retornar un arreglo vacío.


📝 EJEMPLO 📝
INPUT --->
[{
 nombre: "Los pitufos",
 añoDeEstreno: "2011",
 genero: "Fantasia/Aventura/Acción",
 taquillera: false
 },
 {
  nombre: "Avengers: La era de Ultrón",
  añoDeEstreno: "2015",
  genero: "Fantasia/Aventura/Acción",
  taquillera: true
 }]

OUTPUT --->
[{
  nombre: "Avengers: La era de Ultrón",
  añoDeEstreno: "2015",
  genero: "Fantasia/Aventura/Acción",
  taquillera: true
}]


💡 TIP 💡
1) Podes definir un default-parameter para ayudarte.
*/

// 1.- Qué nos llega? Un arreglo de objetos con cada objeto una película con la propiedades "nombre", "añoDeEstreno", "genero",
//     "taquillera". Todos los valores son strings a excepción del último que es booleano.
// 2.- Qué se debe hacer? Buscar las películas taquilleras (que dan mas ganacias) recorriendo el arreglo de manera recursiva y devolver 
//     las películas que tengan la propiedad "taquillera" sea igual a true. Si el arreglo está vacío retornar un arreglo vacio.
// 3.- Cómo proceder?

function peliTaquillera(peliculas, aux = []) {
   // Tu código aquí
   while(peliculas.length > 0) {
   let anadido = peliculas.shift();
   if(anadido.taquillera) {
    aux.push(anadido);
  } 
  }
  return aux;
}

/*⚠️ NO MODIFICAR NADA DEBAJO DE ESTA LINEA ⚠️*/
module.exports = peliTaquillera;
