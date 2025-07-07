var prompt = require('prompt-sync')();
    let nivel = parseInt(prompt("Informe o nível do professor (1, 2 ou 3):"));
        let horasAula = parseFloat(prompt("Informe a quantidade de horas/aula:"));
            let valorHora;

switch (nivel) {
  case 1:
    valorHora = 12.00;
    break;
case 2:
    valorHora = 17.00;
    break;
case 3:
    valorHora = 25.00;
    break;
default:
    alert("Nível inválido.");
    valorHora = null;
}

if (valorHora !== null) {
  let salario = horasAula * valorHora;
  alert('Salário do professor: R$' +salario.toFixed(2));
}