"use strict";
function principal() {
  datos = document.getElementById("datos");
  enviar = document.getElementById("enviar");
  enviar.addEventListener("click", enviarDatos);

  trabajador = new Worker("trabajador.js"); //sirve para conectar dos js entre si

  trabajador.addEventListener("mensaje", recibido);
}

function enviarDatos() {
  var mensaje = document.getElementById("mensaje").ariaValueMax;
  trabajador.postMessage(nombre);
}

function recibido(salida) {
  datos.innerHTML = salida.data;
}

window.onload = principal;
