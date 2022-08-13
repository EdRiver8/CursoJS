"use strict";
/*
    un array es un arreglo, vector, matriz o lista, que puede almacenar diferentes
    datos y tipos en una sola variable, su estructura es asi:
        let nombreArray = [datos separados por ","]
        Un array cuenta con:
        * datos
        * tamaño
        * indice (posicion en el array)
    Nota: Normalmente se usan ciclos para recorrerlos
*/

// un programa que almacene la liste de mis amigos

let friends = ['Sergio', 'Cristrina', 'David', 'JuanPa'];
//alert(friends);//muestra toda la informacion
//alert("Mejor Amigo: " + friends[0]);
let size = friends.length;//obtenga el tamaño del array y guardelo en size
//alert("Tamaño de la lista de amigos de Edwin: " + size);

//Recorrer e imprimir los amigos
let i = 0; //contador de ciclos, controla el mientras (ciclos)
while(i < size){
    console.log("Amigo: " + friends[i]);
    i = i + 1;
}

let nombre = "edwin";//un texto es un array
console.log("Tamaño del nombre: " + nombre.length);
console.log("letra en la posicion 3: " + nombre[2]);

//programa que en cuentre el dato mayor:
let numeros = [15, 13, -2, 8, 7, 65, -98, 10, 3];
/*
    procedimiento:
    1- Necesitamos una variable aux que guarde momentaniamente
    el dato mayor, este lo iniciamos con el dato de la posicion 0
    2- Recorrer el vector comparando cada uno de sus datos
    (comparacion = if(){}); si el vector en una posicion x es mayor que el aux, entonces a aux llevele lo que tiene el vector en esa posicion
    3- encontrado el mayor lo imprimimos
*/
console.log("---- Buscando el dato mayor ----");
let mayor = numeros[0];//variable auxiliar llamada mayor
let contador = 0;
//mientras el contador sea menor que el tamaño de numeros:
while(contador < numeros.length){
    if(mayor < numeros[contador]){
        //si se cumple, actualizamos el valor de mayor
        mayor = numeros[contador];
    }
    contador = contador + 1;
}
console.log("Dato es mayor es: " + mayor);