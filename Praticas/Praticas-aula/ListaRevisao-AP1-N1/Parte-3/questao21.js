/**
 * Sobre Closures: Dado um contador que vaza estado global, reescreva-o com closure garantindo “estado privado” entre chamadas. Explique a frase “o ambiente léxico é lembrado”, no contexto de closure functions.
 */

// Código antes
let count = 0;
function increment() { count++; }
// ...

/**
 * Refatoração com Cllosure
 */

function criarContador() {
  let count = 0; // Estado privado
  return {
    increment: () => count++,
    getCount: () => count
  };
}

const contador1 = criarContador();
contador1.increment();
contador1.increment();
console.log(contador1.getCount()); // 2

/**
 * Explicação: "O ambiente léxico é lembrado" significa que a função interna (increment, getCount) mantém acesso às variáveis do seu escopo externo (count), mesmo depois que a função externa (criarContador) termina de rodar. Isso garante o "estado privado" e seguro
 */