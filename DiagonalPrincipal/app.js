const ORDEM = 4;

function montarMatriz() {
    let resultado = [];

    for (let l = 0; l < ORDEM; l++) {
        resultado[l] = [];

        for (let c = 0; c < ORDEM; c++) {
            resultado[l][c] = Math.floor(Math.random() * 100) + 1;
        }
    }

    return resultado;
}

function mostrarNaTela() {
    const matriz = montarMatriz();
    let diagonal = [];
    let texto = "<h3>Matriz gerada</h3>";

    for (let i = 0; i < ORDEM; i++) {
        texto += matriz[i].join(" | ") + "<br>";
        diagonal.push(matriz[i][i]);
    }

    document.getElementById("saida-matriz").innerHTML = texto;
    document.getElementById("saida-diagonal").innerHTML =
        "<h3>Diagonal principal</h3>" + diagonal.join(", ");
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("gerar").addEventListener("click", mostrarNaTela);
    mostrarNaTela();
});
