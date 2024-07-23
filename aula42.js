const idades=[10, 15, 17, 18, 21, 24, 35, 43]

const maiores=idades.filter((valor)=>{
    if(valor >= 18){
        return valor
    }
})

const menores=idades.filter((valor)=>{
    if(valor < 18){
        return valor
    }
})

console.log(idades)
console.log(maiores)
console.log(menores)