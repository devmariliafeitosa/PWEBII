
function fatorial(n) {

  if (n < 0) {
    return "Número inválido (negativo)";
  }

  if (n === 0) {
    return 1;
  }

  return n * fatorial(n - 1);
}

const num = parseInt(prompt("Digite um número para calcular o fatorial:"));
const resultadoFatorial = fatorial(num);

alert(`O fatorial de ${num} é: ${resultadoFatorial}`);
console.log(`Fatorial de ${num} = ${resultadoFatorial}`);