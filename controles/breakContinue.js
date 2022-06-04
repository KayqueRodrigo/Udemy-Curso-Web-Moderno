const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let x in nums) {
    if ( x == 5) break//podemos usar em for while e switch(neste caso ele agira no mais proximo a ele. no exemplo é o for)
    console.log(`${x} = ${nums[x]}`)
}

for (let y in nums) {
    if ( y == 5) {
        continue//Podemos usar no tipo for ou while. no caso do continue ele pula o index 5 e continua
    }
    console.log(`${y} = ${nums[y]}`)
}

//O break e o continue causa desvio de flouxo porem de formas diferentes que foram aboradadas nesta aula

externo: for (a in nums){
    for (b in nums){
        if (a == 2 && b == 3) break externo//Lembrando que o break agira no laço mais procimo. neste caso rotulamos o 1 for para que o break atue nele e nõa no interno que é o mais próximo dele
        console.log(`Par = ${a}, ${b}`)
    }
}