/**As 2 razões para que a função arrow fosse criada foi 
 * 1 - Ter menos cód
 * 2 - THIS associado ao contexto em que a função foi escrita 
*/
//Função Tradicional
let dobro = function dobro(a) {
    return 2 * a
}
//Função arrow
dobro = (a) => {
    return 2 * a
}
//Uma característica da função arow é que ela sempre é anonima se quisermos chama-lá devemos armazenala em um let, var ou const
//Outar forma de excrever uma arraw
dobro = a => 2 * a //Aqui temos um return implicito

console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' //Possui um parametro. mas o _ substitui ()
console.log(ola())