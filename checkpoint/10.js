const { BinarySearchTree } = require('../DS');
/* ⚠️ NO MODIFICAR NADA POR ENCIMA DE ESTA LÍNEA ⚠️

🔟 ***** EJERCICIO 10 - BINARYSEARCHTREE ***** - ingresar() 🔟

¡Atención! Está llegando nuestro primer cliente. Debemos venderle la entrada a la película que quiere ver. Para esto
tendrás que agregar al prototipo de "BinarySearchTree" un método llamado "ingresar". Este recibirá por parámetro un
arreglo de objetos en los que se encuentran los horarios y nombres de las películas.

Tendrás que recorre el árbol y agregar la propiedad "ticket" con el valor true en cada uno de los nodos que coincida 
con los elementos del arreglo que recibes por paráemtro. De esta forma podremos identificar qué tickets tienen dueño y 
cuántos quedan disponibles.


⛔️ IMPORTANTE ⛔️
1) Tanto los nodos del árbol como los elementos del array de objetos serán valores únicos.
2) Si el arreglo está vacío retornar false.


📝 EJEMPLO 📝
ÁRBOL
                           { nombre: "Chaplin", horario: 10 }
                             /                             \
       {nombre: "El Hobbit", horario: 7}     {nombre: "Masacre en Texas", horario: 22}
                         /                                       \
{nombre: "300", horario: 6}            {nombre: "Harry potter", horario: 23}


INPUT ---> [{ nombre: "Harry potter", horario: 23 }, { nombre: "300", horario: 6 }, { nombre: "El Hobbit", horario: 7 }];
OUTPUT -->
                           { nombre: "Chaplin", horario: 10 }
                             /                             \
       {nombre: "El Hobbit", horario: 7, ticket: true}     {nombre: "Masacre en Texas", horario: 22}
                         /                                       \
{nombre: "300", horario: 6, ticket: true}            {nombre: "Harry potter", horario: 23, ticket: true}
*/

// 1.- Qué nos llega? Un arreglo con elementos únicos
// 2.- Qué se debe hacer? Agregar al prototype BinarySearchTree el método "ingresar" que recibirá por parámetro un
//     arreglo de objetos en los que se encuentran los horarios y nombres de las películas. Recorrer el arbol y agregar la
//     propiedad "ticket" con el valor true en cada uno de los nodos que coincida con los elementos del arreglo que 
//     recibes por parámetro para identificar qué tickets tienen dueño y cuántos quedan disponibles. Si el arreglo recibido
//     está vacío devolver false.
// 3.- Cómo proceder?

BinarySearchTree.prototype.ingresar = function (arregloDePeliculas) {
   // Tu código aquí:
   if (arregloDePeliculas.length === 0) return false;
   let resultado = [];
   while (this.left !== null && this.right !== null){
    for (let i=0; i < arregloDePeliculas.length; i++){
      if (arregloDePeliculas[i].nombre === this.left.value || arregloDePeliculas[i].nombre === this.right.value){
        resultado.push(arregloDePeliculas[i]);
      }
    }
    this.right=this.right.right;
    this.left = this.left.left;    

    }
    for (let i=0;i<resultado.length;i++){
      resultado[i].ticket = true;
    }
    return resultado;   
   

};

/*⚠️ NO MODIFICAR NADA DEBAJO DE ESTA LINEA ⚠️*/
module.exports = BinarySearchTree;
