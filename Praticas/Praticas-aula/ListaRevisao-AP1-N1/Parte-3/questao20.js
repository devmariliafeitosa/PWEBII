/**
 * Sobre Lazy evaluation: Explique o conceito de lazy evaluation e comente sobre como essa técnica é empregada, bem como qual a sua vantagem, com base no trecho de código a seguir:
 */

function lazyMap(arr, fn){
  return { get: i => fn(arr[i]), size: () => arr.length };
}

// Exemplo de utilização
const values = [129.9, 99.5, 24.69, 54.65];

const valuesWithDiscount = lazyMap(values, (value) => value * (1 - 0.1));

console.log(valuesWithDiscount.get(0));

/**
 * Conceito: Lazy evaluation (Avaliação Preguiçosa) é uma estratégia onde as operações só são executadas quando seu resultado é realmente necessário.

Emprego: No código, a função de desconto (value * (1 - 0.1)) não é aplicada a todos os values imediatamente. Ela só é aplicada quando o método get(i) é chamado.

Vantagem: Otimização de Performance. Se o array fosse enorme e apenas um ou dois itens fossem acessados, a lazy evaluation evitaria o processamento desnecessário dos outros itens.
 */