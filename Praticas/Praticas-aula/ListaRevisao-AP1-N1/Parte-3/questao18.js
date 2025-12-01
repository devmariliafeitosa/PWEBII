/**
 * Currying e aplicação parcial (complete e comente) Implemente aplicarTaxa(t) que retorna uma função f(valor) somando a taxa; mostre aplicarICMS e aplicarIPI. Comente a relação entre currying e closures.

R:
 */

function aplicarTaxa(taxa) {
  return function(valor) {
    return valor * (1 + taxa);
  };
}

// Aplicação Parcial
const aplicarICMS = aplicarTaxa(0.18);
const aplicarIPI = aplicarTaxa(0.05);

console.log(aplicarICMS(100)); // 118

/**
 * Relação: O Currying (transformar múltiplos argumentos em funções sequenciais) só funciona devido às Closures (fechamentos). A função interna (function(valor)) é uma closure que "lembra" do valor de taxa do seu escopo externo, mesmo depois que aplicarTaxa já terminou de executar.
 */