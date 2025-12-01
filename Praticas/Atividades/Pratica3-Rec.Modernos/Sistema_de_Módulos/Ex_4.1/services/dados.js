// Sistema_de_Modulos/Ex_4.1/services/dados.js

// Defina uma função e a exporte como export default [cite: 101, 102]
export default async function buscarDados() {
    console.log("... Buscando dados simulados ...");
    // Retorna uma Promise simulada [cite: 101]
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([10, 20, 30, 40, 50]);
        }, 1000);
    });
}