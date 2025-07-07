var prompt = require('prompt-sync')();

let valor = parseFloat(prompt('Digite o valor do carro que ira comprar '));
    let carro = parseInt(prompt('Digite o ano do carro do seu interesse'));

if (carro<=2000){
    let dinheiro = valor*0.12;
        let total = dinheiro-valor;   
            console.log('O valor de desconto e de '+dinheiro+' e o valor a ser pago e de '+total);

}else{(carro>=2000);
    let dinheiro = valor*0.07.toFixed(3);
        let total = dinheiro-valor;
            console.log('O valor de desconto e de '+dinheiro+' e o valor a ser pago e de '+total);
};