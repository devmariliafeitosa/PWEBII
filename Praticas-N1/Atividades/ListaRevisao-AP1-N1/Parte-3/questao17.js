// Sobre os métodos map / filter / reduce, dado o seguinte código:

const pedidos = [
  { cliente: "A", total: 100 },
  { cliente: "B", total: 200 },
  { cliente: "A", total: 50  },
  { cliente: "C", total: 350 }
];

/**
 * a) Use map para obter apenas os totais. b) Use filter para pedidos ≥ 200. c) Use reduce para somar todos os totais. Explique por que o array original não é modificado.

R: a) map: pedidos.map(p => p.total) // [100, 200, 50, 350] b) filter: pedidos.filter(p => p.total >= 200) // [{...200}, {...350}] c) reduce: pedidos.reduce((acc, p) => acc + p.total, 0) // 700

    Não Modificação: Os métodos map, filter e reduce são imutáveis em relação ao array original. Eles sempre retornam novas estruturas de dados ou um novo valor, sem alterar o array que os chamou.
 */