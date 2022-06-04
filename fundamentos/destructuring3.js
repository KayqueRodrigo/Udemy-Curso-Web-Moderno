//function rand({ min = 0, max = 1000} = {}) {//podemos fazer assim caso receba algum console sem parametro para q não gere erro
function rand({ min = 0, max = 1000}) {//Criamos uma função que recebe parametros atraves do operador destructuring
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj  = { max: 50, min: 40}
console.log(rand(obj))
console.log(rand({ min: 955}))
console.log(rand({}))
//console.log(rand())//teremos um erro pois nõa passamos nenum objeto
