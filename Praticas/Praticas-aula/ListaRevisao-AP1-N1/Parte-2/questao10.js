/**
 * Sobre manipulação de DOM: Complete as lacunas com os métodos corretos e escreva um código mínimo que: cria um <li>, adiciona texto e insere no final de uma <ul id="lista">:

    Criar: document._________('li')

    Inserir dentro de um elemento já selecionado: element._________(child)

    Remover um nó filho: parent._________(child)

R:

    Criar: document.**createElement**('li')

    Inserir dentro de um elemento já selecionado: element.**appendChild**(child)

    Remover um nó filho: parent.**removeChild**(child)
 */

    // Código Mínimo
const li = document.createElement('li');
li.textContent = "Novo Item";
document.querySelector('#lista').appendChild(li);