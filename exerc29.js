var prompt = require('prompt-sync')();

let mes = parseInt(prompt('Escreva o mes que deseja saber: '));

if (mes>=1 && mes<=12){

switch (mes){

case 1:
    console.log('Voce escreveu '+mes+' que coresponde a (janeiro)');
break;

case 2:
    console.log('Voce escreveu '+mes+' que coresponde a (fevereiro)');
break;

case 3:
    console.log('Voce escreveu '+mes+' que coresponde a (março)');
break;

case 4:
    console.log('Voce escreveu '+mes+' que coresponde a (abril)');
break;

case 5:
    console.log('Voce escreveu '+mes+' que coresponde a (maio)');
break;

case 6:
    console.log('Voce escreveu '+mes+' que coresponde a (junho)');
break;

case 7:
    console.log('Voce escreveu '+mes+' que coresponde a (julho)');
break;

case 8:
    console.log('Voce escreveu '+mes+' que coresponde a (agosto)');
break;

case 9:
    console.log('Voce escreveu '+mes+' que coresponde a (setembro)');
break;

case 10:
    console.log('Voce escreveu '+mes+' que coresponde a (outubro)');
break;

case 11:
    console.log('Voce escreveu '+mes+' que coresponde a (novembro)');
break;

case 12:
    console.log('Voce escreveu '+mes+' que coresponde a (dezembro)');
break;
default:
}
}else{
    console.log('Mes desconhecido, escreva novamente');
}