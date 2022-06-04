

const pessoa = {
    saudacao : 'Bom dia...',
    falar() {
        console.log(this.saudacao)//Usamos o this para podermos acessar o objeto caso contrario a função falar não vai encontrar 
    }
}

pessoa.falar()
const falar = pessoa.falar
falar()// Conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa)//bind usado para amarrar determinado objeto
falarDePessoa()