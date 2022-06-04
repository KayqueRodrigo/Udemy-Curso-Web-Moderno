//Exemplo de ATRIBUIÇÃO POR REFERÊNCIA
const a = {nome: 'Teste'}//contante a recebe um objeto
console.log(a)
const b = a//atribuição do que tem dentro da constante a. Porém o a não tem {nome: 'Teste'} dentro dela e sim o endereço de memoria, apontando para 
//o objeto, então o que b esta recebendo é o msm endereço que a aponta. passando a e b apontando para o msm endereço
//....
b.name = 'opa'//se mudarmo b o a percebera a mudança e vise-versa
console.log(a)
console.log(b)
//Exemplo de ATRIBUIÇÃO POR VALORE
let c = 3//a variaveo c recebe um dado tipo primitivo 3
console.log('valor de c: ', c)
let d = c
d++
console.log('valor de c:', c)
console.log('valor de d:', d)

/**
 * CONSEITO DE NULL & UNDEFINED
 * 
 * isso passa por um conseito chamado de:
 * Atribuição por valor 
 * %
 * Atribuição por referência
 * Exemplificados acima
 * Quando trabalhamos co tipos primitivos fazemos uma atribuiçõa de valor 
 * Quando trabalhamos com objetos ou tipo não primitivos fazemos uma atribuiçõa de referência
 */

//Conseito de null
let valor //não inicializada
console.log(valor)//Resultado no console undefined

valor = null //ausência de valor
console.log(valor)
//console.log(valor.toString())//Erro!

const produto = {}
console.log(produto.preco)//note a diferência de null e undefined
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evite atribuir de forma explicita undefined, deixe a propria linguagem definir.
//E quando queiser zerar uma variavel use null ou algum valore padrão(criado por vc msm) para isso como 0
console.log(!!produto.preco)
//delete produto.preco //Se quiser tirar o atributo de um objeto use delete
console.log(produto)

produto.preco = null //sem preco
console.log(!!produto.preco)//verifica se tem algum falor 
console.log(produto)

//por fim o objetivo dessa aula foi:
//quando vc quiser zerar uma variavel use null ou um valore qualquer como padrão
//e deixe com a propria linguagem a definição de undefined
