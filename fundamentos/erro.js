function tratarErroELancar(erro) {
    //throw new Error('...')
    throw 10
}

function imprimirNomeGratado(obj) {
    try{
        console.log(obj.nome.toUpperCase() + '!!!') 
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('fim')
    }
}

const obj = { neme: 'Raquel'}
imprimirNomeGratado(obj)