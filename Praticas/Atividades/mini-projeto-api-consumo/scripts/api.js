
const API_URL = 'https://jsonplaceholder.typicode.com/posts'; // Exemplo: Posts

/**
 * Realiza uma requisição assíncrona à API.
 * @returns {Promise<Array<Object>>} Uma Promise que resolve com os dados da API.
 * @throws {Error} Se a requisição falhar ou a resposta não for 200 OK.
 */
export async function fetchApiData() {
    try {
       
        const response = await fetch(API_URL);

       
        if (!response.ok) {
          
            throw new Error(`Erro de HTTP: ${response.status}`);
        }

      
        const data = await response.json();
        
        
        return data;
    } catch (error) {
        
        console.error("Erro ao buscar dados da API:", error);
        throw new Error("Não foi possível carregar os dados. Verifique sua conexão ou a URL da API.");
    }
}