var prompt = require('prompt-sync')();
    let valorProduto = prompt('Digite o valor do produto: ');
        let prestacoes = prompt('Digite quantas parcelas vai dividir: ');
            let valorfinal = valorProduto/prestacoes;
        console.log('o valor por parcela a ser pago será: '+ valorfinal);