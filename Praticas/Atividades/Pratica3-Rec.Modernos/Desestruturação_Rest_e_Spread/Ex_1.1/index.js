// Exercício 1.1: Processamento de Resposta de API e Configurações

// 1. Destructuring de Objeto
const respostaApi = { id: 101, username: "user_a", email: "a@ex.com", status: "ativo" };
const { username, email } = respostaApi;
console.log("1. Destructuring - Extração:", { username, email }); // { username: "user_a", email: "a@ex.com" }

// 2. Rest Operator em Objeto
const { id, ...dadosComplementares } = respostaApi;
console.log("2. Rest Operator - ID:", id); // 101
console.log("2. Rest Operator - Dados Complementares:", dadosComplementares); 
// { username: "user_a", email: "a@ex.com", status: "ativo" }

// 3. Spread Operator
const configPadrao = { tema: 'dark', notificacoes: true };
const configUsuario = { notificacoes: false };
// A ordem garante que configUsuario sobrescreva configPadrao
const configFinal = { ...configPadrao, ...configUsuario };
console.log("3. Spread Operator - Configuração Final:", configFinal); // { tema: 'dark', notificacoes: false }