// Sistema_de_Modulos/Ex_4.1/utils/calculadora.js

// Defina uma constante e a exporte nomeadamente [cite: 98]
export const VALOR_PI = 3.14159; 

// Defina uma função e a exporte usando export nomeado [cite: 97]
export function calcularMedia(array) {
    if (array.length === 0) return 0;
    const soma = array.reduce((acc, current) => acc + current, 0);
    return soma / array.length;
}