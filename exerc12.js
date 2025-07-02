var prompt = require('prompt-sync')();

let valor = parseFloat(prompt('Coloque o valor do custo de fábrica do carro:  '));
    let impostos = valor*28;
        let total= impostos*45;

console.log('O valor do produto com os impostos e de:  '+ total);

