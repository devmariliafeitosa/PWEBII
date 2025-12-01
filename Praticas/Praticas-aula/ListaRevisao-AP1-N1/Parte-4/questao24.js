/**
 * Transformação funcional de dados no DOM Crie um conjunto de funções puras e utilize map, filter e reduce para processar a seguinte lista de vendas: [...]
 */

const vendas = [ /* ... dados ... */ ];

// Funções Puras
const filterVendasPagas = v => v.filter(i => i.status === 'pago');
const mapTotalItem = v => v.map(i => i.preco * i.quantidade);
const reduceTotalGeral = t => t.reduce((acc, total) => acc + total, 0);

// Pipe (Composição)
const pipe = (...fns) => x => fns.reduce((acc, fn) => fn(acc), x);

const calcularReceita = pipe(
    filterVendasPagas,
    mapTotalItem,
    reduceTotalGeral
);

// Lógica de Evento (Impura)
document.querySelector('#calcularReceitaTotal').addEventListener('click', () => {
    const total = calcularReceita(vendas); // Processamento puro
    
    // Efeito Colateral
    document.querySelector('#totalGeral').textContent = 
        `Receita Total: R$ ${total.toFixed(2)}`;
});