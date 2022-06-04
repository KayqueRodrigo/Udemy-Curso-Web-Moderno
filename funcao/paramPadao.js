// estrategia 1 para gerar valor padrão
function soma1(a, b, c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}
console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0))//O problema que temos fazer desta forma é q o 0 retorna falso
//Então ira usar o 1 como atributo e o resultado ao invés de retornar 0 retonará 3

//Estratigias 2, 3 e 4 para gerar valores padrões 
function soma2(a, b, c){
    a = a !== undefined ? a : 1
    //O 1 representa o index cuidado caso use essa forma para colocar o index correto para cada parâmetro
    b = 1 in arguments ? b : 1
    //essa forma confere tbm se é um numero e considero a molhor forma para usar
    c = isNaN(c) ? 1 : c

    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0), soma2(1, 1, 'teste'))

// valor padrão do es2015
function soma3(a =1, b = 1, c = 1) {
    return a + b + c
}

console.log(soma3(), soma3(0, 0, 0), soma3(1, 2, 'teste'))