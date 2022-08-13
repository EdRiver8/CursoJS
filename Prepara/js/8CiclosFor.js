/*
    loops: son aspectos fundamentales en cualquier lenguaje de programacion porque permiten disminuir
    la cantidad de tareas cuando las lineas de codigo se comienzan a repetir, es como si se automatizaran
    tareas que se repiten una y otra vez, como bañarse todos los dias, desayunar a diario, hacer n repeticiones
    de un mismo ejercicio en el gym, recibir el nombre de diez personas para almacenarlo en el programa; esta
    ultima accion probablemente necesite un loop para optimizar el programa.
    1ro:
        (buscar que es un iterador)
        iterador = la variable que controla la cantidad de ciclos que se repiten 
        condicion = se evalua antes de cada ciclo se ejecute
        incremento = a pasos de cuanto cambia el iterador
        for(iterador - contador; condicion que evalua el loop; incremento-decremento del iterador){
            instrucciones del ciclo for
        }
        el ciclo for, son tres lineas de codigo
            * el iterador se inicializa (ejecuta) solo una vez
            * el ciclo finaliza cuando la condicion ya no se cumple (tope)
            * el incremento o decremento ocurre en cada ciclo hasta que no se cumpla la condicion
    
        Nota: tener cuidado por que se puede quedar en un ciclo infinito y consumir el cp, cerrar pestaña de pasar esto, verificar errores en el codigo e iniciar de nuevo el openliveserver

        existen dos palabras reservadas, muy utiles en los loops:
        * continue: continua con el sgte ciclo del loop (no ejecuta las lineas del ciclo que se encuentran
         debajo del uso de esta palabra ).
        * break: rompe el ciclo, ya no continuan las siguientes iteraciones, y no se ejecuta las lineas que 
         hay debajo de esta palabra dentro del ciclo.
*/

//programa que cuente hasta 10 =>
/*
for(let cuenta = 0; cuenta < 11; cuenta = cuenta + 1){
    console.log('La cuenta va en: ', cuenta);
}

//programa que cuente desde 1 hasta 10 =>
for(let cuenta = 1; cuenta < 11; cuenta = cuenta + 1){//cuenta++
    console.log('La cuenta va en: ', cuenta);
}
*/

//programa que cuente desde 10 hasta 0 => 
for(let cuenta = 10; cuenta >= 0; cuenta = cuenta - 1){//cuerta--
    console.log('La cuenta va en: ', cuenta);
}

//los ciclos son muy utiles para recorrer arreglos, que se veran en el proximos temas

//programa que cuente hasta 10 y cuando encuentre el numero 6, se lo salte
for(let i = 0; i <= 10; i++){//cuerta--
    if(i == 6){
        console.log('.........Saltando el 6.........');
        continue;
    }else{
        console.log('La cuenta va en: ', i);
    }   
}

//realizar un programa que muestre la tabla de multiplicar seleccionada
console.log('\n---------Tabla de Multiplicar Seleccionada----------');
let multiplicador = 3;
let multiplicando = 1;
for(multiplicando; multiplicando <= 10; multiplicando++){
    console.log(`${multiplicador} * ${multiplicando} = ${multiplicador * multiplicando}`);
}

//realizar un programa que muestre las tablas de multiplicar del 5-10
console.log('\n---------Tablas de Multiplicar----------');
//multiplicando = 1;//si se deja por fuera, cuando entre al 2do ciclo la variable ya esta en 11 y no hace nada
for(multiplicador = 5; multiplicador <= 10; multiplicador++){
    console.log("Tabla del: ", multiplicador);
    for(multiplicando = 0; multiplicando <= 10; multiplicando++){
        console.log(`\t${multiplicador} * ${multiplicando} = ${multiplicador * multiplicando}`);
    }
    
}




//programa que liste numeros y cuando encuentre un numero dado rompa el ciclo

/*
    para este programa ya no sirve el ciclo for, puesto que este usa un tope, es decir, conoce cuando finaliza
    el ciclo, como no sabemos cuando finaliza, se debe usar el ciclo while, esa es la gran diferencia entre 
    ambos, uno sabe cuando termina, el otro no
*/