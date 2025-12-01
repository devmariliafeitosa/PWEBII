/**
 * Sobre callback de evento: Explique as etapas de manipulação de eventos (seleção → binding → callback) e escreva um trecho de código que: seleciona #formLogin, previne o submit, valida que o campo #email não está vazio e adiciona/remove classe error a algum elemento da página.

R:

Etapas

    Seleção: Encontrar o elemento (o alvo).

    Binding: Ligar o evento (click, submit, etc.) ao elemento usando addEventListener.

    Callback: A função que executa quando o evento ocorre.
 */

const form = document.querySelector('#formLogin');
const email = document.querySelector('#email');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // Previne o submit
  
  const estaVazio = email.value.trim() === "";

  if (estaVazio) {
    email.classList.add('error');
  } else {
    email.classList.remove('error');
    // Lógica de envio
  }
});