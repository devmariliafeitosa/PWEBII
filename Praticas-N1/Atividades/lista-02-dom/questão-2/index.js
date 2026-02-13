const formCadastro = document.querySelector("#form-cadastro");

formCadastro.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const valorPor15Min = parseFloat(document.querySelector("#input-min").value);
    const tempo = parseInt(document.querySelector("#input-temp").value);

    const blocos = Math.ceil(tempo / 15);
    const valorTotal = blocos * valorPor15Min;

    const resultado = document.querySelector("#teste");
    resultado.innerHTML = `Tempo total: ${tempo} min
        <br>Valor total: R$ ${valorTotal.toFixed(2)}`;
});
