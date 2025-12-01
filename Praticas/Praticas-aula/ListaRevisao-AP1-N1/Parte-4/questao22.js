/**
 * Validação funcional com DOM Implemente uma função pura validarProduto(p) que retorna {ok, erros}. No submit de um formulário, sem mutar o objeto p, crie uma nova estrutura de exibição de erros com document.createElement e insira com appendChild. Use classList.toggle('error', !ok). Explique por que isso reduz acoplamento.

R:
 */

// 1. Função Pura
function validarProduto(p) {
  const erros = [];
  if (!p.nome) erros.push("Nome não pode ser vazio");
  if (p.preco <= 0) erros.push("Preço deve ser maior que zero");
  if (!p.categoria) erros.push("Categoria não pode ser vazia");
  return { ok: erros.length === 0, erros };
}

// 2. Lógica de UI (Impura)
document.querySelector('#form').addEventListener('submit', (e) => {
  e.preventDefault();
  const p = { nome: 'x', preco: 0, categoria: '' }; // Simula coleta
  const resultado = validarProduto(p); // Chamada pura
  
  const container = document.querySelector('#erros'); 
  container.innerHTML = ''; // Limpa
  
  if (!resultado.ok) {
    const ul = document.createElement('ul');
    resultado.erros.forEach(erro => {
      const li = document.createElement('li');
      li.textContent = erro;
      ul.appendChild(li);
    });
    container.appendChild(ul);
  }
  
  document.querySelector('#form').classList.toggle('error', !resultado.ok);
});

/**
 * Redução de Acoplamento: A função validarProduto é pura e não se importa com o DOM. Se as regras de validação mudarem, a UI não é afetada. Se a UI mudar (ex: usar um toast para erros), a função pura permanece a mesma. Separação de Preocupações.
 */