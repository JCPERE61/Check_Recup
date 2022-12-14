const { BinarySearchTree } = require("../DS");
// ⚠️ NO MODIFICAR NADA POR ENCIMA DE ESTA LÍNEA ⚠️
//
//
//
// 9️⃣ ***** EJERCICIO 9 BINARYSEARCHTREE***** - BinarySearchTree.obtenerPelicula() 9️⃣
//
// Tienes una entrada para ver una pelicula! Tendrás que buscar entre las pelis la que coincida con tu entrada
// Para esto tendrás que agregar al prototype de BinarySearchTree, el método 🩳 obtenerPelicula() 🩳, el cuál
// recibirá por parámetros un objeto, que tiene nombre, horario y otro objeto que se llama cartelera y contiene dia y mes de las peliculas que se necesitan encontrar para que puedas verla.
//
//
// EJEMPLOS:
// Dado el siguiente árbol:                   ❕💥EL ARBOL ESTA ORDENADO SEGUN EL HORARIO DE LA PELICULA💥❕
//                                            { nombre: "Harry Potter", horario: 7, cartelera: { dia: 2022, mes : 12}}
//                                                                   /                           \
//   { nombre: "Harry Potter", horario: 06, cartelera: { dia: 2000, mes : 11}}          { nombre: "300", horario: 23, cartelera: { dia: 2004, mes : 09}}
//                                                                                                \
//                                                                                      { nombre: "La historia de Jack", horario: 29, cartelera: { dia: 2013, mes : 10}}
//
//  BinarySearchTree.obtenerPelicula({ nombre: "300", horario: 23, cartelera: { dia: 2004, mes : 09}}) Devuelve ➡
//  [{ nombre: "300", horario: 23, dia: 2004, mes : 09}]
//
//  BinarySearchTree.obtenerPelicula({ nombre: "La historia de Jack", horario: 29, cartelera: { dia: 2013, mes : 10}}) Devuelve ➡
//  [{ nombre: "La historia de Jack", horario: 29, dia: 2013, mes : 10}]
//
// REQUISITOS:
//  🟢 Recorrer el árbol y devolver en un array las prendas que coincidan con la solicitada
//
//  ACLARACIÓN: Dentro del árbol se encuentran objetos, tal como lo muestra el ejemplo más arriba!
//
//  TIP: Podés usar default parameters para ayudarte.

// 1.- Qué nos llega? Una entrada a una película en forma de string y un array vacio.
// 2.- Qué se debe hacer? Buscar entre las películas la que coincida con la entrada y agregar al prototype del BinarySearchTree
//     el método "obtenerPelicula()", el cuál recibirá por parámetros un objeto, que tiene nombre, horario y otro objeto
//     que se llama cartelera y contiene dia y mes de las peliculas que se necesitan encontrar para que puedas verla.
//     Devolver un array las películas que coincidan con la solicitada.
// 3.- Cómo proceder? Recorrer el arbol en que se encuentran objetos

BinarySearchTree.prototype.obtenerPelicula = function (string, array = []) {
  // Tu código aquí:
  let funcioncine= [];
  let obj = [];
   while (this.left !== null && this.right !== null){
    if (this.left['nombre'] === string) {
      fechado = Object.values(this.left.cartelera);      
    }
    if (this.right['nombre'] === string) {
      fechado = Object.values(this.right.cartelera);      
    }
    this.left = this.l
    if (fechado.length >0){

    }

  }
};
// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = BinarySearchTree;
