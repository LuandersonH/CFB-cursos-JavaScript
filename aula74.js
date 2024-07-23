const teclasNum = [...document.querySelectorAll(".num")]
const teclasOp = [...document.querySelectorAll(".op")]
const teclaRes = document.querySelector(".res")
const display = document.querySelector("#display")
const tcpy = document.querySelector("#tcpy")
const tlimpar = document.querySelector("#tlimpar")
const tigual = document.getElementById("tigual")
const teste = document.getElementById("teste")
const aba = document.getElementById("calc_aba")
const calc = document.getElementById("calc")

let sinal = false
let decimal = false

tlimpar.addEventListener("click",(evt)=>{
    sinal = false
    decimal = false
    display.innerHTML="0"
})

tigual.addEventListener("click",(evt)=>{
    sinal = false
    decimal = false
    const res = eval(display.innerHTML)
    display.innerHTML = res
})



teclasNum.forEach((el)=>{
    el.addEventListener("click",(evt)=>{
        sinal = false
        if (display.innerHTML=="0") {
            display.innerHTML=""
        }
        if (evt.target.innerHTML==","){
            if(!decimal) {
            decimal = true 
            if (display.innerHTML=="") {
                display.innerHTML="0"
            } 
            display.innerHTML += evt.target.innerHTML                
            }

        } else {
            display.innerHTML += evt.target.innerHTML
        }
        
    })
    
})

teclasOp.forEach((el)=>{
    el.addEventListener("click",(evt)=>{
        if(!sinal){
            sinal = true
            if (display.innerHTML=="0") {
                display.innerHTML=""
            }
            if (evt.target.innerHTML=="x"){
                display.innerHTML+="*"
            } else {
                display.innerHTML += evt.target.innerHTML
            }   
        }
    })
})

tcpy.addEventListener("click", ()=>{
    navigator.clipboard.writeText(display.innerHTML)
    
    //Os três comandos abaixo servem para:
    // teste.select() //Seleciona o conteudo que irá ser copiado 
    // teste.setSelectionRange(0, 99999) //Define o range min e máximo da seleção
    // navigator.clipboard.writeText(teste.value) //copia o texto selecionado 
})

aba.addEventListener("click", ()=>{
    calc.classList.toggle("calc_exibir")
})

// aba.addEventListener("click", ()=>{
//     if(aba.contains(calc_exibir)){
//         aba.removeAttribute(calc_exibir)
//     } else {
//         aba.setAttribute(calc_exibir)
//     }
// })



