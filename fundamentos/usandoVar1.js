{
    {
        {
            {
                var sera = 'Será?'
                console.log(sera)
            }
        }
    }
}
console.log(sera)//Em outras linguagem a variavel sera apenas ficaria visivel dentro do bloco. em js quando definida com var tbm fica visivel fora do bloco

function teste(){ //no caso de uma variavel que esta dentro de um bloco de uma funçõa não é possivel acessar fora do bloco a variavel
    var local = 123
}
//quando criamos uma var fora de uma função ela é considerada uma variavel global
//esta aula foi falado do window que é o objeto global do navegador

//DEvemos evitar trabalhar/criar variaveis globais 

//Em javaScript de modo geral temos dois timos de escopo de variavel
//a de nivel global
//a nivel de função que fica apenas visivel dentro da função 
