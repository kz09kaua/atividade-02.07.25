var prompt = require('prompt-sync')();
    
let cotacao = parseFloat(prompt('digite valor da cotacao: '))
    let dolar = parseFloat(prompt('digite valor do dolar: '))
        let conversao = (cotacao*dolar)
            
 console.log('o valor convertido fica: '+conversao);