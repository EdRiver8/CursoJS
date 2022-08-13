/*Consultar que son los objetos en JS
    son similares a las de un arreglo, pero tienen dos elementos, 'key' => 'value', donde cada clave
    tiene un valor asociado por defecto, este valor puede ser un dato o un conjunto de datos; pueden
    tener n pares de keys values
    estructura =>
        tipo nombre = {
            key : value,
            key : value,
        }
    en un objeto no importa  el orden de la propiedad (key), a diferencia de un array, cuya posicion del 
    elemento es importante para encontrarlo
*/

//construir un objeto que guarde informacion basica de una persona


const edArray = [//su estructura es similar a la de un arreglo, a los elementos no se les puede dar un identificador
    'Edwin',
    'Rivera',
    2021-1986,
    'Bello',
    ['Sergio','David','Cristina']//ultimo elemento es un arreglo
]
console.log('Impresion desde el arreglo \n', edArray);

//con objetos si podemos darle un identificador (key) a cada valor(value)
const edwin = {//su estructura es similar a la de un arreglo, a los elementos no se les puede dar un identificador
    firtsName : 'Edwin',//las claves tambien son llamadas propiedades
    lastName : 'Rivera',
    birthYear : 2021-1986,
    place : 'Bello',
    friends : ['Sergio','Sergio','Cristina']
};//es como si fuera una sola linea de codigo
console.log('Impresion desde el objeto \n', edwin);

//1ra manera de obtener una propiedad del objeto es con 'dot' notation
console.log(edwin.firtsName);//el dot muestra la propiedad del objeto creado
console.log(edwin['firtsName']);//[propiedad] muestra la propiedad del objeto creado, la mayor diferencia
//es que en los [] podemos poner expresiones
const nameKey = 'Name';
console.log(edwin['firts' + nameKey]);
console.log(edwin['last' + nameKey]);
//console.log(edwin.'last' + nameKey);//no funciona con el dot

//sino sabemos que propiedad usar, porque la obtuvimos de una interface
const interesEd = prompt('Que quieres saber de Edwin?, escoge entre firstname, lastname, birthYear, place, friends');
//como lo buscarian, con dot o []???
//console.log(edwin.interesEd);//no sirve porque edwin no tiene una propiedad que se llama interesEd
//console.log(edwin[interesEd]);
//verifica si la propiedad existe =>
edwin[interesEd] ? console.log(edwin[interesEd]) : console.log('La propiedad no existe!');
edwin.place = 'Robledo';//cambiamos el valor del lugar donde se habita
edwin['celphone'] = 3001234567;//creamos una nueva propiedad en el objeto
console.log(edwin);

/*ahora lo que debemos de hacer es imprimir: "Edwin tiene tres amigos, y su mejor amigo es Sergio";
ya hay valores de la frase que existen en el objeto, asi que usarlos para ello*/
//console.log(edwin[friends.length]);//no funciona
console.log('El tamaño de la lista de amigos es: ', edwin['friends'].length);
console.log('El mejor amigo es: ', edwin['friends'][1]);
console.log(`${edwin['firtsName']} tiene ${edwin.friends.length} amigos, su mejor amigo es ${edwin.friends[1]}.`);