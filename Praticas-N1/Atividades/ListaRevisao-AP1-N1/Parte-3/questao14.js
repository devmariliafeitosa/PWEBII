/**
 * Sobre o conceito de imutabilidade: Explique por que push em um array recebido por parâmetro pode introduzir efeitos colaterais. Reescreva adicionarItemImpuro(arr, item) de forma imutável usando spread.

R: push causa efeito colateral porque muta (altera no local) o array que foi passado como parâmetro. Isso pode gerar bugs em outras partes do código que ainda contavam com o array original inalterado.

    Reescrita Imutável:
 */
function adicionarItemPuro(arr, item) {
  return [...arr, item];
}