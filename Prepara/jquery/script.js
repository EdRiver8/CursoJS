//carga todo el html 'document' y luego carge los scripts
$(document).ready(function () {
  //console.log("Trabajando desde JQuery");
  //seleccionar elemento html: tag, class, id
  $("h1").html("Titulo H1"); //modifica el contenido de la etiqueta
  $(".display-4").html("H1 Alterado por medio de la clase");
  $("#h1").html("H1 Alterado por medio del 'ID'");
  document.getElementById("h1").innerHTML =
    "H1 Afectado desde el 'ID' por JS puro";

  //seleccionar por medio de ruta
  $(".container h1").html("Modificado por ruta");
  $(".container h1:first").html("Solo el primer h1");

  //agregar o quitar clases de estilos
  $("h1:last").addClass("text-danger");
  $("#h1").removeClass("display-4");
  $("#contenido").append(
    "<h1 class='display-4 color-blue' id='h1'>Agregando H1 al final desde JQuery</h1>"
  );
  $("#contenido").prepend(
    "<h1 class='display-4 color-white' id='h1'>Agregando H1 al inicio desde JQuery</h1>"
  );
  //modificando estilos
  $(".color-blue").css("color", "blue");
  $(".color-white").css({ color: "white", background: "black" });

  //remover elementos html
  $(".color-blue").remove();

  //esconderlo
  $(".color-white").hide();

  //add atributos a tags
  $("img").attr(
    "src",
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7349ae7a-95fb-48b3-a00b-b7cbced55724/damyfsb-383a3e31-b011-4e34-92d9-45c8be0942ce.png/v1/fill/w_1024,h_1881,strp/sakuragi_hanamichi____slamdunk_by_naironkr_damyfsb-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTg4MSIsInBhdGgiOiJcL2ZcLzczNDlhZTdhLTk1ZmItNDhiMy1hMDBiLWI3Y2JjZWQ1NTcyNFwvZGFteWZzYi0zODNhM2UzMS1iMDExLTRlMzQtOTJkOS00NWM4YmUwOTQyY2UucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.MkcUNPM7ZfGmaU4ldJcsUV3pJwMlS24sGgoOp3fHCj0"
  );
  $("img").css({ width: "100px", height: "150px" });

  //************** EVENTOS  ******************/
  //guardamos el parrafor por medio de la ruta
  var parrafo = $("#resultado p");
  $(".btn-primary").click(function () {
    parrafo.addClass("display-4");
  });

  $(".btn-danger").click(function () {
    parrafo.removeClass("display-4");
  });

  $(".btn-warning").click(function () {
    parrafo.toggleClass("display-4");
  });

  //leyendo lo escrito en el input 'entrada'
  var entrada = $("#entrada");

  entrada.keyup(function () {
    console.log(entrada.val());
    $("#res-entrada").html(entrada.val());

    //input esta vacia?
    if (entrada.val() === "") {
      $("#res-entrada").html("Estoy esperando...");
    }
  });

  //prevenir eventos del 'submit'
  $("#formulario").submit(function (e) {
    e.preventDefault();
    console.log("click");
    var nombre = $("#nombre").val();
    console.log(nombre);
  });

  //efectos=>
  var resulEfec = $("#res-efecto");
  $("#e1").click(function () {
    resulEfec.hide(1000);
  });

  $("#e2").click(function () {
    resulEfec.show(1000);
  });

  $("#e3").click(function () {
    resulEfec.toggle(2000);
  });
});
