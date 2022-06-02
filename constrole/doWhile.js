function getInteiroAleatorioEntre (min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor) 
}

let opcao = -1

do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
} while (opcao != -1)

console.log('Até a próxima')

//a para o while é que o Do While execurara pelo menus uma vez mesmo que o valore seja verdadeira