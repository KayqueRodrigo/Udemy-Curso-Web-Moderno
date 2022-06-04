//Armazenando uma função em uma vaiavel
const imprimirSoma = function (a, b) { //criamos uma função anonima pq ela não tem nome
    console.log(a +b)
}

imprimirSoma(2, 3)

//Armazenando uma função arrow '=>' em uma variavel 
 const soma = (a, b) => {
     return(a + b)
 }

 console.log(soma(2, 2))

 //Retorna implicito
 const subtracao = (a, b) => a - b
 console.log(subtracao(5, 3))
 console.log(subtracao(3, 5))