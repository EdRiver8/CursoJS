/* 
    Los operadores en JS, son los basicos de matematicas:
    * Suma: +
    * Resta: -
    * Multip: *
    * Divsion: /
    * Resiudio - Resto - Mod: %
    * Potenciacion: **
    
    Nota: el "+" tambien se puede usar como concatenador
*/
let msj = "Hola desde Alert!!!";
let msj2 ="Cierra la ventana";
//en ocasiones es recomendable usar el "+" como concatenador, esto debido a que
//la "," no concatena en un "alert"
//alert(msj + msj2);

//hacer un programa que sume las manzanas de alex con las naranjas de mario
//alex tiene 6 y mario tiene 15

let alex_manzana = "6";
let mario_naranja = "15";
console.log(typeof alex_manzana);
//como las apple y orange estan definidas como texto (string), el operador "+"
//funciona como concatenador, y por lo tanto pega las cadenas (string) y no
//realiza la operacion
console.log("La suma es: ", alex_manzana + mario_naranja);

//solucionando el problemda de las strings, es quitar las ""
alex_manzana = 6;//convertidos a numeros
mario_naranja = 15;
console.log(typeof alex_manzana);
console.log("La suma es: ", alex_manzana + mario_naranja);

//otra manera corta, sin usar variables (lo recomendado es crear variables)
console.log("La suma es: ", 6 + 15);

//forma optima, usando variables
alex_manzana = 6;//convertidos a numeros
mario_naranja = 15;
let resultado = alex_manzana + mario_naranja;
console.log("La suma es: ", resultado);

//un programa que realice con dos numeros, las operaciones basicas suma->radicacion
console.log("...Calculadora...");
let variable1 = 13;
let variable2 = 9;
//suma
let suma = variable1 + variable2;
//resta
let resta = variable1 -  variable2;
//mult
let mult = variable1 * variable2;
//div
let div = variable1 / variable2;
//res
let res = variable1 % variable2;
//pot
let pot = variable1 ** variable2;
//rad
let rad = variable2 ** (1/variable1); //base es = 9, el indice de la raiz = 13

console.log("El resultado de la suma es: ", suma);
console.log("El resultado de la resta es: ", resta);
console.log("El resultado de la multiplicacion es: ", mult);
console.log("El resultado de la division es: ", div);
console.log("El residuo es: ", res);
console.log("El resultado de la potenciacion es: ", pot);
console.log("El resultado de la radicacion es: ", rad);