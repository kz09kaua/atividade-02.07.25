var prompt = require('prompt-sync')();

let aluno = prompt('Escreva o nome do aluno:  ');
    let nota1 = parseFloat(prompt('Escreva a primeira nota:  '));
        let nota2 = parseFloat(prompt('Escreva a segunda nota:  '));  
            let nota3 = parseFloat(prompt('Escreva a terceira nota:  '));

let resultado = (nota1 + nota2 + nota3 ) /3

if (resultado>=7){
        console.log('Ola '+aluno+' voce esta aprovado, com o resultado de  '+resultado);

}else if(resultado<=5){
    console.log('O'+aluno+' esta reprovado, com o resultado de  '+resultado);

}else{( resultado>5.1 && resultado<6.9);
    console.log('O'+aluno+' esta de recuperacao, com o resultado de  '+resultado);
};



