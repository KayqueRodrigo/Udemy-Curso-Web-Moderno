// a ideia par nome/valor esta presente tbm quando declaramos uma variavel
const saudacao = 'Opa'// definimos como contexto léxico

function exec() {
    const saudacao = 'Falaaa' //contexto léxico 2
    return saudacao //Percebe que é o msm nome usado acima. porém não gerara conflito pois estão em contextos diferentes
}
 
//Objetos são grupos aninhados de pares nome/valor 
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua muito legal',
        numero: 123,
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)
console.log(cliente.endereco)