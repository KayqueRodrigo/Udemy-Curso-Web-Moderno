//Construtor um js é bem parecido com o conseito de class em java
function Carro(velocidadeMaxima = 200, delta = 5) {
    //Atributo privado(que pertence apenas ao escopo desta funcção)
    let velocidadeAtual = 0

    // metodo publico (isso é feito usando o this)
    this.acelerar = function () {
        if (velocidadeAtual <= velocidadeMaxima) {
            velocidadeAtual += delta
        }else {
            velocidadeAtual= velocidadeMaxima
        }
    }

    // metodo publico
    this.getVelocidadeAtual = function () {//Será responsavel por pegar a velocidade atual
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro)
console.log(typeof ferrari)
