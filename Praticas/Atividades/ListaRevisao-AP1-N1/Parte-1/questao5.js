/**
 * Sobre avaliação de curto-circuito e renderização condicional: Implemente uma função getUserNameOrLoginCTA(user) que retorna user.name se existir; caso contrário, retorna "<a href='/login'>Entrar</a>", utilizando ||. Mostre um exemplo com valor falsy. Por fim, explique o comportamento e a diferença entre && e || com short-circuiting.
 */

function getUserNameOrLoginCTA(user) {
    return user.name || "<a href='/login'>Entrar</a>";
}

const userFalsy = {name: ""}; 
console.log(getUserNameOrLoginCTA(userFalsy));

/**
 * Short-Circuiting
 * 
 * || (OR): Retorna o primeiro valor truthy que encontrar. Se o lado esquerdo for truthy, ele para e retorna esse valor. Usado para fallback(valor default).
 * 
 * && (AND): Retorno o primeiro valor falsy que encontrar. Se o lado esquerdo for truthy, ele continua e retorna o valor da direita.Usado para execução condicional.
 */