/**
 * var, let, const e referência constante (discursiva curta) Explique por que const não “congela” um array/objeto e mostre um exemplo seguro de atualização imutável de um array ou objeto.
 */

/**
 * Resposta: const garante que a referÊNCIA( ENDEREÇO DE MEMÓRIA ) não pode ser reatribuida, mas não impede a mutação (alteração) interna do conteúdo do array/objeto. O objeto continua sendo o mesmo, mas suas propriedades podem mudas
 */

// Exemplo Multável

const user = { nome: "A", idade: 20 };
const novoUser = { ...user, idade: 21 };