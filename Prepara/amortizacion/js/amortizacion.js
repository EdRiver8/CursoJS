function principal() {
  //lectura de los elementos estaticos del html
  let tBodyRes = document.getElementById("tBodyRes");
  let btnCalcular = document.querySelector("#btnCalcular");
  let btnLimpiar = document.getElementById("btnLimpiar");

  btnCalcular.addEventListener("submit", (e) => {
    e.preventDefault();
    //lectura de los valores al dar click
    let valActivo = document.getElementById("valActivo").value;
    let vidaUtil = document.getElementById("vidaUtil").value;
    /**Si la cuota no es exacta puede generar un residuo en el ultimo periodo,
     *que se debe controlar para que de exactamente cero*/
    let cuotaDeprecia = valActivo / vidaUtil;
    let depreAcum = 0;
    let valLibros = valActivo;
    for (let i = 0; i <= vidaUtil; i++) {
      console.log(i);
      //verificar que sea el periodo inicial para ajustar valores en '0'
      if (i == 0) {
        tBodyRes.innerHTML = `<tr>
            <th>${i}</th>
            <td>${i}</td>
            <td>${i}</td>
            <td>${currency2(valLibros)}</td>
        </tr>`;
      } else {
        //procedimiento para los periodos que no son el 0, calculo de los valores de los periodos
        depreAcum += cuotaDeprecia;
        valLibros -= cuotaDeprecia;
        //ultimo periodo y queda un sobrante + o - en libros, haga
        if (i == vidaUtil && valLibros != 0) {
          //si sobrante es negativo, fue porque deprecio mas y resta a los valores del ultimo periodo
          if (valLibros < 0) {
            cuotaDeprecia -= valLibros;
            depreAcum -= valLibros;
            valLibros += valLibros; //se suma el ajuste por que se deprecion
          } else {
            //si es positivo se deprecio menos y se suma a los valores del ultimo periodo
            cuotaDeprecia += valLibros;
            depreAcum += valLibros;
            valLibros -= valLibros; //se resta el ajuste por que se deprecio mas
          }
          //con el ajuste, se afecta el ultimo registro (fila)
          tBodyRes.innerHTML += `<tr>
              <th>${i}</th>
              <td>${currency2(cuotaDeprecia)}</td>
              <td>${currency2(depreAcum)}</td>
              <td>${currency2(valLibros)}</td>
            </tr>`;
        } else {
          //sino es el ultimo periodo o el valor en libros al final de la depreciacion es 0, haga
          tBodyRes.innerHTML += `<tr>
                <th>${i}</th>
                <td>${currency2(cuotaDeprecia)}</td>
                <td>${currency2(depreAcum)}</td>
                <td>${currency2(valLibros)}</td>
            </tr>`;
        }
      }
    }
  });

  /**Limpiar todos los campos del formulario de depreciacion */
  btnLimpiar.addEventListener("click", () => {
    tBodyRes.innerHTML = "";
    document.getElementById("valActivo").value = "";
    document.getElementById("vidaUtil").value = "";
  });

  /**
   * Funcion para darle formato de moneda a un numero, especificando los decimales, usando
   * $0,0.00 para ello, se debe incrustar el script
   * <script src="//cdnjs.cloudflare.com/ajax/libs/numeral.js/2.0.6/numeral.min.js"></script>
   * @param {*} number Numero al cual darle formato
   * @returns
   */
  const currency = function (number) {
    var myNumeral = numeral(number);
    var currencyString = myNumeral.format("$0,0");
    return currencyString;
  };

  /**
   * El objeto de ámbito global Intl es el espacio de nombres para el API de
   * Internacionalización de ECMAScript, éste provee comparación de cadenas y formato de números,
   * fechas y tiempos con sensibilidad al lenguaje. Los constructores para los objetos Collator,
   * NumberFormat, y DateTimeFormat son propiedades del objeto Intl. En ésta página se documentan
   * tales propiedades, así como la funcionalidad común a los constructores de internacionalización
   * y otras funciones sensibles al lenguaje.
   * @param {*} number Numero al cual darle formato
   * @returns
   */
  const currency2 = function (number) {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      maximumSignificantDigits: 3, //propiedad que puede redondear a miles como lo pide la dian
    }).format(number);
    //return new Intl.NumberFormat("es-CO").format(number);
  };

  const activo = document.querySelector("#valActivo");

  console.log(activo);

  function formatNumber(n) {
    n = String(n).replace(/\D/g, "");
    return n === "" ? n : Number(n).toLocaleString();
  }
  activo.addEventListener("keyup", (e) => {
    const element = e.target;
    const value = element.value;
    element.value = formatNumber(value);
  });
}

window.onload = principal;
