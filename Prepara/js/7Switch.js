/*forma alternativa para escribir varias condiciones que dependen de un unico valor y que presenta diferentes opciones*/
/*
    el restaurante del colegio, tiene un almuerzo diferente dependiendo del dia de la semana en que se este, para ello
    se quiere construir un programa que muestre en pantalla el almuerzo segun el dia:
    Lunes = pasta
    martes = frijoles
    miercoles y jueves = lentejas, garbanzos o ajiaco
    viernes = pizza
*/
'use strict'; //ayuda a mostrar algunos errores - linea 87 tienesLicencia != tieneLicencia

const day = 'friday';
switch(day){ //dia seleccionado haga lo siguiente
    case 'monday':
        console.log("Pasta");
        break;
    case 'tuesday':
        console.log("Frijoles");
        break;
    case 'wednesday':
    case 'thursday':
        //se debe hacer un submenu para este caso
        console.log("Lentejas - Garbanzos - Ajiaco");
        break;
    case 'friday':
        console.log('Pizza');
        break;
    default:
        //para concatenar se hacia con un "+", ahora se puede hacer asi =>
        //uso "template literals" => `` y ${} = llamar variables y concatenar mas facil
        const falla = `Error al seleccionar el dia '${day}', no existe en el programa.`;
        console.log(falla);
}
//realizarlo con los if =>

let inputYear = '1986';
console.log(inputYear + 18);//concatena la cadena con el numero
console.log(Number(inputYear), inputYear);//convierte la cadena a numero de ser posible - no puede convertir letras a numeros
console.log(inputYear + 18);//el resultado es el mismo porque no se ha modificado el valor en la memoria
inputYear = Number(inputYear);//a inputyear le llevamos la conversion - se modif lo que hay en memoria
console.log(inputYear + 18);

const nameUser = 'Edwin';
console.log(Number(nameUser));//no es un numero NaN

inputYear = String(inputYear);//convierte a cadena de texto
console.log(inputYear + 18);

let n = '1' + 1// '11';
n = n - 1;//10
console.log(n);
console.log(2 + 3 + 4 + '5');
console.log('10' - 3 + 4 - '5');
console.log('10' + 'A' + 4 + '5');


//uso de operador ternario, if mas corto para operaciones no complejas, mas uso de template literals
let age = 7;
console.log(`Este es un texto
de
prueba`);
console.log(`Ud es: ${age >= 18? 'Mayor de Edad' : 'Menor de Edad'}.`); 

/*
Coding Challenge #4
Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430
Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2
§ Value X is between 50 and 300, if it's >= 50 && <= 300 😉
GOOD LUCK 😀
*/
let tienesLicencia = false;
const pasoExamen = true;
if(pasoExamen) tieneLicencia = true;
if(tienesLicencia) console.log('I Can Drive');

//conts name = 'edwin';//name es una palabra reservada
//const private = 534; //palabra reservada - private