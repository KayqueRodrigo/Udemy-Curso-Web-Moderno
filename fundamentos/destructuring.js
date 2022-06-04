// novo recurso do ES2015
//serve para remover um recurso/objeto de uma estrutura 
//Exemplos aseguir usando estruturas de objeto

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        legradouro: 'Rua ABC',
        numero: 1000
    }
}
const { nome, idade} = pessoa //Passamos a ter no programa duas variaveis a nome e idade
console.log(nome, idade)

const { nome: n, idade: i} = pessoa //Extraimos os valores nome e idade da estrutura e mudamos o nomes para n e i
console.log(n, i)
const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

const{endereco : {legradouro, numero, cep}} = pessoa // os valores que foram criados variaveis foram logradouro numero e cep. o endereço e pessoa reviram apenas para informar onde estão
console.log(legradouro, numero, cep)

//em objeto o destructuring usa {}


