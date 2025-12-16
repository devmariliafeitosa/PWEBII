
const dataContainer = document.getElementById('dataContainer');
const statusMessage = document.getElementById('statusMessage');
const button = document.getElementById('fetchDataButton');


export function showLoadingState() {
    button.disabled = true;
    dataContainer.innerHTML = ''; 
    statusMessage.innerHTML = '<div class="spinner"></div> Aguardando resposta da API...';
    statusMessage.className = 'message';
}

/**
 * Exibe uma mensagem de erro e reativa o botão.
 * @param {string} message A mensagem de erro a ser exibida.
 */
export function showErrorState(message) {
    button.disabled = false;
    dataContainer.innerHTML = '';
    statusMessage.innerHTML = `<strong>Erro:</strong> ${message}`;
    statusMessage.className = 'message error';
}

/**
 * Renderiza os dados da API em uma lista/tabela e reativa o botão.
 * @param {Array<Object>} data Os dados retornados da API.
 */
export function renderData(data) {
    button.disabled = false;
    statusMessage.innerHTML = '';
    statusMessage.className = 'message';

    if (!data || data.length === 0) {
        dataContainer.innerHTML = '<p>Nenhum dado encontrado para exibição.</p>';
        return;
    }

   
    const list = document.createElement('ul');
    data.slice(0, 5).forEach(item => { 
        const listItem = document.createElement('li');
       
        listItem.innerHTML = `<strong>ID ${item.id}:</strong> ${item.title}`; 
        list.appendChild(listItem);
    });

    dataContainer.innerHTML = '<h2>Dados Carregados (5 Primeiros):</h2>';
    dataContainer.appendChild(list);
}