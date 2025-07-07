var prompt = require('prompt-sync')();

let numero = parseInt(prompt('Digite um numero para o chute '));

if (numero>80){
    console.log('O numero e menor que 80 ');

}else if (numero<25){
    console.log('O numero e maior que 25 ');

}else if (numero!==40){
    console.log('O numero esta errado, tente novamente');

}else{(numero===40)
    console.log('Parabem voce acertou o numero ');
};