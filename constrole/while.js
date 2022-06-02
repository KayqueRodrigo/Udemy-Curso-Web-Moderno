//Veremos agora as estrururas de repetição
//O while é muito usado quando temos uma quantidade indetermidada de repetições
//por exemplo o enquanto(while) o usuario não clicar esc continuarei executando

function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

while (opcao != -1) {//Como no if a expressão retorna V ou F. E o laço executara enquanto for V quando for F será finalizado o laço
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolida foi ${opcao}.`)
}

console.log('Até a próxima')