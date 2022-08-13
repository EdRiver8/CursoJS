const formulario = document.getElementById("formulario");
//console.log(formulario);

const userEmail = document.querySelector("input[name = 'userEmail']");

//1er formulario
formulario.addEventListener("submit", (e) => {
  e.preventDefault(); //para evitar que envie los datos por el metodo get
  log.textContent = `Formulario Recibido! Time Stamp: ${e.timeStamp}... Hola ${
    document.getElementById("userName").value +
    ", " +
    document.getElementById("userEmail").value
  }`;
  //console.log("Formulario Recibido");
});
