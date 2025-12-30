class Item {
    private descricao: string;
    private valor: number;

    constructor(descricao: string, valor: number) {
        this.descricao = descricao;
        this.valor = valor;
    }

    calcularPrecoFinal(percentual: number): number {
        const fator = 1 - percentual / 100;
        return this.valor * fator;
    }

    getNome(): string {
        return this.descricao;
    }

    getPreco(): number {
        return this.valor;
    }
}

const itemA = new Item("Tênis", 200);

console.log(`Produto: ${itemA.getNome()}`);
console.log(`Preço original: R$ ${itemA.getPreco()}`);
console.log(`Preço com 10% de desconto: R$ ${itemA.calcularPrecoFinal(10)}`);
