const arr = [
  { name: "luna", sex: "f", age: 7, species: "dog" },
  { name: "jimmy", sex: "m", age: 60, species: "human" },
  { name: "snoop", sex: "m", age: 60, species: "human" },
  { name: "jennifer", sex: "f", age: 60, species: "human" },
  { name: "yeller", sex: "f", age: 20, species: "dog" },
];

/**
 *  1 name de todos los dog
 *  2 name del sex = f
 *  3 total de edades
 *  4 promedio edades de los humanos
 *  5 nombre humanos mayores de 50
 */

//1 name de todos los dog
const names = arr.filter((a) => a.species === "dog").map((a) => a.name);
console.log(names);

//2 name del sex = f
const names2 = arr.filter((a) => a.sex === "f").map((a) => a.name);
console.log(names2);

//3 total de edades
const totalEdades = arr.reduce((acum, a) => acum + a.age, 0);
console.log(totalEdades);

//4 promedio edades de los humanos
const promEdadHuman = arr
  .filter((u) => u.species === "human")
  .reduce((acum, h) => acum + h.age, 0);
console.log(promEdadHuman / arr.filter((u) => u.species === "human").length);

//5 nombre humanos mayores de 50
const mayorNombre = arr
  .filter((u) => u.age > 50)
  .filter((u) => u.species === "human")
  .map((u) => u.name);
console.log(mayorNombre);

const mayorNombre2 = arr
  .filter((u) => u.age > 50 && u.species === "human")
  .map((u) => u.name);
console.log(mayorNombre2);
