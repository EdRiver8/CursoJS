/* 
    La mayoria del tiempo los programas estan en funcion de 
    almacenar datos para asi, manipularlos y mostrarlos al 
    usuario, ejemplo de esto podrian ser:
    * Una tienda en linea que ofrece productos como zapatos,
      la cual tiene un muestrario con precios y el usuario
      decide que comprar y se le asigna un valor.
    * Chat bot, recibe respuestas de los usuarios en forma de msj,
      los cuales segun lo que se escriba tendra una respuesta

    Que es una variable???
    Es un espacio que reserva en la memoria de tal manera que pueda
    almacenar datos.
    En JS, la variables se declaran haciendo uso de una de las 
    siguientes palabras reservadas (son palabras que usa JS y que
    el programador no debe usar para definir variables)
    * let: esta forma mas actual para declarar variables.
    * var: esta es la forma antigua, tiene otros usos.
    
    Existe una forma especial para un dato que no debe variar:
    * const: la definicion para una constante

    Las variables deben ser nombradas de forma coherente al dato que van a representar; tener presente que el nombre para
    una variable "name" puede generar problemas, porque es una palabra con caracteristicas reservadas

    int, string, bool, null, char, float... estos son tipos de datos
    que se usan constantemente para definir variables, en JS
    no es necesario definir el tipo de dato, solo basta con poner
    "let"; esto es porque JS esta compuesta por tipado dinamico,
    que JS entiene el tipo que hay en la variable
*/

//definir una variable que almacene el nombre del usuario
let nombreUsuario; //defino variable pero no inicializo
nombreUsuario = "Edwin"; //en esta linea se inicializa
//definir una variable que almacene la edad del usuario
let edadUsurio;
edadUsurio = 35;
//definir una variable que almacene la estatura del usuario
let estaturaUsuario = 1.9;
//definir una variable que almacene la profesion del usuario
let profesionUsuario = "Docente";//definio e inicializo

//imprimiendo la variable del nombre usuario y concatenando (unir)
//dicha variable con un texto, para ello se usa ","
console.log("Nombre del usuario: ", nombreUsuario);
//para imprimir mas de dos datos, necesitamos usar varios "alert"3
/*
alert("Estatura del Usuario: ");//un alert para el texto
alert(estaturaUsuario);//alert para la variable
*/
//Luis, Camila, Alan, Tomas Arias
console.log("Estatura del usuario: ", estaturaUsuario, " metros");
console.log("La edad del usuario es: ", edadUsurio, " años");
console.log("La profesion del usuario es: ", profesionUsuario);

//cambiemos el dato que guarda la variable nombreUsuario
//actualizando los valores de las variables
nombreUsuario = "Alejo";
console.log("Nombre del usuario: ", nombreUsuario);
edadUsurio = 15;
console.log("La edad del usuario es: ", edadUsurio, " años");

//definir un dato que corresponda al id = cc = di, es unico
const documentoUsuario = 1234567890;//no va a cambiar (mutar)
console.log("El documento del usuario es: ", documentoUsuario);
alert("Hola: " + nombreUsuario);

//intentamos actualizar el valor del documento
//documentoUsuario = 122;//no se puede actualizar por ser constante
