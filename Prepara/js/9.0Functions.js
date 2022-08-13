/*
    Antes:
        Consultar variable local y global en JS...
    Se crean porque existe un procedimiento que se puede ejecutar varias veces en el programa,
    y para no copiar una y otra vez las mismas lineas, se crea una funcion.
    Son como en matematicas, reciben unos valores (variables, constantes, arreglos, listas,
    objetos, diferentes tipos de datos) con los cuales va a trabajar internamente para 
    pcc una salida.
    tienen la siguiente estructura:
        * function = palabra reservada para decir que se va a construir una funcion
        * nombre de la funcion =  nombre que define lo que hace la funcion
        * (paramentros) = valores con los que va a trabajar la funcion, separados por ','
           puede tener cero o muchos parametros.
        {
            cuerpo de la funcion:
            lineas de codigo que se ejecutan cuando se llama una funcion
        }
    llamar - invocar: es hacer uso de una funcion, se copia el nombre seguido de dos 
    parentesis y en ellos los argumentos con los que va a trabajar
    Las funciones pueden retornar datos o no; si va a retornar algo, para ello se usa la 
    palabra reservada 'return' y seguido lo que se va a devolver, la linea que llama la 
    funcion debe tener una variable en la que se almacene el dato a devolver; cuando la
    funcion no retorna algo, no es necesario tener una variable de almacenaje, a este caso
    se le llama a la funcion: procedimiento.
    despues de la palabra return, no deben haber mas lineas de ejecucion en la misma 
    jerarquia (indentacion), porque no se van a ejecutar
*/
"use strict";

function logger() {
  console.log("Mi nombre es Edwin");
}

logger(); //procedimiento, no es necesario guardar el valor porque no devuelve algo
logger();
logger();

//recordando como en mate, son maquinas
function procesadorJugos(apples, oranges) {
  //los parametros son la cantidad de frutas a usar
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}
//5 y 0 son los argumentos de la funcion
procesadorJugos(5, 0); //no variable almacena/, pierde la info que retorna
let jugo = procesadorJugos(4, 3);
console.log(jugo);

//funcion que sume dos numeros
function sumaDosNumerosProced(num1, num2) {
  let suma = num1 + num2;
  console.log(`La suma desde el procedimiento es: ${suma}`);
}

function sumaDosNumeros(num1, num2) {
  let suma = num1 + num2;
  return suma;
}

let num1 = 5;
let num2 = 10;
sumaDosNumerosProced(num1, num2); //no retorna valor, realiza un procedimiento con los argumen
let suma = sumaDosNumeros(num1, num2); //retorna valor para luego ser manipulado en el programa
console.log(`La suma desde otra parte del programa es: ${suma}`);

//programa que calcule la edad por medio de una funcion:
//declaracion de una funcion - function declaration
function calcAge1(birthYear) {
  //const age = 2021 - birthYear;
  //return age;
  return 2021 - birthYear; //retorna el resultado de la operacion
}

const age1 = calcAge1(1986);
console.log("Tu edad es: ", age1);

/*funcion expression (anonima), es una expresion que realiza un procedimiento y retorna un valor que se almacena directamente en una variable*/
const calcage2 = function (birthYear) {
  return 2021 - birthYear; //retorna el resultado de la operacion
};

const age2 = calcage2(1986);
console.log("Tu edad es: ", age2);

/* la diferencia entre la funcion declaration y la expression, es que la 1ra se puede llamar
en el codigo antes de declararse (construirse) y la 2da no*/

/*existe otro tipo de funciones - funcion flecha (arrow), son mas cortas y por ello mas 
rapidas de escribir, pertenecen a las funciones expression*/

//birtYear es el parametro de la funcion
const calcAge3 = (birthYear) => 2021 - birthYear; //el retorno es implicito, no es neceario 'return'

const age3 = calcAge3(1986);
console.log("Tu edad es: ", age3);

//programa que calcule los años que le faltan a una persona antes de recibir la pension
//1ro calcular la edad y luego los años que le faltan para la pension
const yearUntilRetirement = (birthYear) => {
  const age = 2021 - birthYear;
  const retirement = 62 - age;
  return retirement;
};

console.log("Te faltan para la pension: ", yearUntilRetirement(1986), " años");

//si se necesitan mas parametros, se encierran dentro de parentesis como las funciones por declaracion
const yearUntilRetirement2 = (birthYear, name) => {
  const age = 2021 - birthYear;
  const retirement = 62 - age;
  return `${name}, faltan ${retirement} años para la pension 😥.`;
};

console.log(yearUntilRetirement2(1986, "Edwin"));
console.log(yearUntilRetirement2(1995, "Kate"));
