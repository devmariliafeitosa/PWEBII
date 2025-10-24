

const contaBancaria = {
  numeroConta: "12345-6",
  saldo: 100.0, // Saldo inicial


  depositar: function (valor) {
    if (valor <= 0) {
      console.error("Valor de depósito inválido.");
      alert("Valor de depósito inválido.");
      return;
    }

    this.saldo = this.saldo + valor;
    console.log(`Depósito de R$${valor} realizado.`);
    this.informarSaldo();
  },

  
  sacar: function (valor) {
    if (valor <= 0) {
      console.error("Valor de saque inválido.");
      alert("Valor de saque inválido.");
      return;
    }

    if (valor > this.saldo) {
      console.warn("Saldo insuficiente para este saque.");
      alert("Saldo insuficiente para este saque.");
    } else {
      this.saldo = this.saldo - valor;
      console.log(`Saque de R$${valor} realizado.`);
    }
    this.informarSaldo();
  },

  informarSaldo: function () {
    const mensagem = `Saldo atual da conta ${
      this.numeroConta
    }: R$ ${this.saldo.toFixed(2)}`;
    console.log(mensagem);
    alert(mensagem);
  },
};

console.log("Iniciando Questão 3f...");
alert("Testes da Questão 3f no console (F12) e nos alertas.");

contaBancaria.informarSaldo();
contaBancaria.depositar(500); 
contaBancaria.sacar(150); 
contaBancaria.sacar(1000); 
contaBancaria.informarSaldo();