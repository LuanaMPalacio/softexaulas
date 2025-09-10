document.addEventListener("DOMContentLoaded", () =>{
    //Matriz: notas de 3 alunos em 3 provas
let notasAlunos=[
    [8,5,7], 
    [3,6,4], 
    [8,9,9] 
];

const tabela=document.querySelector("#tabelaNotas tbody");
for (let i = 0; i< notasAlunos.length;i++) {
    let linha = document.createElement("tr");

    //Nome do aluno
    let celAluno=document.createElement("td");
    celAluno.textContent=`Aluno ${i+1}`;
    linha.appendChild(celAluno);

    //Notas e soma
    let soma = 0;
    for(let j=0; j<notasAlunos[i].length; j++){
        let celNota = document.createElement("td");
        celNota.textContent = notasAlunos [i] [j];
        linha.appendChild(celNota);
        soma+= notasAlunos[i][j];
    }
    
    //Média
    let media=soma/notasAlunos[i].length;
    let celMedia = document.createElement("td");
    celMedia.textContent=media.toFixed(2)
    linha.appendChild(celMedia);

    //situação aprovado ou reprovado
    let celSituacao = document.createElement("td");
    if (media >= 7) {
    celSituacao.textContent = "Aprovado";
    celSituacao.style.color = "green";
    } else {
    celSituacao.textContent = "Reprovado";
    celSituacao.style.color = "red";
    }
    linha.appendChild(celSituacao);



    tabela.appendChild(linha);

}
} );


