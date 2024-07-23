"/*"
//Declarando a função que vai somar
const somar=val=>{
    res = 0
    for(v of val){
        res+=v
    }
    return res
}

//Aninhando a função em outra função
const somas=(...valores)=>{
    return somar(valores)
}

console.log(soma(10, 5))
"*/"

/*
// OU PODE SER FEITO TUDO JUNTO, MESMO RESULTADO:
const soma=(...valores)=>{
    const somar=val=>{
        res = 0
        for(v of val){
            res+=v
        }
        return res
    }
    return somar(valores)
}

console.log(soma(10, 5)) */