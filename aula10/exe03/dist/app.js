"use strict";
const tarefaInput = document.getElementById('tarefaInput');
const adicionarBtn = document.getElementById('adicionarBtn');
const listaTarefas = document.getElementById('listaTarefas');
function criarTarefaElement(tarefaTexto) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = tarefaTexto;
    const btnConcluir = document.createElement('button');
    btnConcluir.textContent = 'Concluída';
    btnConcluir.className = 'concluirBtn';
    btnConcluir.addEventListener('click', () => {
        li.classList.add('concluida');
        btnConcluir.disabled = true;
    });
    li.appendChild(span);
    li.appendChild(btnConcluir);
    return li;
}
adicionarBtn.addEventListener('click', () => {
    const tarefa = tarefaInput.value.trim();
    if (!tarefa) {
        alert('Por favor, digite uma tarefa válida.');
        return;
    }
    const tarefaElement = criarTarefaElement(tarefa);
    listaTarefas.appendChild(tarefaElement);
    tarefaInput.value = '';
    tarefaInput.focus();
});
