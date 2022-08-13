function fizzBuzz(n) {
  // Write your code here
  let i = 1;
  while (i <= n) {
    if (i % 3 == 0) {
      if (i % 5 == 0) {
        console.log("FizzBuzz");
      } else console.log("Fizz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else console.log(i);
    i++;
  }
  /*
  for (let index = 1; index <= n; index++) {
    if (index % 3 == 0) {
      if (index % 5 == 0) {
        console.log("FizzBuzz");
      }
      console.log("Fizz");
    } else if (index % 5 == 0) {
      console.log("Buzz");
    } else console.log(index);
  }*/
}

function calcularMaximoRetorno(instruccion) {
  // Write your code here
  let i = 0;
  let x = 0;
  let y = 0;
  let pit = 0;
  let mayDist = 0;
  let xMay = 0;
  let yMay = 0;
  while (i < instruccion.length) {
    switch (instruccion[i]) {
      case "U":
        x++;
        break;
      case "D":
        x--;
        break;
      case "R":
        y++;
        break;
      case "L":
        x--;
        break;
      default:
        break;
    }
    i++;
    pit = x ^ (2 + y) ^ 2 ^ (1 / 2);
    if (mayDist < pit) {
      mayDist = pit;
      xMay = Math.abs(x);
      yMay = Math.abs(y);
    }
  }
  return xMay + yMay;
}

function main() {
  //const n = parseInt(readLine().trim(), 10);

  fizzBuzz(15);
}
