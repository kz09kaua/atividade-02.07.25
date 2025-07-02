var prompt = require('prompt-sync')();

let valor = parseFloat(prompt('digite o valor que ira depositar: '));
    let total = valor*0.07.toFixed(2);
        let vezes = valor+total;
console.log('O valor que tera no final de cada mes e: '+ vezes);