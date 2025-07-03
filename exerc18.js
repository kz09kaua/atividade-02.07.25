var prompt = require('prompt-sync')();

let repeti = 0;

for (let i=1; i<=75; i++){
    let idade = prompt('Escreva a idade da '+i+' pessoa');
        let numero = Number(idade);

if (idade>=18){
    console.log('A idade da pessoa '+i+' esta maior que 18 anos ');

}else{(idade<=18);
    console.log('Essa pessoa '+i+' e menor de idade');
}
};
