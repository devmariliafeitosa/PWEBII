// Exercício 3.1: Modelagem de Entidades do Sistema (Herança)

// 1. Classe base
class Usuario {
    constructor(nome, email) {
        this.nome = nome;
        this.email = email;
    }

    exibirInfo() {
        console.log(`\nInformações do Usuário:`);
        console.log(`Nome: ${this.nome}, Email: ${this.email}`);
    }
}

// 2. Subclasse com 'extends'
class Administrador extends Usuario {
    // 3. Construtor com super()
    constructor(nome, email, nivelAcesso) {
        super(nome, email); // Chama o construtor da classe pai
        this.nivelAcesso = nivelAcesso;
    }

    // 4. Sobrescrita de método
    exibirInfo() {
        super.exibirInfo(); // Reutiliza a lógica da classe pai
        console.log(`Nível de Acesso: ${this.nivelAcesso} (ADMIN)`);
    }
}

// 5. Instanciação e chamada
const usuarioComum = new Usuario('João Pessoa', 'joao@comum.com');
const adminSistema = new Administrador('Maria Chefe', 'maria@admin.com', 'Mestre');

usuarioComum.exibirInfo();
adminSistema.exibirInfo();