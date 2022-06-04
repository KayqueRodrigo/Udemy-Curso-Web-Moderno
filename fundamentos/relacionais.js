console.log('01)', '1' == 1)//Verifica se apenas o valor é igual
console.log('02)', '1' === 1)//verifica tbm se o tipo de dado é igual
console.log('03)', '1' != 1)//Verifica só o dado
console.log('04)', '1' !== 1)//Verifica tbm o tipo

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 === d2)//Neste caso não tem diferença usar 3 o 2 iguais pois ele esta comparando o endereço de memoria
console.log('10)', d1 == d2)
console.log('11)', d1.getTime() === d2.getTime())

console.log('12)', undefined == null)
console.log('13)', undefined === null)
