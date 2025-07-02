var prompt = require('prompt-sync')();

let nomedoAluno = prompt('Digite seu nome: ');
    let notaProva1 = parseFloat(prompt('Digite sua nota1 : '));
         let notaProva2 = parseFloat(prompt('Digite sua nota2 : '));
              let notaProva3 = parseFloat(prompt('Digite sua nota3 : '));
                    let notaTotal = (notaProva1+ notaProva2+ notaProva3) /3 .toFixed(3)

console.log('Ola '+ nomedoAluno+ ' Sua notal total e: '+ notaTotal);
       