//Feimos um exemplo sem e com o uso de callback

const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//sem callback 
let notasBaixas1 = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}

console.log('Exemplo 1: ', notasBaixas1)

//Com callback
notasBaixas2 = notas.filter(function (notas){
    return notas < 7
})

console.log('Exemplo 2: ', notasBaixas2)

const notasBaixas3 = notas.filter(notas => notas < 7)

console.log('Exemplo 3: ', notasBaixas3)