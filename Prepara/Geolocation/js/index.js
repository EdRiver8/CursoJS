function principal(){	
	var obtenerUbicacion = document.getElementById("obtenerUbicacion");	
	obtenerUbicacion.addEventListener("click",obtener,false);
}

function obtener(){
	//getCurrentPosition(ubicacion,errores,configuracion);
	var configuracion = {enabledHighAccuracy:true,timeout:1000,maximumAge:6000}
	navigator.geolocation.getCurrentPosition(mostrarPosicion,errores,configuracion);
}

function mostrarPosicion(posicion){
	var lat = posicion.coords.latitude;
	var lng = posicion.coords.longitude;
	var exactitud = posicion.coords.accuracy;
	var contenido = document.getElementById("contenido");
	//contenido.innerHTML += "Latitude = " + lat + " longitude = " + lng + " Exactitud = " + exactitud +"m";

	localStorage.setItem(lat,lng);

	//mostrar mi ubicacion en el mapa y poner un marcador
	var mymap = L.map('mapid').setView([lat, lng], 13);
		L.marker([lat, lng]).addTo(mymap);
		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	    maxZoom: 18,
	    id: 'mapbox/streets-v11',
	    tileSize: 512,
	    zoomOffset: -1
	}).addTo(mymap);

	//Fin mostrar mi ubicacion en el mapa y poner un marcador
}

function errores(error){
	if(error.code == 1){
		alert("Debes aceptar el uso de la aplicacion");
	}

	if(error.code == 3){
		alert("Intenta obtener tu ubicación de nuevo");
	}


}
window.onload = principal;