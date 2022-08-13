function principal(){
	var enviar = document.getElementById("enviar");
	enviar.addEventListener("click",guardar,false);	
	mostrarInfo();
}

function guardar(){
	var usuario = document.getElementById("usuario").value;
	var valor = document.getElementById("valor").value;
	localStorage.setItem(usuario,valor);
	mostrarInfo();

	document.getElementById("usuario").value = "";
	document.getElementById("valor").value = "";
}

function mostrarInfo(){
	var datos = document.getElementById("datos");	
	datos.innerHTML = "";
	if(localStorage.length > 0){
		datos.innerHTML = '<button type="button" id="borrar" onclick="eliminar()">Borrar Datos</button>'	
	}
	for (var i = 0; i < localStorage.length; i++) {
		var clave = localStorage.key(i);
		var valor = localStorage.getItem(clave)
		datos.innerHTML += '<div>Key = '+ clave + ' Value = '+ valor + ' <br><button type="button" onclick="eliminarItem(\'' + clave + '\')">Eliminar Item</button> </div>';
	}	
}
function eliminar(){
	if(confirm("¿Estas seguro de eliminar?")){
		localStorage.clear();
		mostrarInfo();
	}	
}
function eliminarItem(clave){
	if(confirm("¿Estas seguro de eliminar?")){
		localStorage.removeItem(clave);
		mostrarInfo();
	}	
}
window.onload = principal;