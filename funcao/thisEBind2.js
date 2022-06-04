function Pessoa() {
    this.idade = 0 //Criamos usando o this pra termos acesso global a essa propriedade
    
    const self = this
    setInterval(function (){
         self.idade++
         console.log(self.idade)
    }/*.bind(this)*/, 1000)//dispara outra função apartir de um determinado intervalo no caso 1000 mlesegundos
}//Pq foi usado o THIS dentro de bind e não Pessoa ou idade?

new Pessoa//instanciando