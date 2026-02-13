// Assíncrono e Não Bloqueante
import { readFile } from 'node:fs';

readFile('Praticas/Praticas-aula/ex-12-09/arquivo.txt', 'utf-8', (err, dados) => {
if (err) {
console.error('Erro na leitura:', err);
return;
}
console.log("Leitura concluída:", dados);
});