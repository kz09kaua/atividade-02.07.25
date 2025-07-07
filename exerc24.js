var prompt = require('prompt-sync')();

let numeros = parseInt(prompt('Digite a guantidade de numeros que queira saber se e positivo ou negativo e igual a zero '));

for (i=1; i<=numeros; i++){
    let letra = parseFloat(prompt('digite o '+i+' numero '));

if (letra>0){
    console.log('O '+i+' numero e positivo ');

}else if (letra<0){
    console.log('O '+i+' numero e negativo ');

}else{ (letra===0)
    console.log('O numero e zero ');

};
};
