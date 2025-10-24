# Respostas Teóricas - Lista 01

## Questão 1: Tipagem de Dados

**a) O que caracteriza uma linguagem de tipagem estática? [cite_start]Como a verificação de tipos ocorre em linguagens com tipagem estática? [cite: 11]**

Uma linguagem de tipagem estática é caracterizada pela verificação de tipos de variáveis (ex: se uma variável é `int`, `string`, `bool`) em **tempo de compilação**. Isso significa que o programador deve, muitas vezes, declarar explicitamente o tipo de cada variável, e o compilador verifica se todas as operações entre essas variáveis são válidas *antes* do programa ser executado.

[cite_start]**b) Quais são os principais benefícios da tipagem estática em termos de performance e segurança? [cite: 12]**

* **Segurança:** Erros de tipo (como tentar somar um número com um texto de forma não intencional) são detectados em tempo de compilação, impedindo que o programa rode com bugs. Isso torna o código mais robusto e previsível.
* **Performance:** Como o compilador já sabe o tipo exato de cada variável, ele pode gerar um código de máquina mais otimizado, sem a necessidade de verificar os tipos em tempo de execução.

**c) Como funciona a tipagem dinâmica em relação à verificação de tipos em tempo de execução? [cite_start]Quais são os principais desafios de performance enfrentados por linguagens de tipagem dinâmica? [cite: 13, 14]**

Em linguagens de tipagem dinâmica, a verificação de tipo ocorre em **tempo de execução**. A variável não tem um tipo fixo; o tipo é associado ao *valor* que ela contém. Uma mesma variável pode guardar um número em um momento e um texto em outro.

O principal desafio de performance é o *overhead* (sobrecarga) de ter que verificar os tipos durante a execução. O interpretador precisa constantemente checar se uma operação é válida para os tipos atuais das variáveis, o que torna a execução mais lenta comparada à estática.

[cite_start]**d) Quais são as diferenças entre linguagens com tipagem forte e fraca? [cite: 15]**

* **Tipagem Forte:** Não permite que tipos diferentes interajam de forma implícita. Por exemplo, em Python (forte), tentar somar `10 + "5"` resulta em um erro, pois o programador deve converter explicitamente um dos tipos.
* **Tipagem Fraca:** Tenta "adivinhar" a intenção do programador e realiza coerções (conversões) automáticas de tipo. Em JavaScript (fraca), `10 + "5"` resulta na string `"105"`, pois o JavaScript converte o número `10` para string e concatena.

**e) Como linguagens híbridas conseguem combinar características de tipagem estática e dinâmica? [cite_start]Qual o papel da inferência de tipos em linguagens de tipagem estática? [cite: 16, 17]**

Linguagens híbridas (como TypeScript) geralmente funcionam sobre uma linguagem dinâmica (JavaScript), mas adicionam uma camada de verificação estática opcional. O programador pode escolher quais partes do código terão tipos estritos.

A **inferência de tipos** é um recurso de linguagens estáticas modernas onde o compilador "deduz" o tipo de uma variável com base no valor atribuído a ela (ex: `let x = 10;` o compilador infere que `x` é do tipo `int`), eliminando a necessidade de declarações explícitas (`let x: int = 10;`) e tornando o código mais limpo.

[cite_start]**f) Como a linguagem JavaScript lida com a tipagem de dados? [cite: 18]**

O JavaScript é uma linguagem de **tipagem dinâmica** e **tipagem fraca**.
* **Dinâmica:** Tipos são verificados em tempo de execução. Uma variável pode mudar de tipo livremente (ex: `let x = 100; x = "olá";` é perfeitamente válido).
* **Fraca:** Realiza muita coerção automática de tipos, o que pode levar a resultados inesperados (ex: `10 == "10"` é `true`, mas `10 === "10"` é `false`).