

/**
 * Calcula o valor total de uma compra.
 * @param {number} valorUnitario O preço de um item.
 * @param {number} quantidade A quantidade de itens.
 * @param {number} descontoPercentual O desconto (ex: 10 para 10%). Padrão é 0.
 */
function calcularTotalCompra(
  valorUnitario,
  quantidade,
  descontoPercentual = 0
) {

  const subtotal = valorUnitario * quantidade;

  const valorDoDesconto = subtotal * (descontoPercentual / 100);

  const totalFinal = subtotal - valorDoDesconto;

  return totalFinal;
}

console.log("Iniciando Questão 3e...");


let total1 = calcularTotalCompra(50, 2);
console.log(`Total (R$50, 2 un, 0% desc): R$ ${total1.toFixed(2)}`);

let total2 = calcularTotalCompra(50, 2, 10);
console.log(`Total (R$50, 2 un, 10% desc): R$ ${total2.toFixed(2)}`);

let total3 = calcularTotalCompra(80, 4, 25);
console.log(`Total (R$80, 4 un, 25% desc): R$ ${total3.toFixed(2)}`);

alert("Testes da Questão 3e no console (F12).");