//Neste arquivo temos exemplos de Estrutura de Controle

//Exemplo usando condicional
function soBoaNoticia (nota) {
    if (nota >= 7) {
        console.log('Aprovado com ' + nota)
    }
}

soBoaNoticia(8.6)
soBoaNoticia(5.1)

//Exemplo passando valor
function seForVerdadeEuFalo(valor) {
    if (valor) {//todos os valores que o js recebe dentro dos parentes do if ele converte para bool(true ou false)
        console.log('É verdade... ' + valor)//Só vai imprimir se o valor for convertido pra true 
    }
}

seForVerdadeEuFalo('')
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1, 6])
seForVerdadeEuFalo({})


