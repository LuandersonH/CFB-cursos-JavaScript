const g=function(...valores){
    let res = 0
    for(v of valores){
        res+=v
    }
    return res
}

console.log(g(10,5))


//VERSÃO MAIS RESUMIDA ABAIXO


const f = new Function("v1", "v2", "v3", "return v1 + v2 + v3") //Funcão construtora anônima

console.log(f(15, 10, 5))





