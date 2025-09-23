class Carro {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

        detalhes(){
            return `O carro é da marca ${this.marca}, do modelo ${this.modelo} e do ano ${this.ano}.`;
        }
}

//ai vem os objetos:
const carro1 = new Carro ("Wolkswagwn", "Gol", 2020);
console.log(carro1.detalhes());

const carro2 = new Carro ("Wolkswagen", "Santana", 1989);
console.log(carro2.detalhes());