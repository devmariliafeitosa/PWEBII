// 1) Sobre o escopo de código e hoisting, considere o código:

console,log(multiplica(2, 3));
function multiplica(x, y) {return x * y; }

const sub = function (a, b) {return a - b;}
// console.log(sub(5, 2)); // descomente e explique o que acontece

/**
 * Resposta: (B) - Apenas multiplica pode ser chamada antes da definição
 * 
 * Justificativa: multiplica é uma Function Declaration, que sofre hoisting completo. Sub é uma function Expression atribuída a const, e só é inicializada na linha de código, gerando um ReferenceError se chamada antes
 */