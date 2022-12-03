/* 3️⃣ ***** EJERCICIO 3 - CLOUSURE***** - pelisEstrenos() 3️⃣

Hemos renovado el catálogo de películas de Henry-Buster. Hay nuevas películas de estreno, pero no estamos seguros de
cuáles son realmente. Es por esto que los alumnos de Henry te darán una lista con el nombre de películas que están
de estreno. De esta forma podrás buscarlas en nuestro catálogo y actualizarlas.

La función "pelisEstrenos" recibe por parámetro un arreglo de objetos (películas). Esta debe retornar otra función que
recibe un arreglo de strings (nombre de las películas en estreno). Esta segunda función debe retornar:

1) El string "Por favor indicar las peliculas que son de estreno": en el caso de que la función hija no reciba una
lista de películas de estreno.

2) El string "No se encontro ninguna de esas peliculas en nuestro catalogo": en el caso de que ninguno de los nombres
coincida con las películas de la lista.

3) El arreglo de películas, pero con la propiedad "estreno" actualizada en true si esa película es de estreno.



⛔️ IMPORTANTE ⛔️
1) Sólo debes cambiar la propiedad "estreno" de las películas correspondientes.
 Se renovo el catologo en henry-buster y ingresaron peliculas estreno pero no sabemos cuales son
 entonces con ayuda de los alumnos que nos van a dar los nombres de varias peliculas estreno vamos a poder
 buscar en nuestro catalogo y actualizarlas a la seccion de estreno.
 Tu tarea va a ser buscar esas peliculas estreno dentro de nuestro catalogo.


📝 EJEMPLO 📝
LISTA DE PELÍCULAS
  [{
    nombre: "Top Gun: Maverick",
    Estreno: "2022",
    genero: "Acción/Drama",
    estreno: false
  },{
    nombre: "Amnesia",
    añoDeEstreno: "2000",
    genero: "Acción",
    estreno: false
  },{
    nombre: "Avengers: La era de Ultrón",
    añoDeEstreno: "2015",
    genero: "Fantasia/Aventura/Acción",
    estreno: false
  }]

INPUT ---> ["Los Simpsons", "Los increíbles"]
OUTPUT --> "No se encontro ninguna de esas peliculas en nuestro catalogo"
*/

// 1.- Qué nos llega? Arreglo de Objetos con las películas  
// 2.- Qué se debe hacer? Buscar en el catálogo, las películas que están de estreno y actualizarlas y retornar otra función
//     que recibe un arreglo de strings (nombre de películas que están de estreno) y retornar 
//     a) El string "Por favor indicar las peliculas que son de estreno" si la función hija no recibe una película de estreno.
//     b) El string "No se encontro ninguna de esas peliculas en nuestro catalogo" si ninguno de los nombres coincide con 
//        las películas de la lista.
//     c) El arreglo de películas, pero con la propiedad "estreno" actualizada en true si esa película es de estreno
//     Sólamente se debe cambiar la propiedad "estreno" de las películas de estreno.
// 3.- Cómo proceder?

function pelisEstrenos(listaDePeliculas) {
  //Tu código aquí:
  if (listaDePeliculas.length === 0) return  "Por favor indicar las peliculas que son de estreno";
  let estrenados = [];
  let resultado = function  (peliestreno){
    for (i=0;i<listaDePeliculas.length;i++){
      for (j=0;j<peliestreno.length;j++){
        if (listaDePeliculas[i]['nombre'] === peliestreno[j]){
          listaDePeliculas[i]['estreno']=true;
          estrenados.push(listadoDePeliculas[i]);
        }
      }
    }
    if(estrenados.length === 0) return "No se encontro ninguna de esas peliculas en nuestro catalogo"
    return estrenados;
  }
  return resultado(peliestreno);
  }

/* ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️*/
module.exports = pelisEstrenos;
