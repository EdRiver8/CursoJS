const ppal = () => {

  //Variables deterministicas
  let costoUnitario = -6000;
  let venta = 8000;
  let devolucion = 3600;
  let costoPasadosDiezDias = -4800;
  let cantidadMaxDemandada = 270; //(11 * 10) 11, mayor cantidad demandad en primeros 10 dias + (8 * 20) 8, mayor cantidad dias restantes del mes y 20 cantidad dias restantes
  let cantidadSegundoPedido = 0; 
  let demandaPrimerosDias = 0; 
  let demandaUltimosDias = 0;
  let nMeses = 10;
  let ingresos = 0;
  let bandera1 = false;
  let bandera2 = false;
  let resultados = [];

  document.documentElement.innerHTML = "";

  document.write(`
      <button onclick="reload()">Ejecutar Simulación</button>
      <hr>
      <h1>Política optima de compra</h1>
      `);

  for (let i = 0; i < nMeses; i++) {
    let ingresosOptimosPrimerosDias = 0; 
    let ingresosCantidadPrimero = 0;

    //Se optimiza la cantidad máxima demandada
    while (!bandera2) { 

      let ingresosOptimosUltimosDias = 0;
      let ingresosCantidadSegundo = 0;

      // Se optimiza la cantidad del segundo pedido
      while (!bandera1) { 
        let demandaTotalPrimerosDias = 0;
        let demandaTotalUltimosDias = 0;

        //Durante los primeros 10 días
        for (let j = 0; j < 10; j++) { 
          let rnd = Math.random();
          console.log(rnd);
          if(rnd <= 0.05){
            demandaPrimerosDias = 5;
          }else if(rnd <= 0.1){
            demandaPrimerosDias = 6;
          }else if(rnd <= 0.2){
            demandaPrimerosDias = 7;
          }else if(rnd <= 0.35){
            demandaPrimerosDias = 8;
          }else if(rnd <= 0.6){
            demandaPrimerosDias = 9;
          }else if(rnd <= 0.85){
            demandaPrimerosDias = 10;
          }else{
            demandaPrimerosDias = 11;
          }
          demandaTotalPrimerosDias += demandaPrimerosDias;
        }

        //Durante los siguientes 20 días
        for (let k = 0; k < 20; k++) {
            rnd = Math.random();
            if(rnd <= 0.15){
              demandaUltimosDias = 4;
              }else if(rnd <= 0.35){
                demandaUltimosDias = 5;
              }else if(rnd <= 0.65){
                demandaUltimosDias = 6;
              }else if(rnd <= 0.85){
                demandaUltimosDias = 7;
              }else{
                demandaUltimosDias = 8;
              }
              demandaTotalUltimosDias += demandaUltimosDias;
        }

        //Cuando la demanda en los primeros 10 días es menor o igual a la que se puede vender
        if(demandaPrimerosDias <= cantidadMaxDemandada){
            //Si la demanda en los próximos 20 días es menor o igual a la que se puede vender (restante primeros días + demanda proximos días)
            if(demandaTotalUltimosDias <= ((cantidadMaxDemandada - demandaTotalPrimerosDias) + cantidadSegundoPedido)){
                ingresos = (venta * demandaTotalPrimerosDias) + (costoUnitario * cantidadMaxDemandada) + (venta * demandaTotalUltimosDias) + (costoPasadosDiezDias * cantidadSegundoPedido) + (devolucion * ((cantidadMaxDemandada - demandaTotalPrimerosDias + cantidadSegundoPedido) - demandaTotalUltimosDias));
            }
            else{
                ingresos = (venta * demandaTotalPrimerosDias) + (costoUnitario * cantidadMaxDemandada) + (venta * (cantidadMaxDemandada - demandaTotalPrimerosDias + cantidadSegundoPedido)) + (costoPasadosDiezDias * cantidadSegundoPedido);
            }
        //Cuando la demanda es mayor a la cantidad disponible en los primeros 10 días
        }else{
            //Si la demanda es menor o igual a lo pedido en el segundo periodo de 20 días
            if(demandaTotalUltimosDias <= cantidadSegundoPedido){
                ingresos = (venta * cantidadMaxDemandada) + (costoUnitario * demandaTotalUltimosDias) + (venta * demandaTotalUltimosDias) + (costoPasadosDiezDias * cantidadSegundoPedido) + (devolucion * (cantidadSegundoPedido - demandaTotalUltimosDias));
            }
            else{
                ingresos = (venta * cantidadMaxDemandada) + (costoUnitario * cantidadMaxDemandada) + (venta * cantidadSegundoPedido) + (costoPasadosDiezDias * cantidadSegundoPedido);
            }
        }

        if(ingresos > ingresosOptimosUltimosDias){
          ingresosOptimosUltimosDias = ingresos;
          ingresosCantidadSegundo = cantidadSegundoPedido;
          cantidadSegundoPedido += 1;
        }else{
          bandera1 = true; //Finaliza la optimización del segundo pedido
        }

      }

      if(ingresosOptimosUltimosDias > ingresosOptimosPrimerosDias){
        ingresosOptimosPrimerosDias = ingresosOptimosUltimosDias;
        ingresosCantidadPrimero = cantidadMaxDemandada;
        cantidadMaxDemandada -= 1;
        bandera1 = false;
      }else{
        bandera2 = true;
      }
    }

    resultados.push({
      cantidadOptimaCompraPeriodo1 : ingresosCantidadPrimero,
      valorCompraPeriodo1: ingresosOptimosPrimerosDias,
      cantidadOptimaCompraPeriodo2: cantidadSegundoPedido
    });

    bandera2 = false; //Continua al siguiente mes
    bandera1 = false;
  }

  //Se imprimen los resultados en pantalla
  document.write("<table border='1'>");
  document.write("<tr>");
  document.write(`<th>Compra periodo 1</th>`);
  document.write(`<th>Utilidad periodo 1</th>`);
  document.write(`<th>Compra periodo 2</th>`);
  document.write("</tr>");

  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  resultados.forEach(resultado => {
    document.write("<tr>");
    document.write(`<td>${resultado.cantidadOptimaCompraPeriodo1}</td>`);
    document.write(`<td>${formatter.format(resultado.valorCompraPeriodo1)}</td>`);
    document.write(`<td>${resultado.cantidadOptimaCompraPeriodo2}</td>`);
    document.write("</tr>");
  });

  document.write("</table>");
  
}

const reload = () => {
  location.reload();
}

window.onload = ppal;
