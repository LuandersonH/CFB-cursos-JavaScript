//PÓS INCREMENTO
let n1 = 10

console.log("valor original: " + n1)
console.log("n1++: " + n1++) //Aqui vai ser exibido o "n1" e após isso, ocorrerá o incremento, pois se trata de um PÓS incremento.
console.log("valor depois do incremento: " + n1)


//PRÉ INCREMENTO
n1 = 10 

console.log("valor original: " + n1)
console.log("++n1: " +  ++n1) //Aqui vai ser feito primeiro o incremento, e depois é exibido o "n1" já incrementado, pois se trata de um PRÉ incremento
console.log("valor depois do incremento: " + n1)


//O OPERADOR + EM QUALQUER SITUAÇÃO COM String, VIRA UM OPERADOR DE CONCATENAÇÃO, E NÃO DE SOMA.

n2 = 100
n3 = 200

console.log("\n\n----SOMA E CONCATENAÇÃO----")

console.log("\n")
console.log("n2 + n3 =")
console.log(n2 + n3)

console.log("\n")
console.log("n2 + ' qlq string ' + n3 =")
console.log(n2 + " qlq string " + n3)