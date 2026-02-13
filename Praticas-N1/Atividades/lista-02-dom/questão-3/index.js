const formCadastro = document.querySelector("#form-cadastro");

formCadastro.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const produto = document.querySelector("#input-prod").value;
    const preco = parseFloat(document.querySelector("#input-preco").value);


    const pTeste = document.querySelector("#teste");
    pTeste.innerHTML = `
       Promoção de <strong>${produto}</strong>!<br>
        2 unidades = R$ ${(preco* 2).toFixed(2)} + 1 unidade por: R$ ${(preco / 2).toFixed(2)}<br>
        Total com desconto: <strong>R$ ${(preco * 2 + preco / 2)}</strong>
    `;
});
