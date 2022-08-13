/*
Desafío de codificación n° 3

¡Volvamos a Mark y John comparando sus IMC! Esta vez, usemos objetos para
implementar los cálculos! Recuerde: IMC = masa / altura ** 2 = masa
/ (altura * altura) (masa en kg y altura en metros)
Sus tareas:

1. Para cada uno de ellos, cree un objeto con propiedades para su nombre completo, masa y
altura (Mark Miller y John Smith)

2. Cree un método 'calcIMC' en cada objeto para calcular el IMC (el mismo
método en ambos objetos). Almacene el valor del IMC en una propiedad y también devuélvalo
del método

3. Indica en la consola quien tiene el IMC más alto, junto con el nombre completo y el
respectivo IMC. Ejemplo: "¡El IMC de Juan (28,3) es más alto que el de Marcos (23,9)!"

Test Data: Mark pesa 78 kg y mide 1,69m de altura. John pesa 92 kg y mide 1,95m
alto.

BUENA SUERTE 😀
*/
console.log('--------------IMC--------------');

const mark = {
    fullName : 'Mark Miller',
    mass : 78,
    height : 1.69,
    //buscar como js redonde a dos decimales, para que no muestre toda esa cantidad de cifras despues de la coma
    calcIMC : function(){
        //*100 para pasarlo a un numero de 4 cifras y luego lo dividimos por 100 para que quede un numero de dos enteros y dos decimales
        this.imc = Math.round((this.mass / this.height ** 2)*100)/100;  
        return this.imc;
    }
}

const john = {
    fullName : 'John Smith',
    mass : 92,
    height : 1.95,

    calcIMC : function(){
        this.imc = Math.round((this.mass / this.height ** 2)*100)/100;        
        return this.imc;
    }
}

mark.calcIMC();//creamos primero el metodo para poder llamar la propiedad imc
john.calcIMC();
console.log(mark.imc);
console.log(john.imc);

mark.imc > john.imc ? console.log(`El IMC de ${mark['fullName']} (${mark['imc']}) es mas alto que el de ${john['fullName']} (${john.imc})`) : console.log(`El IMC de ${john['fullName']} (${john['imc']}) es mas alto que el de ${mark.fullName}) (${mark.imc})`);

/*
Desafío # 4
¡Mejoremos aún más la calculadora de propinas de Steven, esta vez usando bucles!
Sus tareas:
1. Cree una matriz de 'facturas' que contenga los 10 valores de facturas de prueba
2. Cree matrices vacías para las propinas y los totales ('propinas' y 'totales')
3. Utilice la función 'calcTip' que escribimos antes (no es necesario repetirla) para calcular
propinas y valores totales (factura + propina) para cada valor de factura en la matriz de facturas. Utilice un p
bucle para realizar los 10 cálculos!
Datos de prueba: 22, 295, 176, 440, 37, 105, 10, 1100, 86 y 52
Sugerencias: Llame a "calcTip" en el bucle y utilice el método push para agregar valores al
propinas y arreglos de totales 😉
4. Bonificación: escriba una función 'calcAverage' que tome una matriz llamada 'arr' como
un argumento. Esta función calcula el promedio de todos los números en el. ¡Este es un desafío difícil (no lo hemos hecho antes)! Aquí es cómo lo resuélvelo:
4.1. Primero, necesitará sumar todos los valores en la matriz. Para hacer la suma,
comience creando una variable 'suma' que comience en 0. Luego, recorra el
matriz usando un bucle for. En cada iteración, agregue el valor actual al
variable 'suma'. De esta manera, al final del ciclo, tiene todos los valores
agregados juntos
4.2. Para calcular el promedio, divida la suma que calculó antes por la
longitud de la matriz (porque ese es el número de elementos)
4.3. Llame a la función con la matriz 'totales'
BUENA SUERTE 😀
*/

console.log('\n\n--------------Propinas--------------');
const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
let tip = 0;
for(let i = 0; i < bills.length; i++){
    tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);
//hasta aca es la parte basica, sigue el bonus =>
const calcAverage = function(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        //sum = sum + arr[i];
        sum += arr[i];
    }
    //console.log(sum);
    return sum / arr.length;
}

console.log(calcAverage([2, 4, 6]));//muestra 4
console.log(calcAverage(totals));//promedio de facturas
console.log(calcAverage(tips));//promedio de propinas
