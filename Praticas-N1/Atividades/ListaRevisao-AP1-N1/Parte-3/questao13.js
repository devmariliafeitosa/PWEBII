/**
 * Sobre funções puras: “Funções puras podem ler e alterar variáveis globais desde que retornem sempre o mesmo valor.” Avalie e justifique com um contraexemplo.

R: Falso.

    Justificativa: Funções puras não podem ler nem alterar (mutar) variáveis globais. Alterar estado global é um efeito colateral e ler estado global viola o determinismo (a saída dependerá do estado externo).

    Exemplo (Impuro): Se uma função lê let taxa = 0.1;, mas o valor de taxa muda globalmente, a função retorna valores diferentes para a mesma entrada.
 */