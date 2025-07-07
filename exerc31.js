var prompt = require('prompt-sync')();

let num1 = parseInt(prompt("Digite o primeiro número inteiro:"));
let num2 = parseInt(prompt("Digite o segundo número inteiro:"));
let num3 = parseInt(prompt("Digite o terceiro número inteiro:"));

if (num1 !== num2 && num1 !== num3 && num2 !== num3) {
  let numeros = [num1, num2, num3];
  numeros.sort((a, b) => a - b);
  console.log("Números em ordem crescente:", numeros[0], numeros[1], numeros[2]);
} else {
  console.log("Erro: Os números devem ser distintos!");
}