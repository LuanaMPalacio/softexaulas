const TAMANHO = 4;

function criarMatrizAleatoria() {
    const dados = [];

    for (let linha = 0; linha < TAMANHO; linha++) {
        const linhaAtual = [];

        for (let coluna = 0; coluna < TAMANHO; coluna++) {
            linhaAtual.push(Math.ceil(Math.random() * 100));
        }

        dados.push(linhaAtual);
    }

    return dados;
}

function extrairDiagonal(matriz) {
    const valores = [];

    matriz.forEach((linha, indice) => {
        valores.push(linha[indice]);
    });

    return valores;
}

function exibir() {
    const matrizGerada = criarMatrizAleatoria();
    const diagonalPrincipal = extrairDiagonal(matrizGerada);

    let htmlMatriz = "<strong>Matriz gerada:</strong><br>";

    matrizGerada.forEach(linha => {
        htmlMatriz += linha.join(" | ") + "<br>";
    });

    document.getElementById("saida-matriz").innerHTML = htmlMatriz;
    document.getElementById("saida-diagonal").innerHTML =
        "<strong>Diagonal principal:</strong> " + diagonalPrincipal.join(" - ");
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("gerar").onclick = exibir;
    exibir();
});
