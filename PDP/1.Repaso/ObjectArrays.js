/** 
 * Object (conjunto propiedades (clave: valor))
 */
 
const person = {
    nombre: "Jose",
    estado: true,
    };
console.log(persona);  { nombre: 'Jose', estado: true }
person.edad = 50;
console.log(person); { nombre: 'Jose', estado: true, edad:50 }
console.log(person.nombre); Jose

/** 
 * Array conjunto de elementos  (posicionales) >>  []
 */

const teams = ["Nacional", "Medellin", "Envigado"];
teams.push("Rionegro");
console.log (teams); [ 'Nacional', 'Medellin', 'Envigado', 'Rionegro']
console.log(teams[0]); Nacional 