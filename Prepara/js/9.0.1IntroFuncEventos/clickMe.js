"use strict";

//funcion nombrada o clasica:
function getName(fName, sName) {
  console.log(`(desde clasica)Ud se llama: ${fName} ${sName}`);
}

//funcion anonima (sin nombre), si se tiene asi ((){}), es auto ejecutada de forma inmediata, si esta (){}, se debe llamar por medio del uso de una variable
/*
(function (fName, sName) {
  alert(`Ud se llama: ${fName} ${sName}`);
})("Ed", "Riv"); //son los valores por defecto de la funcion;
*/
//guardando la funcion en una variable para poder acceder a estas
const NAMEUSER = function (fName, sName) {
  alert(`(desde Anonima)Ud se llama: ${fName} ${sName}`);
};

//NAMEUSER("Edwin", "Rivera");

//Uso de funciones tipo Arrow ()=>{}, toda arrow function es anonima
/*
((fName, sName) => {
  alert(`(desde Arrow)Ud se llama: ${fName} ${sName}`);
})("Ed", "Riv");
*/
//como son anonimas se pueden guardar en variables, si es una sola linea no es necesario {}, ni el return de tenerlo:
const NAMEUSER2 = (fName, sName) =>
  alert(`(desde Arrow)Ud se llama: ${fName} ${sName}`);

//NAMEUSER2("Edwin", "Rivera");

//tambien puede pasar que la arrow no reciba parametros, se deja () vacio o se pone un guion bajo _:
const NAMEUSER3 = () => alert(`(desde Arrow)Hola Mundo!`);
//NAMEUSER3();


