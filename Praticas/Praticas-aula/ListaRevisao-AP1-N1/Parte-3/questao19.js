/**
 * Compose vs. Pipe (discursiva curta + código) a) Explique composition (da direita para a esquerda) e pipe (da esquerda para a direita). b) Dadas const somar1 = x => x+1 e const dup = x => x*2, escreva compose e pipe que resultem em 12 a partir de 5.

R: a) Composição: Combina funções, executando-as da direita para a esquerda. Ex: f(g(x)). Pipe: Combina funções, executando-as da esquerda para a direita. Ex: h(g(x)).

b) Código (Para somar1(5)→6→dup(6)→12):
 */

const somar1 = x => x + 1;
const dup = x => x * 2;

// Compose: dup(somar1(5))
const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x);
console.log(compose(dup, somar1)(5)); // 12

// Pipe: somar1(5) -> dup
const pipe = (...fns) => x => fns.reduce((acc, fn) => fn(acc), x);
console.log(pipe(somar1, dup)(5)); // 12

