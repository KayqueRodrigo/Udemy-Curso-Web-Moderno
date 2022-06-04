/*Objeto em javascript é uma coleção de chave-valor 
*tem o nome do atributo, e passamos um valor para ele
*um objeto pode ter outro objeto dentro dele
*
*
**/

const prod1 = {}//com o uso de {} crimos objeto em js. pareciso com o array que usa []
prod1.nome = 'Celular última gerção'//o nome é o nome do atributo e após o = esta o valor
prod1.preco = 4998.90
prod1['Desconto interessante'] = 0.40//evitar atributos com espaço, mas é possível usar como no nosso exemplo

console.log(prod1)

//Outra forma de criar objeto
const prod2 = {
    nome: 'camisa polo',
    tamanho: 'M',
    preco: 79.90,
    ['desconto bacana']: 0.40, //evitar
    outroOjt: {                //exemplo de coleção de objetos
       Frete: 40.00,           //podemos usar funçoes tbm dentro dos objetos. veremos isso em aulas futuras
       exdeoutroobj: {
           imposto: 50.00
       }
    } 
}

console.log(prod2)
console.log(prod2.outroOjt)
console.log(prod2.outroOjt.exdeoutroobj)