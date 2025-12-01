

// 1. Ler o valor do raio
const raio = parseFloat(prompt("Digite o valor do raio do círculo:"));

// 2. Calcular o perímetro (C = 2 * PI * r)

const perimetro = 2 * Math.PI * raio;

// 3. Exibir o resultado
alert(`O perímetro de um círculo com raio ${raio} é: ${perimetro.toFixed(3)}`);
console.log(`Raio: ${raio}`);
console.log(`Perímetro: ${perimetro}`);