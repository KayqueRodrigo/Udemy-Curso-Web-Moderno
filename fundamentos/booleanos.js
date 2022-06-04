//Exemplos literais.... aqueles aleatórios

let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(isAtivo)//aqui ele apenas imprimira o numermo 1
console.log(!!isAtivo)//aqui ele imprimira se e true ou false. o ! é uma negação
console.log(!isAtivo)//aqui ele impremira o oposto por exemplo se for falso imprimira true
//outro exemplo da !
console.log(!true)

console.log('Os verdadeiros.....')
console.log(!!3)
console.log(!!-3)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!'texto')
console.log(!!(isAtivo = true))

console.log('Os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar....')
console.log(!!('' || null || 0 || ' '))//analisa o qu esta entre parentes que imprime se é true ou false



let nome = ''
console.log(nome || 'Deconhecido')//exibe o primeiro que for verdadeiro(true)
