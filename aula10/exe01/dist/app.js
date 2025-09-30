"use strict";
class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
    apresentar() {
        return `Espero que steja bem, ${this.nome}`;
    }
}
function mostrarNome() {
    const pessoa = new Pessoa("Luana");
    const mensagem = pessoa.apresentar();
    const resultadoDiv = document.getElementById("resultado");
    if (resultadoDiv) {
        resultadoDiv.innerText = mensagem;
    }
}
window.mostrarNome = mostrarNome;
