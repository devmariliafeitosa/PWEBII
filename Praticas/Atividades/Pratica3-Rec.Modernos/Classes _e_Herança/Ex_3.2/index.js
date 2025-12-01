// Exercício 3.2: Implementação de Conta Bancária Segura (Campos Privados #)

// 1. Criação da classe
class ContaBancaria {
    // 2. Definição do campo de classe privado (ES2022)
    #saldo = 0;

    constructor() {
        this.#saldo = 0;
    }

    // 3. Método público para depósito
    depositar(valor) {
        if (valor > 0) {
            this.#saldo += valor;
            console.log(`\nDepósito de R$ ${valor.toFixed(2)} realizado.`);
        }
    }

    // 4. Método público para saque (validação)
    sacar(valor) {
        if (valor > 0 && valor <= this.#saldo) {
            this.#saldo -= valor;
            console.log(`Saque de R$ ${valor.toFixed(2)} realizado.`);
            return true;
        } else {
            console.log(`\nSaque de R$ ${valor.toFixed(2)} não permitido. Saldo: R$ ${this.#saldo.toFixed(2)}.`);
            return false;
        }
    }

    // 5. Método público para consulta
    consultarSaldo() {
        return this.#saldo;
    }
}

// Instanciação
const minhaConta = new ContaBancaria();

minhaConta.depositar(750.50);
minhaConta.sacar(200);
console.log(`\nSaldo Final Acessado pelo método: R$ ${minhaConta.consultarSaldo().toFixed(2)}`);

// 6. Tentativa de acesso direto (descomente em um ambiente real para ver o erro)
/*
try {
    minhaConta.#saldo = 1000; // Isso lançará um erro de sintaxe/referência
} catch (e) {
    console.log(`\nERRO: Tentativa de acessar ou modificar minhaConta.#saldo diretamente falhou.`);
    console.log("Explicação: O campo #saldo é privado. O JavaScript proíbe o acesso externo, garantindo o encapsulamento.");
}
*/