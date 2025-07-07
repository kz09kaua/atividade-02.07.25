var prompt = require('prompt-sync')();

for (let i=1; i<=5; i++){
    let nome = prompt('Escreva a o seu nome: ');
        let salario = parseFloat(prompt('Digite quantos salarios minimos voce ganha '));
            let minimo = 1804*salario;
            
if (salario>=3){
    let minimo = 1804*salario;
        let dinheiro = minimo*0.50
            let total = minimo+dinheiro;
                console.log('Ola '+nome+' o valor do seu aumento e de '+dinheiro+' e o valor do seu salario agora e de: '+total);
       
}else if (salario>3 && salario<10){
    let minimo = 1804*salario;
        let dinheiro = valor*0.20
            let total = valor+dinheiro;
                console.log('Ola '+nome+' o valor do seu aumento e de '+dinheiro+' e o valor do seu salario agora e de: '+total);

}else if (salario>10 && salario<20){
    let minimo = 1804*salario;
        let dinheiro = valor*0.15
            let total = valor+dinheiro;
                console.log('Ola '+nome+' o valor do seu aumento e de '+dinheiro+' e o valor do seu salario agora e de: '+total);

}else{
    let minimo = 1804*salario;
        let dinheiro = valor*0.10
            let total = valor+dinheiro;
                console.log('Ola '+nome+' o valor do seu aumento e de '+dinheiro+' e o valor do seu salario agora e de: '+total)
}
};