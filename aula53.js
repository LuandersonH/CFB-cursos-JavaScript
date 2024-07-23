const val1 = document.getElementById("val1")
const val2 = document.getElementById("val2")
const btnSoma = document.getElementById("btnSoma")
const btnSub = document.getElementById("btnSub")
const btnMult = document.getElementById("btnMult")
const btnDiv = document.getElementById("btnDiv")
let resultado = document.getElementById("resultado") 


const operacoes = [ ()=>{
    let res = 0
    let valor1 = Number(val1.value)
    let valor2 = Number(val2.value)        
        
    res = valor1 + valor2
    resultado.value = res
},

()=>{
    
    let res = 0
    let valor1 = Number(val1.value)
    let valor2 = Number(val2.value)
    
    res = valor1 - valor2
    resultado.value = res
},

()=>{
    
    let res = 0
    let valor1 = Number(val1.value)
    let valor2 = Number(val2.value)
    
    res = valor1 * valor2
    resultado.value = res
},

()=>{
    
    let res = 0
    let valor1 = Number(val1.value)
    let valor2 = Number(val2.value)
    
    res = valor1 / valor2
    resultado.value = res
}
]

btnSoma.addEventListener("click", operacoes[0])
btnSub.addEventListener("click", operacoes[1])
btnMult.addEventListener("click", operacoes[2])
btnDiv.addEventListener("click", operacoes[3])