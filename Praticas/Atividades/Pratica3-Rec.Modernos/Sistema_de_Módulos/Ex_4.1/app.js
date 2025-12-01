// Sistema_de_Modulos/Ex_4.1/app.js

// Importe a função e a constante nomeadas usando o caminho relativo correto [cite: 105]
import { calcularMedia, VALOR_PI } from "./utils/calculadora.js";

// Importe a função default usando o caminho relativo correto [cite: 106]
import fetchDados from "./services/dados.js"; // 'fetchDados' é o nome local que você escolhe

async function main() {
    console.log("\n--- Execução do Módulo Principal ---");
    
    // Obter os dados [cite: 108]
    const dados = await fetchDados();

    // Calcular a média de um array de números [cite: 109]
    const media = calcularMedia(dados);

    // Imprimir o resultado [cite: 110]
    console.log(`Dados processados: [${dados.join(', ')}]`);
    console.log(`Média Calculada: ${media.toFixed(2)}`);
    console.log(`Constante PI: ${VALOR_PI}`);
}

main();