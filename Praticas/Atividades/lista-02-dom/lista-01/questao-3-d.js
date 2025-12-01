

function filtrarImpares(arrayDeNumeros) {

  const impares = arrayDeNumeros.filter((numero) => {
   
    return numero % 2 !== 0;
  });

  return impares;
}


const meusNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosImpares = filtrarImpares(meusNumeros);

console.log("Iniciando Questão 3d...");
console.log(`Array original: ${meusNumeros}`);
console.log(`Array de ímpares: ${numerosImpares}`); 
alert("Testes da Questão 3d no console (F12).");