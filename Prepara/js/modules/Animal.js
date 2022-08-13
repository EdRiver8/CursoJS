class Animal {
  constructor(name) {
    this.name = name;
  }
  print() {
    return `print Class Animal`;
  }
}

//se exportan lo que se cree que se va a utilizar
export default Animal; //solo puede existir un default
