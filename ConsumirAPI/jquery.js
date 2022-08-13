$(function () {
  getStockInformation();
});

function getStockInformation(range) {
  $.ajax({
    url: "https://randomuser.me/api/",
    dataType: "json",
    success: function (data) {
      console.log(data);
    },
  });
}

function render(datos) {
  for (let index = 0; index < datos.length; index++) {
    console.log(datos[index]);
  }
}
