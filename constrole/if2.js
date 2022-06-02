function test1(num){
    if(num > 7)//Em js não é obrigatorio o uso de chaves no if
        console.log(num)//apenas está sentença será considrana no if
        console.log('Final')//Essa não esta relacionada a contição por isso sempre ira aparecer na tela independente se for V ou F
}

test1(6)
test1(8)

function test2(num) {
    if (num > 7); {//sempre o num será impresso independentemente se for V ou F pois a sentença de cod que esta associado a condição é os ;
        console.log(num)
    }
}

test2(6)
test2(8)