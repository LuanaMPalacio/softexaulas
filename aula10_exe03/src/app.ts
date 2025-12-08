const tarefaInput = document.getElementById('tarefaInput') as HTMLInputElement;
const adicionarBtn = document.getElementById('adicionarBtn') as HTMLButtonElement;
const listaTarefas = document.getElementById('listaTarefas') as HTMLUListElement;

function criarTarefaElement(tarefaTexto: string): HTMLLIElement {
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