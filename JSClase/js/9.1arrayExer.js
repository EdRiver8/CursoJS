"use strict";

/**
 * main controla todo el flujo del programa
 */
function main() {
  //leemos cantidad de estudiantes
  let cantidadEstud = prompt(
    "Ingresa la cantidad de estudiantes a registrar: "
  );
  //llamamos la funcion que retorna el vector que va a guardar info estudiante
  var estudiantes = vectorEstud();
  //Iniciamo el ciclo que permite leer los datos segun la cantidad de estudiantes
  for (let i = 0; i < cantidadEstud; i++) {
    //muestra el numero de estudiante en el que vamos "${i}" y lo almacenamos en el vector con push (al final)
    estudiantes.push(
      prompt(`Ingresa el nombre del estudiante numero ${i + 1}: `) //uso de templates literals
    );
    estudiantes.push(
      prompt(
        `Ingresa el deporte practicado por el estudiante numero ${i + 1}: `
      )
    );
  }
  //console.log(estudiantes[0]);//imprimimos nombre del 1er estudiante
  //console.log(estudiantes[1]);//imprimimos deporte del 1er estudiante
  //obtenemos el tamaño del vector y lo guardamos en size
  let size = estudiantes.length;
  //llamamos la funcion para imprimir el vector, enviando el vector y su tamaño
  mostrarDatosVector(estudiantes, size);
}

/**
 * crea un vector para almacenar datos
 * @returns retorna un vector vacio
 */
function vectorEstud() {
  let vector = [];
  return vector;
}

/**
 * Crea una funcion (procedimiento) que imprime los valores del vector
 * @param {*} vector recibe un vector con elementos a imprimir
 * @param {*} size recibe el tamaño del vector a recorrer, para controlar hasta donde se imprime
 */
function mostrarDatosVector(vector, size) {
  //contador que controla las posiciones del vector
  let i = 0;
  //contador que controla la cantidad de estudiantes
  let j = 1; //tambien se podria hacer asi: (i/2)+1
  console.log("........Estudiantes y Deportes.........");
  //console.log("Tamaño del vector: " + size);
  //mientras i sea menor que el tamaño del vector haga
  while (i < size) {
    //uso de templates literals
    console.log(`${j}: ${vector[i]}, practica ${vector[i + 1]}`);
    //console.log("Estudiante: " + vector[i] + " Deporte: " + vector[i+1]);
    i = i + 2; //se incrementa de a dos porque cada par de datos le pertenecen a un solo estudiante
    j++; //este solo controla el indice del estudiante (numeracion de los estudiantes)
  }
}

//lo primero que carga la ventana en el navegador
window.onload = main; //ventana al cargarse ejecute main
