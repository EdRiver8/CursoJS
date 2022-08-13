class Person {
  constructor(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
  }
  saluda() {
    return `Hola ${this.name}`;
  }
}

const person = new Person("Ed", 36, "Desarrollador");
console.log(person.name);
console.log(person.saluda());
