// function soma(...valores){
//     res = 0
//     tam = valores.length
//     for(i=0;i<tam;i++) {
//         res += valores[i]
//     }
//     return res
// }

// console.log(soma(10, 5, 3))

function soma(...valores){
    res = 0
    for(let v of valores) {
        res += v
    }
    return res
}

console.log(soma(10, 5, 3, 9))
