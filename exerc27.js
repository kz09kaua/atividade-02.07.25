var prompt = require('prompt-sync')();

let valor = parseFloat(prompt('Digite o valor do carro que ira comprar '));
    console.log('(1) carro movido a (álcool – 25%) de desconto ');
        console.log('(2) carro movido a (gasolina – 21%) de desconto ');
            console.log('(3) carro movido a (diesel –14%) de desconto '); 
let carro = parseInt(prompt('Digite o numero do carro que deseja comprar: '));

if (carro===1){
    let dinheiro = valor*0.25.toFixed(3);
        let total = valor-dinheiro;   
            console.log('O valor de desconto e de '+dinheiro+' e o valor a ser pago e de '+total);

}else if (carro===2){ 
    let dinheiro = valor*0.21.toFixed(3);
        let total = valor-dinheiro;
            console.log('O valor de desconto e de '+dinheiro+' e o valor a ser pago e de '+total);

}else if (carro===3){
    let dinheiro = valor*0.14.toFixed(3);
        let total = valor-dinheiro;
            console.log('O valor de desconto e de '+dinheiro+' e o valor a ser pago e de '+total);

}else{
    console.log('Erro ao digitar o tipo de carro que deseja comprar');
}



