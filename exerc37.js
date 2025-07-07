var prompt = require('prompt-sync')();

let nome = prompt("Digite o nome:");
    let sexo = prompt("Digite o sexo (M para masculino ou F para feminino):").toUpperCase();
        let altura = parseFloat(prompt("Digite a altura em metros (ex: 1.75):"));
            let idade = parseInt(prompt("Digite a idade:"));

if (sexo === "M"){
  
if (altura > 1.70) {
    if (idade <= 20) {
        pesoIdeal = (72.7 * altura) - 58;
    
}else if(idade <= 39){
    pesoIdeal = (72.7 * altura) - 53;
    
}else{
    pesoIdeal = (72.7 * altura) - 45;
}
} else{
    if (idade <= 40) {
        pesoIdeal = (72.7 * altura) - 50;
    
}else{
    pesoIdeal = (72.7 * altura) - 58;
    }
  }
} else if (sexo === "F") {
  if (altura > 1.50) {
    if (idade >= 35) {
      pesoIdeal = (62.1 * altura) - 45;
    } else {
      pesoIdeal = (62.1 * altura) - 49;
    }
  } else {
    pesoIdeal = (62.1 * altura) - 44.7;
  }
} else {
  alert("Sexo inválido. Use M ou F.");
  pesoIdeal = null;
}

if (pesoIdeal !== null) {
  alert(`Nome: ${nome}\nSexo: ${sexo === "M" ? "Masculino" : "Feminino"}\nPeso Ideal: ${pesoIdeal.toFixed(2)} kg`);
}
