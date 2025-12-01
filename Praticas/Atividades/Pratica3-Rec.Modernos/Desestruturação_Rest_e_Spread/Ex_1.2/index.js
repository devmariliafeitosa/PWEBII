// Exercício 1.2: Manipulação de Argumentos de Função (Rest Operator)

// 1. Definição da função com Rest Operator (...)
const registrarEvento = (tipo, ...metadados) => {
    console.log(`\nTipo do Evento: ${tipo}`);
    console.log('Metadados (Array gerado pelo Rest):', metadados);
};

// 3. Chamadas da função
registrarEvento('Clique', 'Botão Salvar', 5, { x: 100, y: 200 });
registrarEvento('Carregamento', 'Página Home', new Date());
registrarEvento('Alerta de Erro');
