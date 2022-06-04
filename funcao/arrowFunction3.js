let comparaComThis = function(parm) {
    console.log(this === parm)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)//Agora o this aponta para apenas ao obj
comparaComThis(global)
comparaComThis(obj)


let comparaComThisArrow = parm => console.log(this === parm)

comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)//uma arrow function e mais forte que um bind
comparaComThisArrow(module.exports)