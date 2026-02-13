const formCadastro = document.querySelector("#form-cadastro");

formCadastro.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const med = document.querySelector("#input-med").value;
    const preco = parseFloat(document.querySelector("#input-preco").value);

    const totalSemDesconto = preco * 2;

    const centavos = totalSemDesconto % 1;
    const desconto = centavos.toFixed(2);

    const totalComDesconto = (totalSemDesconto - centavos).toFixed(2);

    const pTeste = document.querySelector("#teste");
    pTeste.innerHTML = `
        Promoção de <strong>${med}</strong>!<br>
        2 unidades = R$ ${totalSemDesconto.toFixed(2)}<br>
        Desconto de R$ ${desconto}<br>
        Total com desconto: <strong>R$ ${totalComDesconto}</strong>
    `;
});
