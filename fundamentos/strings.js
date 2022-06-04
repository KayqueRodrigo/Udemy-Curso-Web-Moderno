//Existem 3 formas de delimitar uma string
//aqui veremos os 2 mais comuns que é: ""(aspas duplas) e ''(aspas simples)
const escola = "Cod3r"

console.log(escola.charAt(4))//exibi a letra que esta no index, nesse exemplo no 4. Començando com 0.
console.log(escola.charAt(5))//exibira nada. nem erro nem msg.
console.log(escola.charCodeAt())//exibe o valor que esta no index 3(no caso do exemplo) e o retorna de acordo com a tabela ASC/unicod
console.log(escola.indexOf("3"))//no caso do exemplo verifica se tem o valor 3. E exibe ela no console

console.log(escola.substring(1))//seguinifica que imprimira do index 1 por diante
console.log(escola.substring(0, 3))//nesse exemplo. o 0 é o inicio e o 3 é o final do index. esta função esta 
//imprimira do index 0 até o 2, pois o 3 não é exibido.

console.log('Escola '.concat(escola).concat("!"))//E podemos tbm concaternar com o +
console.log(escola.replace(3, 'e'))//substitui o valor armazenado no index 3 pelo e

console.log('Ana,Rute,Ester'.split(','))//gerara um array. será feito isso com base no separador apontado ','. 
//Transformando essa 1 estring em array, teremos os nomes em index e assim será melhor para acessarmos cada nome e gerenciar esses dados

