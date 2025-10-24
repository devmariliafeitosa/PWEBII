

function calculadora(num1, num2, operador) {
  switch (operador) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      if (num2 === 0) {
        return "Erro: Divisão por zero!";
      }
      return num1 / num2;
    default:
      return "Operador inválido!";
  }
}


const n1 = parseFloat(prompt("Digite o primeiro número:"));
const n2 = parseFloat(prompt("Digite o segundo número:"));
const op = prompt("Digite a operação (+, -, *, /):");

const resultado = calculadora(n1, n2, op);

alert(`Resultado: ${resultado}`);
console.log(`Cálculo: ${n1} ${op} ${n2} = ${resultado}`);