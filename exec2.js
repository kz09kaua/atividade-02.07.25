var prompt = require('prompt-sync')();

let numero1 = parseFloat(prompt('Digite o primeiro numero desejado: '));
    let numero2 = parseFloat(prompt('Digite o segundo numero desejado: '));

console.log('A soma dos numeros e', (numero1+numero2) );
    console.log(' A subtracao dos numeros e', (numero1-numero2) );
        console.log('A multiplicacao dos numeros e', (numero1*numero2) );
            console.log(' A divicao dos numeros e', (numero1/numero2).toFixed(2) );
