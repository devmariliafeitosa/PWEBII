

// 1. Definir os pesos
const pesoN1 = 2;
const pesoN2 = 3;
const somaPesos = pesoN1 + pesoN2;
const notaMinimaAprovacao = 7.0;

// 2. Ler as notas
const n1 = parseFloat(prompt("Digite a nota da N1 (peso 2):"));
const n2 = parseFloat(prompt("Digite a nota da N2 (peso 3):"));

// 3. Calcular a média ponderada
const mediaPonderada = (n1 * pesoN1 + n2 * pesoN2) / somaPesos;

// 4. Verificar aprovação e exibir resultado
let statusAluno; 

if (mediaPonderada >= notaMinimaAprovacao) {
  statusAluno = "APROVADO";
} else {
  statusAluno = "REPROVADO";
}

// 5. Exibir resultado
alert(`Sua nota final é: ${mediaPonderada.toFixed(2)}\nStatus: ${statusAluno}`);
console.log(`Nota N1: ${n1}, Nota N2: ${n2}`);
console.log(`Média Final: ${mediaPonderada.toFixed(2)}`);
console.log(`Status: ${statusAluno}`);