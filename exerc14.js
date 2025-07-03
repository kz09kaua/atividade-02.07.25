var prompt = require('prompt-sync')();

let numero1 = parseInt(prompt('escreva o primeiro numero:  '));
    let numero2 = parseInt(prompt('escreva o segundo nmumero:  '));

if (numero1>numero2){
    console.log('O primeiro numero '+numero1+ ' e maior que o segundo numero '+numero2);

}else{(numero1<numero2);
    console.log('O segundo numero '+numero2+' e maior que o primeior numero '+numero1);

};