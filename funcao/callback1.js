/*
Conseito Callback
Padroes de projeto observer é o mais usado na web 
pq Js domina a web e o Js é muito usado no Js 
as pessoas não usam muito o termo observer 
usm muito o termo callback

requesição http sincrona onde temos uma pagina que trava
requesição http asincrina via ajax

Callback são funçõe chamadas quando um evento acontece
*/

const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, index) {
    console.log(`${index + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)

fabricantes.forEach(function(fabricante){
    console.log(fabricante)
})