var prompt = require('prompt-sync')();

let lado1 = parseInt(prompt("Informe o primeiro lado do triângulo:"));
  let lado2 = parseInt(prompt("Informe o segundo lado do triângulo:"));
    let lado3 = parseInt(prompt("Informe o terceiro lado do triângulo:"));

if (lado1 < lado2 + lado3 && lado2 < lado1 + lado3 && lado3 < lado1 + lado2 ){
 
if (lado1 === lado2 && lado2 === lado3){
    mensagem = "Triângulo Equilátero";

}else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3){
    mensagem = "Triângulo Isósceles";
  
}else{
    mensagem = "Triângulo Escaleno";
}

}else{
  mensagem = "Os valores não formam um triângulo";
}

