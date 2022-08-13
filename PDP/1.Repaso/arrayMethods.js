let cities = ["Med", "Bog", "Cali"];

//forma basica de recorrer un arreglo
for (let i = 0; i < cities.length; i++) {
  console.log(cities[i]);
}

cities.forEach((city) => {
  console.log(city);
});

console.log(cities);

cities.push("Pasto");
console.log(cities);
const primera = cities.shift(); //eliminar el 1er item
console.log(primera);
console.log(cities);
const ultima = cities.pop(); //eliminar el 1er item
console.log(ultima);
console.log(cities);

/** inmutables */
const nombres = ["Hugo", "Paco", "Luis"];
//usando Map, permite extraer informacion
let result = nombres.map((nombre) => `${nombre}_`);
console.log(result); //array result modificado
console.log(nombres); //map no altera el array original

const products = [
  {
    name: "Malta",
    costo: 10,
  },
  {
    name: "Sprite",
    costo: 7,
  },
  {
    name: "Agua",
    costo: 5,
  },
];

//extraer los nombres del arreglo de objetos
let nameProducts = products.map((product) => product.name);
console.log(nameProducts);

//add impuesto del 19 a cada producto%
let taxProducts = products.map((product) => {
  return { ...product, tax: 0.19 }; //'...' pasa todo el objeto completo
});
console.log(taxProducts);

//titulos nacionales e internacionales de las u
const universidades = [
  { nombre: "Poli", ciudad: "Med", nacionales: 10, internacionales: 1 },
  { nombre: "Unal", ciudad: "Bog", nacionales: 45, internacionales: 8 },
  { nombre: "UdeA", ciudad: "Med", nacionales: 55, internacionales: 12 },
  { nombre: "EAFIT", ciudad: "Med", nacionales: 50, internacionales: 10 },
  { nombre: "Andes", ciudad: "Bog", nacionales: 48, internacionales: 9 },
  { nombre: "Sena", ciudad: "Cali", nacionales: 5, internacionales: 0 },
  { nombre: "Unal", ciudad: "Cali", nacionales: 4, internacionales: 0 },
];

//obtener solo los nombres de las u
const nombresU = universidades.map((universidad) => universidad.nombre);
console.log(nombresU);

//find, devuelve la 1ra coincidencia
const uniCali = universidades.find((u) => u.ciudad === "Cali"); //devuelve todo el 1er objeto donde la ciudad = cali
console.log(uniCali);

//every, validar que todos cumplen una condicion
const premiosInternal = universidades.every((u) => u.internacionales > 0); //retorna true si todas tienen titulos internacionales o false en caso contrario
premiosInternal == true
  ? console.log("Todas las U tienen titulo internacional")
  : console.log("No todas las U tienen titulo internacional");
console.log(premiosInternal);

//some, valida que alguno cumpla la condicion
const isSomeInternal = universidades.some((u) => u.internacionales > 0);
console.log(isSomeInternal);

//filter, permite realizar filtros; solo los nombres de las u de bogota
const uDeBog = universidades.filter((u) => u.ciudad === "Bog");
console.log(uDeBog); //todos los arreglos con las u de bog
const uDeBog2 = universidades
  .filter((u) => u.ciudad === "Bog")
  .map((u) => u.nombre);
console.log(uDeBog2); //solo los nombres de las u de bog

//reduce, trae otras funcionalidades como acumulador, contador...
//contar la cantidad de titulos internacionales de las u
const totalTitulosInternal = universidades.reduce(
  (acum, u) => acum + u.internacionales,
  0
); //recibe dos parametros, el 1ro es el contador o acumulador y el 2do es el objeto a iterar (0 es el valor en el que inicia el acum)
console.log(totalTitulosInternal); //muestra cantidad de titulos internacionales

//contar la cantidad de titulos internacionales de las u con mas de 10 titulos
const totalTitulosInternal2 = universidades
  .filter((u) => u.internacionales > 10)
  .reduce((acum, u) => acum + u.internacionales, 0); //recibe dos parametros, el 1ro es el contador o acumulador y el 2do es el objeto a iterar (0 es el valor en el que inicia el acum)
console.log(totalTitulosInternal2); //muestra cantidad de titulos internacionales de las u con mas de 10

//contar la cantidad de titulos internacionales de las u de medellin
const totalTitulosInternal3 = universidades
  .filter((u) => u.ciudad === "Med")
  .reduce((acum, u) => acum + u.internacionales, 0); //recibe dos parametros, el 1ro es el contador o acumulador y el 2do es el objeto a iterar (0 es el valor en el que inicia el acum)
console.log(totalTitulosInternal3); //muestra cantidad de titulos internacionales de las u con mas de 10

//mostrar todos los titulos nacionales y todos los internacionales
const titulosNalInter = universidades.reduce((acum, u) => {
  return {
    nacionales: acum.nacionales + u.nacionales,
    internacionales: acum.internacionales + u.internacionales,
  };
});
console.log(titulosNalInter); //muestra la cantidad de titulos nacionales e internacionales
