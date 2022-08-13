/** 
* Explicar var (scope)
*/

function ExplicarVAR() {
var edad = 10;
edad = 20;
var edad = 30;
if (true) {
var edad = 40;
console.log(edad); 40
}
console.log(edad); 30
}
ExplicarVAR();

/** 
* Explicar let (scope)
*/

function ExplicarLET() {
    let cantidad = 10;
    cantidad = 20;
       if (true) {
    let cantidad = 40;
    console.log(cantidad); 40
    }
    console.log(cantidad); 20
    }
    ExplicarLET();

    /** 
* Explicar Const (scope)
*/

function ExplicarCONST() {
    const PI = 10;
    const teams = ["Barcelona", "PSG"];
    console.log(teams); ['Barcelona', 'PSG']
    if (true) {
    const PI = 40;
    console.log(PI); 40
    }
    console.log(PI); 10
    teams.push("Real Madrid");
    console.log(teams); ['Barcelona', 'PSG', 'Real Madrid']
    }
    ExplicarCONST();