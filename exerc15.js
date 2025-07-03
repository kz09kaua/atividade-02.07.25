var prompt = require('prompt-sync')();

let numero = parseFloat(prompt('Escreva um numero para saber se ele esta entre 100 e 200:  '));

if (numero>=100 && numero<=200){
    console.log('O numero esta entre os numeros 100 e 200');

}else{(numero<100 && numero>200);
    console.log('o numero nao esta entre 100 e 200');


}