//usando funciones dentro de funciones =>
const yearUntilRetirement = (birthYear, name) => {
    const age = 2021- birthYear;
    const retirement = 62 - age;
    //const emo = emoticon1(retirement);
    //const emo = emoticon2(retirement);
    //const emo = emoticon3(retirement);
    //const emo = emoticon4(retirement);
    const emo = emoticon4(retirement);
    return `${name}, faltan ${retirement} años para la pension ${emo}.`;
    //return `${name}, faltan ${retirement} años para la pension ${emoticon3(retirement)}.`;
}

//las siguientes cuatro funciones hacen lo mismo, todas se pueden llamar desde otra funcion

//funcion por declaracion
function emoticon1(retirement){
    let emoti;
    if(retirement < 10){
        emoti = '😁';
        return emoti;
    }else return '😥';
} 

//funcion expression - anonima
const emoticon2 = function(retirement){
    let emoti;
    if(retirement < 10){
        emoti = '😁';
        return emoti;
    }else return '😥';
} 

//funcion flecha
const emoticon3 = retirement => {
    let emoti;
    if(retirement < 10){
        emoti = '😁';
        return emoti;
    }else return '😥';
} 

//funcion flecha corta
const emoticon4 = retirement => retirement < 10 ? '😁' : '😥';

console.log(emoticon1(7));
console.log(emoticon2(15));
console.log(emoticon3(2));
console.log(emoticon4(20));
console.log(yearUntilRetirement(1986, 'Edwin'));