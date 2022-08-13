/*
    Un IF es una estructura de control llamada condicional; esta compuesta por una prueba logica, la cual evalua si algo es verdadero o si algo es falso; tambien en algunos casos se presentan las estructuras if-else, estan evaluan la parte falsa de expresion logica; y existen escenarios donde es necesario anidar sentencias dentro de los if
    1ra forma:
    if(prueba logica){
        verdadera: lineas de codigo si la prueba logica es verdad
    }
    2da forma:
    if(prueba logica){
        verdadera: lineas de codigo si la prueba logica es verdadera
    }else{
        falsa: lineas de codigo si la prueba es falsa
    }
    3ra forma:
    if(prueba logica){
        verdadera: lineas de codigo si la prueba logica es verdadera
    }else if(prueba logica){
        falsa: lineas de codigo si la prueba es falsa
    }
    4ta forma anidada:
    if(prueba logica){
        if(prueba logica){
           1ra verdadera y 2da verdadera: lineas de codigo si la prueba 
        }
    }
*/
//programa que diga cual de dos numeros es mayor
let numero1 = 35;
let numero2 = 35;
if(numero1 > numero2){//preguntamos si num1 > num2
    console.log("El numero ", numero1, " es mayor");
}else if(numero2 > numero1){//preguntamos si num2 > num1
    console.log("El numero ", numero2, " es mayor");
}else{
    console.log("Los dos numeros son iguales: ", numero1);
}

//programa que reciba el tipo de rol que tiene un usuario y lo salude: empleado, estudiante, invitado
/*
let user;//definimos la variable usuario
user = prompt("Ingresa el tipo de usuario: "); //recibimos dato
*/
//alert(user + " Bienvenido");//"+" concatenador en el alertdo

//1ra posible solucion
/*
if(user == "empleado"){
    alert(user + " Bienvenido");
}else if(user == "estudiante"){
    alert(user + " Bienvenido");
}else{
    alert("Ud es un invitado, bienvenido");
}*/

//2da manera: usamos el operador "o" => ||, el cual evalua si por lo menos una de las dos pruebas logicas se cumple
/*
if(user == "empleado" || user == "estudiante"){
    alert("Bienvenido " + user);
}else{
    alert("Ud es un invitado, bienvenido");
}
*/
//3ra manera: haciendo uso del ||
/*
if(user == "empleado" || user == "estudiante" || user == "invitado"){
    alert("Bienvenido " + user);
}*/





