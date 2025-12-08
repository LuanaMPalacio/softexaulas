class Pessoa {
    nome: string;

    constructor(nome:string){
        this.nome= nome;
    }

    apresentar(): string{
        return `Espero que esteja bem, ${this.nome}! `

    }
}

function mostrarNome(){
    const pessoa = new Pessoa ("Luana");
    const mensagem = pessoa.apresentar();

    const resultadoDiv = document.getElementById("resultado");
    if (resultadoDiv) {
        resultadoDiv.innerText = mensagem;
    }
}
(window as any).mostrarNome = mostrarNome;