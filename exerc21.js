var prompt = require('prompt-sync')();

let contador = 0;

for (let i=1; i<=5; i++){
    let nome = prompt('Escreva a o seu nome: ');
        let idade = parseInt(prompt('Escreva a sua idade: '));
            let sexo = prompt('Escreva o seu sexo: ');
                let saude = parseInt(prompt('Coloque a sua condicao de saude: "1" perfeita, "2" bem, "3" ruim. '));

if (idade>=18){
    console.log('lamento '+nome+' voce nao esta apto a servir o exercito');

}else if(sexo!=='masculino'){
    console.log('lamento '+nome+' voce nao esta apto a servir o exercito');

}else if(saude!==1){
    console.log('lamento '+nome+' voce nao esta apto a servir o exercito');

}else{;
    console.log('Parabem '+nome+' voce esta apto a estar no exercito');

}};