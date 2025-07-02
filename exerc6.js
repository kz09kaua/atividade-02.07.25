 var prompt = require('prompt-sync')();

let A = parseInt(prompt("digite o primeiro numero desejado:  "));
    let B = parseInt(prompt("digite o segundo numero desejado:  ")); 

 troca = A;
     A = B;
         B = troca; 
        
console.log('O primeiro numero trocado e:  '+A);
    console.log('O segundo numero trocado e:  '+ B);