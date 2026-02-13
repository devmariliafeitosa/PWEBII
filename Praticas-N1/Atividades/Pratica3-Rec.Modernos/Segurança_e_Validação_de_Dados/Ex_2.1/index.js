// Exercício 2.1: Acesso Seguro (Optional Chaining) e Configurações de Cache (Nullish Coalescing)

// 1. Objeto de configurações (cache pode ser undefined, null, ou um objeto)
const configuracoes = {}; // Cache undefined

// 2. Optional Chaining Operator (?.): Acesso seguro
const expiracaoSegura = configuracoes.cache?.tempoExpiracao;
console.log(`\nTempo de Expiração (acesso seguro com ?. ): ${expiracaoSegura}`); // undefined (não lança erro)

// 3. Nullish Coalescing Operator (??): Atribuição de padrão
const padraoExpiracao = 688;

const valorApiZero = 0;       // Zero (Cache Ilimitado)
const valorApiNull = null;    // Valor nulo
const valorApiUndefined = undefined; // Valor indefinido

const tempo1 = valorApiZero ?? padraoExpiracao;
const tempo2 = valorApiNull ?? padraoExpiracao;
const tempo3 = valorApiUndefined ?? padraoExpiracao;

console.log(`\nValor API = 0 (Mantido): ${tempo1}`);        // Saída: 0
console.log(`Valor API = null (Padrão): ${tempo2}`);      // Saída: 688
console.log(`Valor API = undefined (Padrão): ${tempo3}`); // Saída: 688
