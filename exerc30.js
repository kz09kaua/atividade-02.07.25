var prompt = require('prompt-sync')();

let nome = prompt('Escreva o seu nome: ');
    let sexo = prompt('Escreva qual o seu sexo: ');
        let idade = parseInt(prompt('Digite am sua idade: '));
            let salario = parseFloat(prompt('Digite o seu salario fixo: '));

if (sexo==='masculino' && idade>=30){
    let salarioFixo = salario+100;
        console.log('Ola '+nome+' o seu salario de '+salario+' teve um encremento de R$ 100 reias, totalizando R$ '+salarioFixo+' reais');

}else if (sexo==='masculino' && idade<30){
    let salarioFixo = salario+50;
        console.log('Ola '+nome+' o seu salario de '+salario+' teve um encremento de R$ 50 reias, totalizando R$ '+salarioFixo+' reais');


}else if (sexo==='feminino' && idade>=30){
    let salarioFixo = salario+200;
        console.log('Ola '+nome+' o seu salario de '+salario+' teve um encremento de R$ 200 reias, totalizando R$ '+salarioFixo+' reais');
        
}else{ (sexo==='feminino' && idade<30)
    let salarioFixo = salario+80;
        console.log('Ola '+nome+' o seu salario de '+salario+' teve um encremento de R$ 80 reias, totalizando R$ '+salarioFixo+' reais');
}