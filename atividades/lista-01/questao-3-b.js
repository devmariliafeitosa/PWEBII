
function produtorio(...numeros) {

  if (numeros.length === 0) {
    return 1;
  }

  return numeros.reduce(
    (acumulador, valorAtual) => acumulador * valorAtual,
    1
  );
}

console.log("Iniciando Questão 3b...");
console.log(`Produtório de (1, 2, 3, 4): ${produtorio(1, 2, 3, 4)}`); 
console.log(`Produtório de (5, 10): ${produtorio(5, 10)}`); 
console.log(`Produtório de (2, 2, 2, 2): ${produtorio(2, 2, 2, 2)}`);
console.log(`Produtório sem números: ${produtorio()}`); 
alert("Testes da Questão 3b no console (F12).");