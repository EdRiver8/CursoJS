

let listaEstudiante = ['Juliana', 'Andrea', 'Alejo', 'Camila'];
console.log(typeof listaEstudiante);
let parrafo = document.getElementById('parrafo');
parrafo.innerHTML = listaEstudiante[0];
parrafo.innerHTML = listaEstudiante[3];
parrafo.innerHTML = listaEstudiante[-1];
parrafo.innerHTML = listaEstudiante[-2];