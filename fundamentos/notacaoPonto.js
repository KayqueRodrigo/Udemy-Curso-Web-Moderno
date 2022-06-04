console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bola'
//obj['nome'] = 'Bola2'
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome//O this e o Ponto servem para deixar visivel
    this.exec = function() {
        console.log('Exec...')
    }
}

const obj2 = new Obj('Mesa')
const obj3 = new Obj('Cadeira')
console.log(obj2.nome)
console.log(obj3.nome)
Obj3.exec()
//A notação '.' é a forma que temos de acessar os menbros
//Usamos o ponto para acessarmos os objetos viziveis dentro das funções 
