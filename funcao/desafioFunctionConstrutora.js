class Pessoa {
    constructor(nome){
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('Kayque')
p1.falar()
//TRanforme essa classe em uma função construtora

function Pessoa1 (nome) {
    this.nome = nome

    this.exibir = () => console.log(`Meu nome é ${this.nome}`)
}

const p2 = new Pessoa1('kayque')
p2.exibir()

const p3 = new Pessoa1('Gabriela')
p3.exibir()