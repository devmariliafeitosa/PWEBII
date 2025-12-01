const pTeste = document.getElementById("teste");

pTeste.textContent = "Alice diva!";

pTeste.style.color = "#000000";
pTeste.style.backgroundColor = "#FFB5C5";


// Gerenciamento de Evento
const btn = document.querySelector("#Btn");

btn.addEventListener("click", function() {
    pTeste.style.color = "#FFB5C5";
    pTeste.style.backgroundColor = "#000000";
});

//Formulário

const formCadastro = document.querySelector("#form-cadastro");

formCadastro.addEventListener("submit", function(evento){
    evento.preventDefault();

    const nome = document.querySelector("#input-nome").value;
    const email = document.querySelector("#input-email").value;

    const resultado = document.createElement("p");
    resultado.innerHTML = `Cadastro Realizado com Sucesso!
                    <br>Nome: ${nome}
                    <br>Email: ${email}`;

    document.body.appendChild(resultado)
});
