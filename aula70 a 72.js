const teclasNum = [...document.querySelectorAll(".num")]
const teclasOp = [...document.querySelectorAll(".op")]
const teclaRes = document.querySelector(".res")
const display = document.querySelector("#display")
const ton = document.querySelector("#ton")
const tlimpar = document.querySelector("#tlimpar")
const tigual = document.getElementById("tigual")

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

    
    