//bitwise = com ele é possível fazer numeros dobrarem: 10 -> 20 -> 40 -> 80 -> 160 -> 320 -> 640.
//o contrário também é possivel, ex: 160 -> 80 -> 40 -> 20 -> 10 -> 5 -> 2 -> 1 -> 0 (no 0 acaba).

let n1 = 80

let res = n1 >> 4 //bitwise = deslocando para a esqueda o bit em 1 casa. (o resultado de deslocar uma casa para a esquerda, é como se multiplicasse por 2, deslocar para a direita é como se dividisse por 2)

console.log(res)