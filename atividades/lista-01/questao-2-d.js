
function ehPrimo(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

const n = parseInt(prompt("Quantos números você deseja analisar?"));

let somaPrimos = 0;

for (let i = 1; i <= n; i++) {
  const numero = parseInt(prompt(`Digite o ${i}º número:`));

  console.log(`Testando número: ${numero}`);

  if (ehPrimo(numero)) {
    console.log(`${numero} é primo!`);
    somaPrimos = somaPrimos + numero;
  }
}
alert(`A soma de todos os números primos digitados é: ${somaPrimos}`);
console.log(`Soma final dos primos: ${somaPrimos}`);