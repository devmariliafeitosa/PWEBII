
const valorReais = parseFloat(prompt("Digite o valor em R$:"));

// 2. Ler a cotação do Dólar
const cotacaoDolar = parseFloat(prompt("Digite a cotação atual do Dólar:"));

// 3. Calcular a conversão
const valorDolar = valorReais / cotacaoDolar;

// 4. Exibir o resultado
alert(`R$ ${valorReais.toFixed(2)} equivalem a US$ ${valorDolar.toFixed(2)}`);

console.log(`Valor em R$: ${valorReais}`);
console.log(`Cotação: ${cotacaoDolar}`);
console.log(`Valor em US$: ${valorDolar.toFixed(2)}`);