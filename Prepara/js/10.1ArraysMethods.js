//los metodos son funciones que se pueden aplicar a los arreglos y otros elementos de js
let teachers = ['Jorge', 'Margarita', 'Ana'];
console.log(teachers.length);

//add elements
teachers.push('Oscar');//agrega un elemento al final
console.log(teachers);
console.log(teachers.length);
teachers.unshift('Edwin');//agrega al inicio
console.log(teachers);

//remove elements
teachers.pop();//remueve el ultimo elemento
console.log(teachers);
teachers.pop();//remueve el ultimo elemento
console.log(teachers);
const popEnd = teachers.pop();//antes de eliminarlo, salvamos el elemento
console.log(popEnd);//elemento salvado
console.log(teachers);
teachers.shift('Edwin');//remueve al inicio
console.log(teachers);

//redimensionamos el arreglo =>
teachers = ['Jorge', 'Margarita', 'Ana'];
console.log(teachers);

//posicion de un elemento =>
console.log(teachers.indexOf('Margarita'));
console.log(teachers.indexOf('Edwin'));//-1 porque no existe

//verificar si existe un elemento =>
console.log(teachers.includes('Jorge'));
console.log(teachers.includes('Sebastian'));

teachers.includes('Ana') ? console.log(teachers[teachers.indexOf('Ana')], 'es un profesor del cole') : console.log('No existe el docente');

/*
Desafío de codificación n.°2
Steven todavía está construyendo su calculadora de propinas, usando las mismas reglas que antes: propina el 15% de la factura si el valor de la factura está entre 50 y 300, y si el valor es diferente, la propina es
20%.
Sus tareas:
1. Escriba una función 'calcTip' que tome cualquier valor de factura como entrada y devuelva
la propina correspondiente, calculada según las reglas anteriores (puede consultar el código del primer desafío de la calculadora de propinas si es necesario). Usa la función escrita que más le guste. Pruebe la función con un valor de factura de 100.
2. ¡Y ahora usemos matrices! Así que cree una matriz 'facturas' que contenga los datos de prueba.
3. Cree una matriz de "propinas" que contenga el valor de la propina para cada factura, calculado a partir de la función que creaste antes.
4. Bonificación: cree una matriz 'total' que contenga los valores totales, por lo que la factura + la propina .
Datos de prueba: 125, 555 y 44
Sugerencia: recuerde que una matriz necesita un valor en cada posición, y ese valor puede
¡ser realmente el valor devuelto de una función! Entonces puedes simplemente llamar a una función en la matriz como cada uno de los valores (así que no es necesario almacenenar los valores en diferentes variables por separado, sino directamente en la matriz) 😉
BUENA SUERTE 😀
*/
//funcion expresion - anonima
const calcTip = function (bill){
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
//crearla como funcion flecha
const calcTip2 = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
let tips = [];
//si quisieramos guardar las propinas=>
/*
const tip1 =calcTip(bills[0]);
const tip2 =calcTip(bills[1]);
const tip3 =calcTip(bills[2]);//el ejercicio dice que no lo hagamos
*/
/*
//Una manera=>
tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];//que tal sin son 10.000 datos?
console.log(tips);
*/

//Otra manera=>
/*
for (i = 0; i < bills.length; i++){
    //tips[i] = calcTip(bills[i]);//las tips corresponde a su respectiva bill: 0 - 0, 1 - 1, 2 - 2....
    tips.push(calcTip(bills[i]));//hace lo mismo que la linea anterior
}
console.log(tips);
*/

//Otra manera=>
i = 0;
while(i < bills.length){
    tips[i] = calcTip2(bills[i]);
    //tips.push(calcTip(bills[i]));
    i++;
}
console.log(tips);

//construccion de la matrix total =>
console.log(bills, tips);
//recorremos las dos y almacenamos en totals
let totals = [];
for(i = 0; i < bills.length; i++){//como bills y tips son del mismo tamaño, no importa cual se compare
    totals[i] = bills[i] + tips[i];
}
console.log(bills, tips, totals);

/*realizar un ciclo que imprima la factura de forma entendible para una persona comun, ejemplo:
    factura 1: 
        valor = 125
        tip = 18.75
        total = 143.75
*/