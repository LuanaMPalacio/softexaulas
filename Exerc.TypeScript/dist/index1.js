"use strict";
class Item {
    constructor(descricao, valor) {
        this.descricao = descricao;
        this.valor = valor;
    }
    calcularPrecoFinal(percentual) {
        const fator = 1 - percentual / 100;
        return this.valor * fator;
    }
    getNome() {
        return this.descricao;
    }
    getPreco() {
        return this.valor;
    }
}
const itemA = new Item("Tênis", 200);
console.log(`Produto: ${itemA.getNome()}`);
console.log(`Preço original: R$ ${itemA.getPreco()}`);
console.log(`Preço com 10% de desconto: R$ ${itemA.calcularPrecoFinal(10)}`);
