var prompt = require('prompt-sync')();
    let valorProd = (prompt('digite o valor do produto: '));
        let Percentual = (prompt('digite o valor do percentual: '));
            let valorvenda = (valorProd*Percentual);
        console.log('o valor de venda é: '+ valorvenda);