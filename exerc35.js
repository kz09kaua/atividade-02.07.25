var prompt = require('prompt-sync')();

let idade = parseInt(prompt("Informe a idade do nadador:"));

if (idade >= 5 && idade <= 7){
  categoria = "Infantil A";

}else if(idade >= 8 && idade <= 10){
  categoria = "Infantil B";

}else if(idade >= 11 && idade <= 13){
  categoria = "Juvenil A";

} else if(idade >= 14 && idade <= 17){
  categoria = "Juvenil B";

} else if(idade >= 18 && idade <= 25){
  categoria = "Sênior";

} else{
  categoria = "Idade fora da faixa etária";
}

alert(`Classificação: ${categoria}`);