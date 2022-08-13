const capacidadRepresa = 4;
const cantidadInicialMes = 1;
//15 años en meses
const duracionSimulacion = 180;
let cantidadActual = 0;
let vertedero = 0;
let generacionEnergiaConMenosDe2Unds = 0;

for (let i = 0; i < duracionSimulacion; i++) {
  cantidadActual = cantidadInicialMes;

  let rnd = Math.random();

  if (rnd < 0.15) {
    cantidadActual += 0;
    liberarAgua();
  } else if (rnd < 0.5) {
    cantidadActual += 1;
    liberarAgua();
  } else if (rnd < 0.8) {
    cantidadActual += 2;
    liberarAgua();
  } else {
    cantidadActual += 3;
    liberarAgua();
  }

  //Generación de energía
  if (cantidadActual < 2) {
    generacionEnergiaConMenosDe2Unds += 1;
    cantidadActual = 0;
  } else {
    cantidadActual -= 2;
  }
}
//Resultados
console.log(`Unidades tiradas por exceso: ${vertedero}`);
console.log(
  `Veces que se generó energía con < 2 unds: ${generacionEnergiaConMenosDe2Unds}`
);

function liberarAgua() {
  let cantidadALiberar = 0;
  if (cantidadActual > capacidadRepresa) {
    cantidadALiberar = cantidadActual - capacidadRepresa;
    cantidadActual = capacidadRepresa;

    vertedero += cantidadALiberar;
  }
}
