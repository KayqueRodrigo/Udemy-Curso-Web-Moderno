function CriarProduto(nome, preco) {
    return {
        nome,
        preco,
        deconto: 0.1
    }
}

console.log(CriarProduto('notebook', 2999,87))
console.log(CriarProduto('geladeira', 1598.60), CriarProduto('ipad', 3968.99))
