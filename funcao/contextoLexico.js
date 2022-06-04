const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec()

//pq isso acontece?
//uma função alem de tudo o que ela recebe internamente ele tem conciencia em qual local ela foi definida
//a função carrega com sigo o contexto em qual la foi declarada e isso em haver com (closures) 