//Factory simples
function CriarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva' 
    }
}

//Factury é uma fução que retorna um novo objeto(factury tem o objetivo de fabricar uma instância de um objeto)

//Feito antes que o prof mostra-se 
function CriarProduto (nome, preco) {
    return {
        nome,
        preco
    }
}

console.log(CriarProduto('caderno', 10))

