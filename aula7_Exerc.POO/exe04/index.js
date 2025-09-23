class ContaBancaria {
    #saldo = 0; 
  
    depositar(valor) {
        if (valor > 0) {
            this.#saldo += valor;
            console.log(`Depósito de R$${valor} realizado com sucesso.`);
        } else {
            console.log("O valor do depósito deve ser maios que 0.");
        }
    }

    sacar(valor) {
        if (valor <= this.#saldo) {
            this.#saldo -= valor;
            console.log(`Saque de R$${valor} realizado com sucesso.`);
        } else {
            console.log("Saldo insuficiente para saque.");
        }
    }

    verSaldo() {
        return `Saldo atual: R$${this.#saldo}`
    }
}

const contaBancaria1 = new ContaBancaria();
contaBancaria1.depositar(100);
contaBancaria1.sacar(30);
console.log(contaBancaria1.verSaldo());

