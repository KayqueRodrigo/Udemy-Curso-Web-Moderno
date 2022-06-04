function Pessoa() {
    this.idade = 0

    setInterval(() => {
         this.idade++
         console.log(this.idade)
    }, 1000)
}//Apesar de pessoa ser chamado apartirr de um temporizador por estarmos usando uma arroe function funcionara


new Pessoa