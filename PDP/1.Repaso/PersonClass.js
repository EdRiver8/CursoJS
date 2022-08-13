class person{
constructor (name,age,job){
    this.name = name;
    this.age = age;
    this.job = job;
}
saludar(){
    return `hola $(this.name)`;
}
}

const person = new person("Pedro", 20, "Teacher");
console.log(person.name); Pedro 
console.log
