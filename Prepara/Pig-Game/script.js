//Seleccion de elementos que se van a manipular en el juego
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1'); //sirve para los id
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnRollDice = document.querySelector('.btn--roll');
const btnNewGame = document.querySelector('.btn--new');
const btnHoldScore = document.querySelector('.btn--hold');

/*
//condiciones iniciales
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
let currentScore = 0;
let activePlayer = 0; //jugador que actualmente juega
const scores = [0, 0]; //array que guarda los puntajes de los jugadores pos 0 = player 1...
let playing = true; //aun se esta jugando
*/
let currentScore, activePlayer, scores, playing; //declaracion de varias variables al tiempo

//funcion que inicializa las condiciones iniciales dle juego -> init = inicializacion
const init = function () {
  //condiciones iniciales
  currentScore = 0;
  activePlayer = 0; //jugador que actualmente juega
  scores = [0, 0]; //array que guarda los puntajes de los jugadores pos 0 = player 1...
  playing = true; //aun se esta jugando

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner'); //remueve los colores del css
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active'); //si ya esta seleccionado el 0, no pasa nada js no agrega la clase de nuevo
  player1El.classList.remove('player--active'); //si gano el 2, seleccional el 0 (player 1)
};

//llamamos la funcion init para que se ejecute cuando se cargue la pag con el script
init();

const switchPlayer = function () {
  //cambia de player - que debe hacerse cuando cambia de player?
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0; //jugador activo = 0 entonces 1, para que cambie
  player0El.classList.toggle('player--active'); //toggle agrega si la clase esta, de lo contrario la quita, agrega/quita la clase para el player activo
  player1El.classList.toggle('player--active');
};

//funciones al tirar los dados
btnRollDice.addEventListener('click', function () {
  if (playing) {
    //1. generar un numero aleatorio para el dado
    const dice = Math.trunc(Math.random() * 6) + 1;

    //2. Mostrar el dado
    diceEl.classList.remove('hidden'); //muestra el dado, desoculta la imagen
    diceEl.src = `img/dice-${dice}.png`; //cambia la imagen segun el numero arrojado

    //cambia de player si el dado es 1
    if (dice !== 1) {
      //continua el player actual
      //suma el valor del dado en el score
      currentScore += dice;
      //seleccionamos de forma dinamica el id de los players y actualiza en pantalla el puntaje
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      //current0El.textContent = currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHoldScore.addEventListener('click', function () {
  if (playing) {
    //1. agregar el puntaje actual al jugador actual
    scores[activePlayer] += currentScore;
    //scores[1] = scores[1] + currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //2. chequear si el puntaje del jugador es >= 100 -> finalizar game
    if (scores[activePlayer] >= 100) {
      playing = false;
      diceEl.classList.add('hidden'); //ocualta el dado
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      //3. cambiar al sgte jugador
      switchPlayer();
    }
  }
});

//cuando se de click, se llama a la funcion 'init', para dejar todo como en el inicio
btnNewGame.addEventListener('click', init);
