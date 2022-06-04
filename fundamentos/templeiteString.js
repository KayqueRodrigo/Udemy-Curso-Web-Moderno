//criado para resolver alguns problemas. por exemplo
//quando é necessario concatenar muitas strings e variaveis. ajudando em deixar o cod mais legivel e deixando mais pratico

const nome = 'Rebeca'
const concatenacao = 'Olá' + nome + '!'

const tamplete = `
    Olá
    ${nome}!`//observe que ele suporta quebre de linha. e que recebe as variaveis da forma que esta no exemp  e tbm respeita os espaços e quebra de linha
    //onde ele interpola ou interpreta o a variavel 

console.log(concatenacao, tamplete)

//expressoes
console.log(`1 + 1 = `)//desta forma ele não ira somar apenas exibir isso no console
console.log(`1 + 1 = ${1 + 1}`)//desta forma ele interpreta o que esta dentro das chaves. apenas o que esta dentro das chaves que ele tenta interpreta 

//usando funçõe com templete scring
const up = texto => texto.toUpperCase()
//console.log(up)//coloquei esse console por curriosidade
console.log(`Ei... ${up('cuidade')}!`)

