//en este importamos lo que tenemos en los otros archivos
import Animal from "./Animal.js"; //'Animal' es una exportacion por default, pero se le puede poner cualquier nombre por lo mismo, porque solo se puede un default por archivo
import KEY, { messageTXT, config } from "./Helper.js"; //'KEY' No importa el nombre por venir por default => KEY = API_KEY
//otra manera para hacer la misma linea anterior =>
//import KEY, * as Helper from "./Helper";

const animal = new Animal("Leon");
console.log(animal.print());

console.log(KEY);
console.log(messageTXT);
console.log(config.user);
//seria lo mismo que las dos lineas anteriores pero usando el alias de 'Helper'
//console.log(Helper.messageTXT);
//console.log(Helper.config.user);
