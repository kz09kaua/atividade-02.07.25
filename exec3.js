var prompt = require('prompt-sync')();

let dpercorrida = parseFloat(prompt('Digite a distancia percorrida: '));
    let cpercorrida = parseFloat(prompt('Digite o consumo em km: '));

console.log('o consumo medio da distancia a ser percorrida e:',(dpercorrida/cpercorrida).toFixed(3) );