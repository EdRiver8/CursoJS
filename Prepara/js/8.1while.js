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
//programa que muestre los numeros del 5 - 0
let iterador = 5;
while(iterador >= 0){
    console.log("Cuenta en: ", iterador);
    iterador--;
}

//programa que liste numeros y cuando encuentre un numero dado rompa el ciclo
console.log("\n------Buscar Numero------");
iterador = 0;
let numero = 7;
let flag = true;
while(true /*flag*/){
    if(iterador == numero){
        console.log('........ Numero encontrado!: ', iterador);
        break;
        /*flag = false; */
    }
    console.log("Buscando el numero: ", iterador);
    iterador++;//si se usa flag no es necesario el iterador
}

//programa que adivine el numero que ha sacado una persona en un dado, y cuente los intentos que le tomo adivinarlo
console.log("\n------Buscar Numero Aleatorio de un Dado------");

console.log(Math.random());//genera un numero decimal aleatorio
console.log(Math.trunc(Math.random()));//elimina la parte decimal

let dice = Math.trunc(Math.random() * 6) + 1;//genera numeros del 1 al 6
let guess = Math.trunc(Math.random() * 6) + 1;//genera numeros del 1 al 6
let tried = 1; //intento

while(dice !== guess){
    console.log(`Buscando numero de forma Aleatoria: ${guess}`);
    tried++;
    guess = Math.trunc(Math.random() * 6) + 1;
}
console.log(`Numero encontrado: ${guess}, intentos realizados ${tried}`);

/*Realizar un programa que busque el numero arrojado por un dado de forma aleatoriapero que no repita numeros ya seleccionados con el fin de ser optimos en la busqueda; mostrar los intentos para lograr el objetivo y el 
numero buscado*/

/*Realizar un programa que genere un numero aleatorio entre 0-10 y le de tres oportunidades de advinar el numero al usuario, si gasta las tres oportunidades el juego termina, si solo usa una, tiene 100 puntos, si 
usa dos, tiene 66 puntos, si usa 3 tiene 33 puntos, sino tiene 0 puntos*/
