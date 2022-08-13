/*
Los objetos tambien pueden tener funciones dentro de estos, a estas funciones se les llaman
metodos; recodar que una funcion es solamente un tipo de valor (lo que retorna)
*/
const edwin = {
    firtsName : 'Edwin',
    lastName : 'Rivera',
    birthYear : 1986,
    place : 'Bello',
    friends : ['Sergio','Sergio','Cristina'],
    hasDriversLicense: true,

    calcAge: function(birthYear){//la sintaxis es casi la misma de las funciones normales
        return 2021 - birthYear;
    }
};

console.log(`La edad de ${edwin['firtsName']} es, ${edwin.calcAge(1986)} años`);
console.log(`La edad de ${edwin['firtsName']} es, ${edwin['calcAge'](1986)} años`);//el año ya esta en el objeto=>
console.log(`La edad de ${edwin['firtsName']} es, ${edwin['calcAge'](edwin['birthYear'])} años`);

/*la mejor manera para calcular la edad con un metodo dentro del objeto es usar la palabra reservada 'this'
la cual permite referenciarse a si mismo el objeto
*/

const johan = {
    firtsName : 'Johan',
    lastName : 'Rivera',
    birthYear : 1990,
    place : 'Bello',
    friends : ['Sergio','Sergio','Cristina'],
    hasDriversLicense: true,

    calcAge: function(){//this permite referencia al objeto que llama al metodo (johan llama a calcAge)
        //console.log(this);//muestra todo el objeto
        return 2021 - this.birthYear;//no se usa el nombre del objeto 'johan', porque si cambia el nombre, se debe cambiar todo el codigo
    }
};
//no se pasa argumentos porque la age la lee del objeto
console.log(`La edad de ${johan['firtsName']} es, ${johan['calcAge']()} años`);
console.log(`La edad de ${johan['firtsName']} es, ${johan.calcAge()} años`);

//ahora querremos que la edad calculada se pueda guardar en una propiedad para no tenerla que estar calculando =>
const richie = {
    firtsName : 'Ricardo',
    lastName : 'Romero',
    birthYear : 2005,
    place : 'Roblado',
    friends : ['Sergio','Claudia','Cristina'],
    hasDriversLicense: true,

    calcAge : function(){
        //this[age] = 2021 - this.birthYear;//creamos nueva propiedad 'age' en el objeto y le asignamos un valor
        this.age = 2021 - this.birthYear;//creamos una nueva propiedad 'age' en el objeto y le asignamos un valor
        return this.age; 
    },

    getInfo : function(){
        return `${this.firtsName} ${this.lastName} nacio el ${this.birthYear}, sus amigos son: ${this.friends[0]}, ${this.friends[1]}, ${this.friends[2]}, vive en ${this.place}, este año cumple ${this.calcAge()} años; por cierto... ${this.hasDriversLicense ? 'tiene' : 'no tiene'} licencia de conducir 😆`;
    }
};

console.log(richie.calcAge());//se debe primero llamar el metodo sino, no crea la variable 'age
console.log(richie.age);
console.log(`La edad de ${richie['firtsName']} es, ${richie.age} años`);

//crear un metodo que imprima toda la informacion de richie y que se llame getInfo
console.log(richie.getInfo());