'use strict';
/*  que es el dom y dom manipulation?
        Document Object Model: representacion del HTML => 
        Conexion entre html y js para su respectiva manipulacion
    que es un query???

*/
//la sgte instruccion selecciona todo el elemento html y lo muestra en consola =>
//console.log(document.querySelector('.message')); //se manipula como si fuera en css
//console.log(document.querySelector('.message').textContent); //selecciona solo el texto
//vamos a cambiar el mensaje de esa etiqueta html a: Numero Correcto!
//document.querySelector('.message').textContent = 'Correct Number! 😁';
//cambiemos el valor del signo de interrogacion por un numero cualquiera
//document.querySelector('.scrtNumber').textContent = 13;
//cambiemos el puntaje que marca el juego
//document.querySelector('.score').textContent = 10;
//leer el valor del input donde va el numero que creo que es
//console.log(document.querySelector('.guess').value); //vacio porque en la caja no hay algo
//document.querySelector('.guess').value = 5; //le asignamos un valor
//console.log(document.querySelector('.guess').value); //lo mostramos por consola

/* ahora vamos a hacer que la aplicacion reaccione a algun evento en la pagina como:
    - Dar click
    - Ingresar texto
    - un movimiento del mouse
    - una tecla oprimida
    - muchos otros
   a esto se llema event listner
*/

//el numero aleatorio se realiza despues del primer si... tener cuenta para explicacion
//para que solo se ejecute una vez y no este cambiando el numero cada que se de check
//necesitamos un numero entre 1 - 30
let secretNumber = Math.trunc(Math.random() * 30) + 1;
console.log(secretNumber);
document.querySelector('.scrtNumber').textContent = secretNumber; //muestra el numero generado
let score = 20; //el puntaje inicial que sera disminuido segun los errores
let highscore = 0;

//es de lo ultimo, ver lineas que se repiten e intentar agruparlas en funciones
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
}; //hacerla en forma anonima y en flecha

/*busque una clase llamada 'check', escuche que pasa en ella cuando se hace click y luego 
reaccione a esto por medio de una funcion conocida como event handler, que nosotros mismos 
crearemos para decirle al js que debe hacer y como proyectarlo en el DOM*/
document.querySelector('.check').addEventListener('click', function () {
  //funcion expresion
  //cuando se de click, va a tomar el valor y mostrarlo por consola
  //console.log(document.querySelector('.guess').value); //el valor se guarda es en 'guess'
  //const guess = document.querySelector('.guess').value;
  //console.log(guess);
  //console.log(guess, typeof guess); //muestra que es un string... problema para operar con numeros
  //se debe aplicar algo que tecnica/ en programacion se llama casteo?
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  // ya de aca en adelante es plantear la logica del juego por medio del codigo =>
  //1ro verificar que la casilla no este vacia, si guess no existe=>
  if (!guess) {
    //document.querySelector('.message').textContent = '🛑 No Number! 🤔';
    displayMessage('🛑 No Number! 🤔');
    //despues de esto se va a generar el numero aleatorio por fuera
    //adivina el numero
  } else if (guess === secretNumber) {
    //si adivina
    //document.querySelector('.message').textContent = 'Correct Number! 😁';
    displayMessage('Correct Number! 😁');
    document.querySelector('.scrtNumber').textContent = secretNumber; //muestra el numero generado
    //uso de camelcase notacion para manipular propiedades del css
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.scrtNumber').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    //esto es de lo ultimo por hacer, agrupar los cod de abajo
    if (score > 1) {
      /*document.querySelector('.message').textContent =
        guess > secretNumber ? 'Too High! 👆' : 'Too Low! 👇';*/
      displayMessage(guess > secretNumber ? 'Too High! 👆' : 'Too Low! 👇');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //document.querySelector('.message').textContent = 'You Lost The Game! 🤣';
      displayMessage('You Lost The Game! 🤣');
      document.querySelector('.score').textContent = 0;
    }

    /*
    //esta encima del numero
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High! 👆';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost The Game! 🤣';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    }

    //esta bajo el numero
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low! 👇';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost The Game! 🤣';
      score--;
      document.querySelector('.score').textContent = score;
    }
    */
  }
  console.log(score);
  //que pasa si el score = 0???

  //que pasa si se ingresa un numero negativo???
});

/*
Desafío de codificación n° 1
¡Implementa una función de reseteo del juego, para que el jugador pueda hacer una nueva suposición!
Sus tareas:
1. Seleccione el elemento con la clase "again" y controle el evento de click.
2. En la función del controlador, restaure los valores iniciales de la 'puntuación' y
variables 'secretNumber'
3. Restaure las condiciones iniciales del mensaje, el número, la puntuación y la entrada de adivinanzas.
4. También restaure el color de fondo original (# 222) y el ancho del número (15rem)
BUENA SUERTE 😀
*/
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 30) + 1;
  document.querySelector('.score').textContent = score;
  //document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.scrtNumber').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
});
