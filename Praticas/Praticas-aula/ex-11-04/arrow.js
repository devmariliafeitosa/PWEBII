sum(3, 5);

// tradicional
function sum(a, b) {
    return a + b;
}


//Function Expression
//Function Anonima
//Functions Expressions não são elevadas ao topo do escopo (hoisting)
const sumFe = function(a, b) {
    return a + b
}

const sumArrow = (a, b) => a + b;