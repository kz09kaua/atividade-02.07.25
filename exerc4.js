var prompt = require('prompt-sync')();

let nome = prompt('Digite seu nome: ');
 let salario = parseFloat(prompt('Digite o salario fixo  '));
        let vendas = parseInt(prompt("digite total de vendas no mes: "));
            let salatotal = (salario+(vendas*0.15));

console.log('Ola ' +nome+ ' Seu salario fixo e de R$' +salario+ ' Seu total de venda no mes e ' +vendas+ ' Seu salario com incremento de vendas e de '+ salatotal );