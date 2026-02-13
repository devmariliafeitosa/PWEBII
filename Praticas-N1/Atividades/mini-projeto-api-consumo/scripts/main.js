
import { fetchApiData } from './api.js';
import { showLoadingState, showErrorState, renderData } from './ui.js';

const button = document.getElementById('fetchDataButton');

async function handleFetchData() {
   
    showLoadingState();

    try {
       
        const data = await fetchApiData();
        
       
        renderData(data);

    } catch (error) {
        
        showErrorState(error.message);
    }
}

// Adiciona o evento de click ao botão
button.addEventListener('click', handleFetchData);

// Opcional: Você pode chamar handleFetchData() aqui para carregar os dados
// automaticamente ao carregar a página, se desejar.
// window.onload = handleFetchData;