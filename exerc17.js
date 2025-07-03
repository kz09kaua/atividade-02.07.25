var prompt = require('prompt-sync')();

let repeti = 0;

for (let i=1; i<=80; i++){
    let numero = prompt('Escreva o '+i+ +' numero');
        let repeticao = Number(numero);
    
if (repeticao >= 10 && repeticao <= 150) {
    repeti++;
}
}console.log('quantidade de numeros no intervalo entre 10 e 150: '+contador);