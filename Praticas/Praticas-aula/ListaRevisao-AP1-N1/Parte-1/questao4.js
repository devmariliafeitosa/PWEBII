/**
 * Sobre IIFE e isolamento: a) Mostre como uma IIFE evita poluir o escopo global. b) Transforme o exemplo abaixo em IIFE e explique por que privateVariable não é acessível fora:
 */

let privateVariable = "x";
console.log(privateVariable);

// a) IIFE e Escopo Global

/**
 * Uma IIFE cria um novo escopo de função que encapsula as variáveis declaradas dentro dela. Como função é executda imediatamente, essas variáveis não são adicionadas ao objeto global (window ou global), evitando poluição
 */

// b) Transformando em IIFE

(function () {
    let privateVariable = "x";
    console.log(privateVariable);
}) ();

//privateVariable está inacesssível aqui.

// Explicação: privateVariable não é acessível fora porque está no escopo local da função IIFE. O closure isola a variável, e o escopo é descartado após a execução da função