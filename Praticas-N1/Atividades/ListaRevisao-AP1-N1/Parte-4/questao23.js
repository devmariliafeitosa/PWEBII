// Lista dinâmica com delegação de evento (event delegation) Crie uma mini “Lista de Filmes Favoritos”: [...]

let filmes = [];
const ul = document.querySelector('#listaFilmes'); 

// Delegação de Eventos (simplificada)
function addDelegatedEventListener(parent, type, selector, handler) {
    parent.addEventListener(type, (e) => {
        if (e.target.matches(selector)) {
            handler.call(e.target, e);
        }
    });
}

// Lógica de Renderização e Estado
const render = (arr) => { /* ... cria <li> e botão 'btn-remover' ... */ };
const adicionar = (arr, item) => [...arr, item];
const remover = (arr, item) => arr.filter(f => f !== item);

// Adicionar Filme
document.querySelector('#btnAdicionar').addEventListener('click', () => {
    const nome = document.querySelector('#inputFilme').value;
    filmes = adicionar(filmes, nome); 
    render(filmes);
});

// Delegação para Remover
addDelegatedEventListener(ul, 'click', '.btn-remover', function() {
    const nome = this.parentElement.textContent.replace(' Remover ', '');
    filmes = remover(filmes, nome);
    this.parentElement.remove(); 
});

// Filtro (usando filter() no array)
document.querySelector('#inputFiltro').addEventListener('input', (e) => {
    const termo = e.target.value.toLowerCase();
    const filtrados = filmes.filter(f => f.toLowerCase().includes(termo));
    // Esconde ou re-renderiza 'filtrados'
    render(filtrados); 
});

/**
 * Vantagem da Delegação: Melhora a performance usando apenas um listener no <ul> em vez de um em cada <li>. Reduz o acoplamento porque novos elementos são automaticamente cobertos pelo listener do pai.
 */

