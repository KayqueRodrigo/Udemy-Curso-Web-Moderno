/**
 * Array é um vetor uma estrutura unidimensional
 * Onde conseguimos agrupar multiplos valores de forma linear um atrás do outro
 * E esses valores tem apenas um indentificador
 * E conseguimos acessar os dados no Array através do index
 * No Java script o Array ele não tem tipo expecifico por ser de baixa tipagem 
 * e tbm não tem limite como em java que na sua criação de 
 * Array especificamos o seu tamanho em JS isso não aconstece
 * 
 */
 
const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])//desta forma conseguimos acessar os index especificados na passagem de parametro
//O que acontece se quisermos acessar um index que não existe
console.log(valores[5])//em muitas linguagens daria erro, mas em js teremos impresso no console 'undefined' 

valores[4] = 10//aqui nos estamos adcionando no index 4 do array o valor 10
console.log(valores)

console.log(valores.length)//nos informa quantos Elementos temos no Array começando de 1..

//Temos tbm uma função para adcionar novos elementos no Array
valores.push({id: 3}, false, null, 'teste')//msm que o array js aceite varios tipos de dados num, array. É bom sempre temos dados omogenios,apenas um tipo dentro de determinado array
console.log(valores)

console.log(valores.pop())//Retira o ultimo valor do array e exibe o msm no console
//outra forma é...
delete valores[0]//é expecificado o index do valor que quer deletar em assim é feito 
console.log(valores)

console.log(typeof valores)//um array em js é considerado um objeto


