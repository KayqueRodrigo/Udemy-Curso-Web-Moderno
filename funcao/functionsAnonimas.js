const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function(a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(3, 5)
imprimirResultado(3, 5, soma)
imprimirResultado(3, 5, function (x, y){
    return x - y
})
imprimirResultado(3, 5, (x, y) => x * y)

const pessoa = {
    falar: function () {
        console.log('Olá')
    }
}

pessoa.falar()