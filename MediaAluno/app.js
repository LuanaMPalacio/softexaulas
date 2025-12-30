function calcularMedia(valores) {
    const total = valores.reduce((acumulador, nota) => acumulador + nota, 0);
    return total / valores.length;
}

document.addEventListener("DOMContentLoaded", function () {
    const alunos = [
        { nome: "Aluno 1", notas: [9, 6, 7] },
        { nome: "Aluno 2", notas: [6, 8, 4] },
        { nome: "Aluno 3", notas: [10, 9, 9] }
    ];

    let html = "";

    alunos.forEach(aluno => {
        const media = calcularMedia(aluno.notas);
        html += `${aluno.nome}: Notas (${aluno.notas.join(" - ")}) | Média = ${media.toFixed(2)}<br>`;
    });

    document.getElementById("saida").innerHTML = html;
});
