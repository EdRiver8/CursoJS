//lo 1ro es seleccionar todos los elementos que vamos a usar, para no estar repitiendo eso
const modal = document.querySelector('.modal'); //guardamos todo el html
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
//const btnsOpenModel = document.querySelector('.show-modal');//solo el 1ro es seleccionado
const btnsOpenModel = document.querySelectorAll('.show-modal'); //muestra como si fuera array
console.log(btnsOpenModel);
/*
//muestra los elementos y sus textos en la consola
for (let i = 0; i < btnsOpenModel.length; i++) {
  console.log(btnsOpenModel[i].textContent);
}*/

//agrupa lineas de codigo en una funcion
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
//agrupa lineas de codigo en una funcion
const openModal = function () {
  //console.log('button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsOpenModel.length; i++) {
  btnsOpenModel[i].addEventListener('click', openModal);
}

/*
//trae al frente la informacion del modal
for (let i = 0; i < btnsOpenModel.length; i++) {
  btnsOpenModel[i].addEventListener('click', function () {
    console.log('button clicked'); //muestra en consola las veces que btn es cliqueado
    modal.classList.remove('hidden'); //remueve la clase hidden, no se usa '.' porque este es solo para los 'selectors'
    overlay.classList.remove('hidden');
  });
}*/

/*sin parentesis porque los parentesis lo que hacen es ejecutar la funcion de forma 
inmediata que js ejecute esa linea y solo queremos que se ejecute cuando se oprima click*/
btnCloseModal.addEventListener('click', closeModal);
/*
//cierra la ventana modal al hacer click en la 'x'
btnCloseModal.addEventListener('click', function () {
  modal.classList.add('hidden'); //se agrega la clase hidden que esconden a modal
  overlay.classList.add('hidden'); //se agrega la clase overlay (cubrir)
});
*/

overlay.addEventListener('click', closeModal);

//tambien la ventana emergente se puede cerrar oprimiendo la tecla escape
//3 eventos, keypress, keydown, keyup; e = event, es un estandar en js
//e, es el evento que escucha, guarda la info de la keypress
document.addEventListener('keydown', function (e) {
  //console.log('Key Pressed');
  //console.log(e); //muestra el objeto (tecla presionada) con toda la info
  //console.log(e.key); //muestra la key presionada
  //if (e.key === 'Escape') console.log('Escape was pressed');
  if (e.key === 'Escape') {
    //si el modal no contiene clase 'hidden', es decir la ventana emergente no esta desplegada
    if (!modal.classList.contains('hidden')) {
      closeModal(); //se puede simplificar con un &&
    }
  }
});
