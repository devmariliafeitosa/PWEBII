// Síncrono e Bloqueante
import { readFileSync } from 'node:fs';
// trava a execução até ler o arquivo
const dados = readFileSync('Praticas/Praticas-aula/ex-12-09/arquivo.txt', 'utf-8', (err, dados) => {
    if(err) {
        console.log("Erro ao ler arquivo");
        return;
    }
    console.log(dados);
});

console.log("Deveria aparecer após a leitura do arquivo")