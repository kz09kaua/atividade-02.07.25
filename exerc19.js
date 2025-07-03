var prompt = require('prompt-sync')();
let contador = 0;
    let nome = prompt('Escreva o nome da pessoa que deseja saber o sexo: ');

 for (let i=1; i<=56; i++){   
    let sexo = prompt('Escreva o sexo da '+i+'pessoa: ');

if(sexo==='masculino'){
    console.log('O sexo da pessoa '+nome+' pessoa numero '+i+' e masculino');

}else{(sexo==='feminino');
    console.log('O sexo da pessoa '+nome+' pessoa numero '+i+' e feminino');
}
} console.log('O total de pessoas e '+i);
