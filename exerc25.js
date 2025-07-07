var prompt = require('prompt-sync')();

let A = parseFloat(prompt('Digite o primeiro numero: '));
    let B = parseFloat(prompt('Digite o segundo numero: '));

if (A===B){
    console.log('Os numeros sao iguais ');

}else{(A!==B)
    console.log('Os numeros sao diferentes')

if (A>B){
    console.log('E o primeiro numero e maior que o segundo ');

}else{(A<B)
    console.log('E o segundo numero e maior que o primeiro ');
}
}