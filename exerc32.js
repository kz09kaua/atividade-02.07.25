var prompt = require('prompt-sync')();

let primeiro = parseFloat(prompt('Escreva o primeiro numero: '));
    let segundo = parseFloat(prompt('Escreva o segundo numero: '));
        let opecacao = prompt('Escreva a operacao desejada: (+) (-) (*) (/) ');

switch (opecacao) {

case '+':
    resultado = primeiro + segundo;
        console.log('Resultado da adição e de:'+resultado);
break;
    
case '+':
    resultado = primeiro - segundo;
        console.log('Resultado da subtracao e de:'+resultado);
break;
    
case '*':
    resultado = primeiro * segundo;
        console.log('Resultado da multiplicao e de:'+resultado);
break;
    
case '/':
    if (segundo === 0) {
        console.log("Erro: Divisão por zero.");

} else {
    resultado = primeiro / segundo;
        console.log('Resultado da divisão e de:'+resultado);
}
break;

default:
      console.log("Operador não definido.");
  };

