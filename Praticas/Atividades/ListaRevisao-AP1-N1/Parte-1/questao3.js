// Sobre parâmetros default x null, no trecho:

function calculaImposto(valor, taxa = 0.1) {
    return valor * taxa;
}

console.log(calculaImposto(100, undefined));
console.log(calulaImposto(100, null));

// Explique por que as saídas diferem e discuta a diferença entre valores falsy, null e undefined.

/**
 * Respostas: As saídas diferem porque o valor defauult(0.1) só é ativado se o parâmetro for undefined. Ao passas null, o JS considera um valor válido, e no cálculo, nullt= pe coagido a 0
 * 
 * Diferença: Undefined é a ausência de valor(não inicializado). null é a ausencia intencional de valor (atributo). Ambos são falsy(avaliam para false em contextos booleanos)
 */