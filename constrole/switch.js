//O que temos visto até aqui não tem haver com repedição 
//Tem haver com seleção de cod que será executado

//Diferente do if Else if. O switch e um Estrutura de Controle de multipla seleção. Ele pode executar mais de uma sentença de cod

const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {//Diferente do if else if. A espreção não retorna F ou V e sim um valor 
        case 10://Aqui o case compara se o valor recebido se iguala a os case. e executa todos que forem iguais
        case  9:
            console.log('Quadro de honra')
            break //Quando o programa é executado ao entrar no case ele imprime todas as sentenças dos cases abaixo
            //Para que isso não aconteça precisamos usar a palavra reservada break
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default://funciona como se fosse o else. ele é impresso no conselo quando nenhum dos outro batem com o valor informado 
            console.log('Ops: Tivemos algum erro')//O default não precisa estar no final pode estar em qualquer lugar do da estrutura. Só nao pode esquecer de colocar o break
    }
    console.log('--------')
}

imprimirResultado(2.3)
imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(-1)
imprimirResultado(11)




//o SWITCH não recebe todos os tipos de dados. Por isso devemos nos atentar nós valores que estamos passando