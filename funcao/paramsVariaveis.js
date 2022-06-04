//O arguments é uma Array vazio(quando nenhum parametro é passado) que todas as funções tem disponivel
function soma(){
    let soma = 0
    for (i in arguments){
        soma += arguments[i]
    }
    return soma
}


console.log(soma(0))
console.log(soma(1))
console.log(soma())
console.log(soma(1.1, 2.3, 6.9))
console.log(soma(5, 6.9, 'Teste'))
console.log('a', 'b', 'c')