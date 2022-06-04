const funcs = []

for (let i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}
funcs[2]()
funcs[8]()
//quando abordarmos mais sobre função entenderemos pq isso acontece
//essa aula teve mais a intenção de mostrar algumas difenças do var e let
