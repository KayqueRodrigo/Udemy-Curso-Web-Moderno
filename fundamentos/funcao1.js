/*o que é uma função?*
*é um trecho/bloco de cod que voce ou outra pesso criou 
*onde você pode reutilizar apenas usando o nome dada a essa função
*A funçao quando recebe o seus parametros de intrada e executa o bloco de cod.
mas tbm temos funções que não recebem ou nõa precisam receber parametros.
*uma função pode não retornar dados ou pode retornar 
*
*/

//criando uma função sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(5, 5)
imprimirSoma(2)//não dara erro. esim NaN
imprimirSoma(2, 4, 5, 6, 7, 33, 68)//não vai dar erro. O Js ira pegar os dois valores somar e iguinorar o restante
imprimirSoma()//não dara erro. esim NaN

//função com retorno
function soma(a, b = 0) {
    return a + b
}

console.log(soma(2, 3))
console.log(soma(5))//como foi passado apenas um parametro ele considerara o 0 como segundo parametro

