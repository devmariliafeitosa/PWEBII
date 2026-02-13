// Exercício 2.2: Processamento de Telemetria de Dispositivos (?. e ??)

// 1. Objetos simulando telemetria
const NIVEL_INDISPONIVEL = -1;

const dispositivo1 = { info: { bateria: { nivel: 85 } } };
const dispositivo2 = { info: null };
const dispositivo3 = { info: { bateria: { nivel: 0 } } };

// 2. e 3. Combinação de Optional Chaining (?. ) e Nullish Coalescing (??)
const nivel1 = dispositivo1.info?.bateria?.nivel ?? NIVEL_INDISPONIVEL;
const nivel2 = dispositivo2.info?.bateria?.nivel ?? NIVEL_INDISPONIVEL;
const nivel3 = dispositivo3.info?.bateria?.nivel ?? NIVEL_INDISPONIVEL;

console.log(`\nNível Dispositivo 1: ${nivel1}`); // Saída: 85
console.log(`Nível Dispositivo 2: ${nivel2}`); // Saída: -1
console.log(`Nível Dispositivo 3: ${nivel3}`); // Saída: 0

// 4. Explicação
console.log("\nExplicação:");
console.log(`- **Dispositivo 3** retorna **0** porque o operador **??** só substitui o valor se for estritamente 'null' ou 'undefined'. O zero (0) é mantido, pois é um valor válido de bateria.`);
console.log(`- **Dispositivo 2** retorna **-1** porque 'dispositivo2.info' é 'null'. O **?.** detecta o 'null', para a avaliação e retorna 'undefined'. O **??** vê o 'undefined' e o substitui pelo valor padrão -1 (indisponível).`);