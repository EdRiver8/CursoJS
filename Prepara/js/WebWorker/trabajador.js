addEventListener("mensaje", mensajeRecibido);

function mensajeRecibido(entrada) {
  //var res = "El mensaje recibido es: " + entrada.dato;
  var res = `El mensaje recibido es: ${entrada.data}`;
  postMessage(res);
}
