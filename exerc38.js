var prompt = require('prompt-sync')();

let a = prompt("Digite o nome:");
    let b = parseInt(prompt("Digite a idade:"));
        let c = parseInt(prompt("Digite o grupo de risco (1-Baixo, 2-Médio, 3-Alto):"));

if (b < 17 || b > 70) {
    console.log("Idade fora da faixa permitida para seguro.");
} else {
    let d;

    if (b >= 17 && b <= 20) {
        d = [1, 2, 3];
    } else if (b >= 21 && b <= 24) {
        d = [2, 3, 4];
    } else if (b >= 25 && b <= 34) {
        d = [3, 4, 5];
    } else if (b >= 35 && b <= 64) {
        d = [4, 5, 6];
    } else {
        d = [7, 8, 9];
    }

let e = d[c - 1];
    console.log("Nome:", a);
        console.log("Idade:", b);
            console.log("Categoria:", e);
}
