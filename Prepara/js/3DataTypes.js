/*
    Datos primitivos:
    * number - floating point, siempre con decimales
    * string - letras, texto, letras y simbolos
    * boolean - logicos - true o false
    * undefined - no se le ha asigando el valor, declarada  pero no definida
    * null - vacia
    * symbol - no es util ahora
    * big int - son bastante grandes, casos especiales
    
    JS, tiene algo que se llama "tipo dinamico", no es necesario, definir el tipo de dato, js lo identifica de forma automatica segun el valor que le asigne

    El operador de asignacion de valor en JS es "="
*/

//declaramos una variable para guardar el nombre de la persona
let personaName = "Isa";
console.log("Name: ", personaName, ", Data Type: ", typeof personaName);//funcion typeof - tipo de dato

personaName = 15; //Se le cambia el valor y el tipo de dato a la variable
console.log("Name: ", personaName, ", Data Type: ", typeof personaName);

personaName = true;
console.log("Name: ", personaName, ", Data Type: ", typeof personaName);

personaName = "";
console.log("Name: ", personaName, ", Data Type: ", typeof personaName);

personaName = null;//null es un tipo de dato objeto - object
console.log("Name: ", personaName, ", Data Type: ", typeof personaName);

personaName = 1.75;
console.log("Name: ", personaName, ", Data Type: ", typeof personaName);