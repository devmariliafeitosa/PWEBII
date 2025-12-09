// Sistema_de_Modulos/Ex_4.1/app.js
import { calcularMedia, VALOR_PI } from "./utils/calculadora.js";
import fetchDados from "./services/dados.js"; 

async function main() {
    console.log("\n--- Execução do Módulo Principal ---");

    const dados = await fetchDados();
    const media = calcularMedia(dados);

    console.log(`Dados processados: [${dados.join(', ')}]`);
    console.log(`Média Calculada: ${media.toFixed(2)}`);
    console.log(`Constante PI: ${VALOR_PI}`);
}

main();