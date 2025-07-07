var prompt = require('prompt-sync')();

let tipo = parseInt(prompt("Informe o tipo de cliente: - (1)Residência - (2)Comércio - (3)Indústria"));
    let consumo = parseFloat(prompt("Informe o consumo em kWh:"));

switch (tipo) {
  case 1: 
    total = consumo*0.60;
       total2 = consumo+total 
            console.log('O valor que deve ser pago e de: '+total2);
    break;
  case 2:
    total = consumo*0.48;
       total2 = consumo+total 
            console.log('O valor que deve ser pago e de: '+total2);
    break;
  case 3:
    total = consumo*1.29;
        total2 = consumo+total 
            console.log('O valor que deve ser pago e de: '+total2); 
break;
  default:
    alert("Tipo de cliente inválido!");
    
}

if (valorKW !== null) {
  let valorConta = consumoKWh * valorKW;
  alert(`Valor da conta de luz: R$ ${valorConta.toFixed(2)}`);
}