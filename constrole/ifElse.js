const imprimirResultado = function(nota) {
    if(nota >= 7) {
        console.log('Aprovado')
    } else {
        console.log('Reprovado')
    }
}

imprimirResultado(10)
imprimirResultado(5)
imprimirResultado('opa!!')//Cuidado!!! Quando se trabalha com linguagens baixamnete tipadas devemos tomar cuidado 
//para não recebermos valores errados. Por isso devemos criar formas de corrigir esses erros
