const edArray = [
  "Edwin",
  "Rivera",
  2021 - 1986,
  "Bello",
  ["Sergio", "David", "Cristina"], //ultimo elemento es un arreglo
  true,
];
console.log("Impresion desde el arreglo \n", edArray);

//uso de ciclo para imprimir desde un arreglo
for (let i = 0; i < edArray.length; i++) {
  console.log(edArray[i], typeof edArray[i]);
  //console.log(typeof(edArray[i]));
  /*
    if(typeof(edArray[i]) == 'object'){
        console.log('x');
    } 
    */
  //se verifica si lo que hay es un objeto y se recorre cada elemento por separado
  if (typeof edArray[i] == "object") {
    for (let j = 0; j < edArray[i].length; j++) {
      console.log(edArray[i][j], typeof edArray[i][j]);
    }
  }
}

//crear un arreglo que guarde los tipos de datos que existen en edArray
const types = [];
for (i = 0; i < edArray.length; i++) {
  types[i] = typeof edArray[i];
  //se verifica si lo que hay es un objeto y se recorre cada elemento por separado
  if (typeof edArray[i] == "object") {
    const aux = [];
    for (j = 0; j < edArray[i].length; j++) {
      //aux[j] = typeof(edArray[i][j]);
      aux.push(typeof edArray[i][j]);
    }
    types[i] = aux;
  }
}
console.log(types);

/*realizar un programa que le pregunte al usuario cuantos nombres de personas desea almacenar, guarde su nombre
y su respectivo año de nacimiento, y al final muestre el nombre, año nacimiento y edad; la cantidade de 
personas a almacenar debe estar entre 3 y 10.
Nota: hacer uso de arrays, functions y loops para la solucion
*/

const birthYears = [1995, 2001, 1986, 2006];
const ages = [];

for (i = 0; i < birthYears.length; i++) {
  ages.push(2021 - birthYears[i]);
}

console.log(ages);

//mostrar el array edArray al reves
for (i = edArray.length - 1; i >= 0; i--) {
  console.log(i, edArray[i]);
}

/*en una casa se han registrado las siguientes temperaturas en un mismo dia:
    -3, -2, -6, -1, error, 9, 13, 17, 15, 14, 9, 5
la empresa que fabrica los termometros electricos desea saber: 
    - cual fue el mayor valor registrado como el menor.
    - cual es la amplitud en las temperaturas
    - como afecta los errores a la amplitud y que hacer con estos
    - se han percatado que las temperaturas registradas estan entre las 03:00 - 18:00
      y en el resto del dia se registraron 4, 1, -1, -2, -3, se necesita que la funcion a desarrollar
      tenga en cuenta estos datos (reciba dos arrays de temperaturas).
    - se desea que la temperatura se mida en grados kelvin
Tener presente que algunas ocasiones el sensor se descalibra.*/

const temperatures = [-3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
//console.log(temperatures[temperatures.length - 1]);//muestra la ultima temperatura

const calcTempAmplitude = function (temps) {
  let max = temps[0]; //se pone un valor cualquiera de las temperaturas registradas como max
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== "number") {
      //console.log("x");
      continue; //se ignoran los valores de los errores porque no van a permitir manipular los datos
    }
    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }
  console.log(
    `La temperatura maxima es de: ${max} grados C y la minima es: ${min}`
  );
  return max - min;
  //hacer que la funcion devuelva mas de un valor... guardar los datos en un arreglo o un objeto y devolver este
  //return max, min;
};

//calcTempAmplitude(temperatures);
const amplitude = calcTempAmplitude(temperatures);
console.log("La amplitud de las temperaturas es: ", amplitude);

//ayuda para la solucion del ultimo punto
const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = array1.concat(array2);
console.log(array3);
//o usar un ciclo para ir agregando cada uno de los elementos de los dos vectores

//grados kelvin -> genera un bug, el cual es al recibir el valor por el promt en grados c, los pone en formato texto
const measureKelvin = function () {
  const measurement = {
    //objeto para las medidas
    type: "temp",
    unit: "celsius",
    //value: prompt("Degrees Celsius: "),
    value: Number(prompt("Degrees Celsius: ")), //asi se arregla el bug
  };
  //console.log(measurement); //revela que value al ingresarse es un string

  const kelvin = measurement.value + 273; //concatena la cadena de los grados con el valor, mas no los suma
  return kelvin;
};

console.log(measureKelvin()); //envia la cadena y concatena

//hacer un ejercicio para clasificar motos segun la cilindrada, bajo-alto cc
