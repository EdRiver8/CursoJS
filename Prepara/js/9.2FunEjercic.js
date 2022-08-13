/*
¡En un colegio existen dos equipos de deportes, los Crewdos y los Walkers! Hay uno nueva disciplina de gimnasia, que funciona de manera diferente.
Cada equipo compite 3 veces, y luego se calcula el promedio de los 3 puntajes.
Un equipo solo gana si tiene al menos el doble de la puntuación media del otro equipo. De lo contrario, ¡ningún equipo gana!
A realizar:
1. Cree una función de flecha 'calcPromedio' para calcular el promedio de 3 puntuaciones
2. Usa la función para encontrar el promedio de ambos equipos.
3. Cree una función 'checkWinner' que tome el puntaje promedio de cada equipo como parámetros ('promCrewdos' y 'promWalkers'), y luego registre el ganador en la consola, junto con los puntos de victoria, según la regla anterior.
Ejemplo: "Los Walkers ganan (30 contra 13)"
4. Utilice la función 'checkWinner' para determinar el ganador para los datos 1 y Datos 2
Datos de prueba:
    * Data 1: Los Crewdos puntúan 44, 23 y 71. Los Walkers puntúan 65, 54 y 49
    * Data 2: Los Crewdos puntúan 85, 54 y 41. Los Walkers puntúan 23, 34 y 27
*/

const calcPromedio = (punt1, punt2, punt3) => (punt1 + punt2 + punt3) / 3;
console.log(calcPromedio(3,4,5));

//prueba con data 1:
let puntuaCrewdos = calcPromedio(44, 23, 71);
let puntuaWalkers = calcPromedio(65, 54, 49);
console.log(puntuaCrewdos, puntuaWalkers);

const checkWinner = function(promCrewdos, promWalkers){
    if(promCrewdos >= promWalkers * 2){
        console.log(`Crewdos Ganan 🥇 (${promCrewdos} vs. ${promWalkers})`) 
    }else if(promWalkers >= promCrewdos * 2){
        (`Walkers Ganan 🥇 (${promWalkers} vs. ${promCrewdos})`);
        //que pasa si nadie gana???
    }else console.log("Ningun equipo logro la ventaja necesaria... No hubo ganador 😅")        
    
}
checkWinner(puntuaCrewdos, puntuaWalkers);
//prueba con data 2
puntuaCrewdos = calcPromedio(85, 54, 41);
puntuaWalkers = calcPromedio(23, 34, 27);
checkWinner(puntuaCrewdos, puntuaWalkers);
//hace lo mismo que las tres lineas anteriores =>
checkWinner(calcPromedio(85, 54, 41), calcPromedio(23, 34, 27));