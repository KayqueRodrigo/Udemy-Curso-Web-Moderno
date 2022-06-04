var numero = 1//se substituirmos o var para let o resultado será o msm
{
    let numero = 2//Quando usamos let e o msm esta dentro de um bloco essa variavel let fica apenas vizivel dentro do bloco
    console.log('dentro: ', numero)
}
console.log('fora:', numero)
//Let vai procurar a variavel numero se caso não tivesse iria procurar fora do bloco

