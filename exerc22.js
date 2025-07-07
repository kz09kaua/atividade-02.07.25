var prompt = require('prompt-sync')();

for (i=1; i<=40; i++){
    let custo = parseFloat(prompt('Digite o preco de custo do produto: '));
        let venda = parseFloat(prompt('Digite o preco de venda do produto: '));

if (custo<venda){
    let lucro = custo-venda;
        console.log('Ouve um lucro de R$ '+lucro+' reais');

}else if (custo>venda){
    let resultado = custo-venda;
        console.log('Ouve um prejuizo de R$ ' +resultado+' reais');

}else{(custo===venda)
    console.log('Nao ouve lucro e nem prejuizo na venda desse produto, reajuste o preço do produto para obter lucro  ');
};
};