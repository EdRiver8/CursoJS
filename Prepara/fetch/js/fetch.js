"use strict";

function principal() {
  var contenido = document.querySelector("#contenido");
  var btnObtener = document.getElementById("btnObtener");
  btnObtener.addEventListener("click", traer);

  function traer() {
    /*El uso de fetch() más simple toma un argumento (la ruta del recurso que quieres obtener) 
    y devuelve un objeto 'Promise' conteniendo la respuesta, un objeto 'Response'.*/
    //leemos los datos de un archivo txt
    /*
    fetch("datos.txt") //la ruta se toma como si lo llamara desde la carpeta 'Prepara'
      //estamos recuperando un archivo JSON a través de red e imprimiendo en la consola
      //then es la promesa de la posible respuesta del servidor
      //.then((response) => console.log(response)); //muestra todos los atributos que tiene 'Response'
      //.then((response) => console.log(response.text())); //muestra la promesa de una posible respuesta
      .then((response) => response.text()) //convierte la respuesta a objetos tipo txt y los almacena en response
      //data es lo que retorna la 'response' en caso de ejecutarse
      .then((data) => console.log(data));

    */
    /*
    fetch("https://randomuser.me/api/") //usando una url de una api publica que la manda por el metodo get por defecto
      .then((response) => response.json()) //convierte la respuesta a objetos tipo json y los almacena en response
      //.then((data) => console.log(data));
      //.then((data) => console.log(data.results));
      //.then((data) => console.log(data.results[0]));
      .then((data) => {
        //console.log(data.results[0].gender);
        console.log(data.results[0]);
        contenido.innerHTML = `
          <img src="${data.results[0].picture.large}" class="img-fluid rounded-circle">
          <p>Nombre: 
          ${data.results[0].name.title}
          ${data.results[0].name.first}
          ${data.results[0].name.last}
          </p>
        `;
      });
    */

    //leemos los datos de un archivo json
    fetch("datos.json") //ruta desde el 13fetch.html
      //estamos recuperando un archivo JSON a través de red e imprimiendo en la consola
      //then es la promesa de la posible respuesta del servidor
      .then((response) => response.json()) //convierte la respuesta a objetos tipo json y los almacena en response
      .then((data) => {
        //console.log(data);//muestra la info en consola del doc json
        tabla(data);
      });
  }

  var contenidoTabla = document.getElementById("contenido-tabla");
  //funcion tabla, muestra la info del datos.json con formato
  function tabla(data) {
    //console.log(data); //muestra la misma info del doc json
    //reemplazo por string vacio toda la tabla al dar click en 'obtener'
    contenidoTabla.innerHTML = "";
    //se debe recorrer todo el array de 'datos.json' y se va guardando en valor
    for (let valor of data) {
      //console.log(valor);
      //console.log(valor.nombre);
      //concatenamos cada elemento del array
      contenidoTabla.innerHTML += `
      <th scope="row">${valor.id}</th>
      <td>${valor.nombre}</td>
      <td>${valor.email}</td>
      <td>${valor.estado ? "Activo" : "Suspendido"}</td>
      `;
    }
  }
}

window.onload = principal;
