// Sistema_de_Modulos/Ex_4.1/services/dados.js

export default async function buscarDados() {
    console.log("... Buscando dados simulados ...");

    return new Promise(resolve => {
        setTimeout(() => {
            resolve([10, 20, 30, 40, 50]);
        }, 1000);
    });
}