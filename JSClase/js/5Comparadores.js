/*
    Compadores, sirven para realizar pruebas logicas => aquellas que devuelven 
    o retornan (nos dicen) si es algo es verdadero o falso

    En JS se pueden manejar los siguientes comparadores (simbolos):
    * == si una cosa es igual a la otro
    * > mayor que, si una cosa es mayor que la otra
    * < menor que, si una es menor que otra
    * != diferente, si una cosa es diferente que otra
    * === definitivamente igual, una cosa es completa/ igual a otra
    
    casos especiales que son:
    && and (y), comprueba que dos cosas se cumplan (tienen)
    || or (o), comprueba que por lo menos una se cumpla (opcion)
    ! not (no), que niega una cosa: !true = false
*/

/*
alert(2 > 1);// muestre si 2 es mayor que 1 = true
alert(2 == 1);//muestre si 2 es igual a 1 = false
alert(2 != 1);//miestre que dos es diferente de 1 = true
*/
console.log("a" > "A");//esta comparacion la hace con base en ascii
console.log("edwin" > "Edwin");//compara letra a letrra usando ascii
console.log("2" == 2);//js tiene tipado dinamico ayuda
console.log("dos" == 2);//js tiene tipado dinamico no ayuda
console.log("2" === 2);//compare definitivamente "2" contra dos

/*caso especial: ??, se usa para saber si una variable esta definida, sino, darle un valor predeterminado*/

//programa que reciba el tipo de rol que tiene un usuario: empleado, estudiante, invitado
//let user;
//var sign = prompt(); 

