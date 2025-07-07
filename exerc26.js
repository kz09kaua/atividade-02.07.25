var prompt = require('prompt-sync')();

let numero = parseInt(prompt('digite um numero de 1 ate 5: '));

if (numero<1){
    console.log('O numero esta incorreto, digite um numero maior que '+numero);

}else{ (numero>5)
    console.log('O numero esta incorreto, digite um numero menor que '+numero);
};
switch (numero){

case 1:
    console.log('Um');
break;

case 2:
    console.log('Dois');
break;

case 3:
    console.log('três');
break;

case 4:
    console.log('quatro');
break;

case 5:
    console.log('cinco');
break;
    default:
};
