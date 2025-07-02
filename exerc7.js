var prompt = require('prompt-sync')();

let cels = parseFloat(prompt('Digite a temperatura em Celsius:  '));
    let fahr = (9*cels + 160) /5;
    console.log('A temperatura convertida em Fahrenheit e:  ' + fahr);