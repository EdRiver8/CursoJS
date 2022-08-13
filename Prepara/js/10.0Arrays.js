/*
consultar que es una arreglo y una matriz... luego que son en programacion...
Existe una estructura llamada Array (llamada en español arreglo o matriz/vector) para almacenar colecciones ordenadas, estos arreglos son de tipo object.

let arr = new Array();
let arr = [];

los elementos dentro de los arreglos estan separados por coma
cada elemento tiene un indice, el cual arranca desde cero hasta la ultima posicion del vector

let fruits = ["Apple", "Orange", "Plum"];
alert( fruits[0] ); // Apple
alert( fruits[1] ); // Orange
alert( fruits[2] ); // Plum
*/

//lista de amigos
const friend1 = 'Sergio';
const friend2 = 'Sergio';
const friend3 = 'Cristina';
//y asi hasta terminar la lista de amigos, gastando una variable por amigo
//un arreglo es un vector con diferentes posiciones que puede almacenar lo que querramos
const friends = ['Sergio','Sergio','Cristina'];
console.log(friends);

//otra manera de crearlo es con la funcion Array:
const teachers = new Array('Jorge', 'Margarita', 'Ana');
console.log(teachers);
console.log(teachers[0]);
console.log(teachers[1]);
console.log(teachers[2]);
console.log(teachers[3]);//no esta definido, no existe dato en esa posicion
console.log(teachers.length);//tamaño del vector-arreglo
console.log(teachers[teachers.length - 1]);//el ultimo elemento de teachers

teachers[2] = 'Juan Diego';//reemplaza (no importa que este como const) el valor que existe en esa posicion 
console.log(teachers);
teachers[5] = 'Edwin';//dos espacios vacios que se pueden llenar
console.log(teachers);
console.log(teachers[3]);//no esta definido
//teachers = ['Camilo', 'Paula'];//no se puede cambiar el arreglo por completo
const teacherName = 'Edwin'
const teacher = [teacherName, 'Rivera', 2021-1986, 'Teacher', friends];//info de edwin, array in array pos=4
console.log(teacher);

/*crear un arreglo que calcule las edades de las siguientes personas: (preguntar año nacimiento estudiantes)
hacer uso de funcion para ello*/
//funcion =>
const calcAge = function(birthYear){
    return 2021 - birthYear;
}
//corta, funcion flecha=>
const calcAge2 = birthYear => 2021 - birthYear;
//arreglo de edades =>
const birthYears = [1986, 2005, 1972, 2001];
console.log(calcAge(birthYears));//no puede pasar todo arreglo, porque la funcion espera un solo valor
console.log(calcAge(birthYears[0]));//edwin edad
const edAge = calcAge2(birthYears[0]);
console.log(edAge);//edwin edad
const edAge3 = calcAge2(birthYears[2]);
console.log(edAge3);

//arreglo que guarde las edades
const ages = [calcAge(birthYears[0]), calcAge2(birthYears[2]), calcAge2(birthYears[birthYears.length-1])];//el ultimo argumento trae el ultimo elemento del arreglo
console.log(ages);


