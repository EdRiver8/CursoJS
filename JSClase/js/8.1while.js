"use strict";
/*
    1- Realizar un programa que guarde el nombre
    y la edad de tres alumnos y luego los muestre
    (consola - ventana emergente).

    2- Mostrar los nombres en Mayuscula
*/
//creo variables que almacenan los nombres de los estudiantes

/*
let student1;
let student2;
let student3;
//creamos variables que almacenen la edad
let edadStudent1;
let edadStudent2;
let edadStudent3;

//pedimos datos por ventana emergente
alert("Programa que guarda datos de estudiantes");
student1 = prompt("Ingrese Nombre del 1er Estudiante: ");
edadStudent1 = prompt("Ingrese Edad del 1er Estudiante: ");
student2 = prompt("Ingrese Nombre del 2do Estudiante: ");
edadStudent2 = prompt("Ingrese Edad del 2do Estudiante: ");
student3 = prompt("Ingrese Nombre del 3er Estudiante: ");
edadStudent3 = prompt("Ingrese Edad del 3er Estudiante: ");

//imprimir datos
console.log("El 1er Estudiante es: ", student1, " y su edad es: ", edadStudent1.toUpperCase());
console.log("El 2do Estudiante es: ", student2, " y su edad es: ", edadStudent2.toUpperCase());
console.log("El 3er Estudiante es: ", student3, " y su edad es: ", edadStudent3.toUpperCase());
*/

/*
    While es una referencia a un bucle o ciclo repetitivo que se va a ejecutar mientras
    una condicion sea verdadera.
    Estructura =>
    while(condicion a evaluar){
        lineas de codigo a ejecutar
        iterador
    }
    iterador: la variable de control con la cual se cumple la condicion a evaluar
        normalmente es numerico y se puede dar de dos maneras
        * contador: incrementar o decrementar en unidades
        * acumulador: incrementar o decrementar a pasos mayores que uno
*/

//realizar un programa que cuenta del 0 al 9 y muestre por consola

console.log("Numeros del 0 al 9");
let contador = 0;
//se va a repetir mientras el contador sea menor que 10
while(contador < 10){
    console.log(contador);
    contador = contador + 1;
}
console.log("");

//programa que muestre los numeros de 10 al 0
console.log("Numeros del 10 al 0");
let i = 10;
while(i > -1){
    console.log(i);
    i = i - 1;
}

//Programa que muestre los numeros impares del 0 - 50
console.log("Numeros Impares del 0 - 50");
i = 1;//acumulador
while(i < 51){
    console.log(i);
    i = i + 2;
}
/*
    Un programa que le pida un numero al usuario, y muestre
    los numeros divisibles por dos entre 0 y el numero dado.
*/

/*
    Un programa que le pida un numero al usuario, y muestre
    los numeros divisibles por dos entre 0 y el numero dado, 
    teniendo en cuenta numeros negativos
    Usuario ingresa un -7
    -6
    -4 
    -2
    0  
    .
*/
//1e Paso: Mostrar que el programa muestra los numeros 
//pares entre el seleccionado por el usuario y 0
console.log("Programa muestra los numeros pares entre el seleccionado por el usuario y 0");

//2do Paso: Crear variable para almacenar el dato dado por el usario
let numeroUsuario;

//3er Paso: Leer el numero que ingresa el usuario
numeroUsuario = prompt("Ingresa un numero:");
//convertimos el numero ingresado a numero
// lo que hay en numeroUsuario lo pasamos a entero y lo almacenamos en numeroUsuario
numeroUsuario = parseInt(numeroUsuario);

//4to Paso: Verificar si el numero es positivo o negativo
if(numeroUsuario >= 0){//numero positivo
//5to Paso: Generar un ciclo para imprimir el conteo y crear variable iterador
    let i = numeroUsuario; 
    while(i >= 0){//mientras el numero sea mayor o igual a cero haga
        console.log(i);
        i = i - 2;
    }
}else{//numero es negativo
//5to Paso: Generar un ciclo para imprimir el conteo y crear variable iterador
    console.log(typeof numeroUsuario);
    let i = numeroUsuario;
    while(i <= 0){
            console.log(i);
            i = i + 2;
    }
}

//-7 => -6, -4, -2, 0




