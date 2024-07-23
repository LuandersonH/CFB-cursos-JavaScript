const carro = document.getElementById("carro")
const btn_esquerda = document.getElementById("btn_esquerda")
const btn_direita = document.getElementById("btn_direita")
const btn_parar = document.getElementById("btn_parar")

console.log(window.innerWidth);

const init=()=>{
    carro.style.position="relative"
    carro.style.left="0px"
    carro.style.width="100px"
    tamMax = window.innerWidth - parseInt(carro.style.width)
}

let anima = null
let tamMax = null


const move = (dir)=>{
    if (dir > 0) {
        if(parseInt(carro.style.left) <= (tamMax-10)){
            carro.style.left=parseInt(carro.style.left) + (10*dir) + "px";
            anima=setTimeout(move, 20, dir)
        } else {
            clearTimeout(anima)
        }
    } else if (dir < 0) {
        if (parseInt(carro.style.left) >= 10) {
            carro.style.left=parseInt(carro.style.left) + (10*dir) + "px";
            anima=setTimeout(move, 20, dir)
        } else {
            clearTimeout(anima)
        }
    }
    
}


btn_parar.addEventListener("click", ()=>{
    clearInterval(anima)
})

btn_esquerda.addEventListener("click", ()=>{
    clearInterval(anima)
    move(-1)
})


btn_direita.addEventListener("click", ()=>{
    clearInterval(anima)
    move(1)
})


window.addEventListener("load", init())

window.addEventListener("resize",()=>{
    tamMax = window.innerWidth - parseInt(carro.style.width)
    
})

window.onload=init //Quando a janela carregar, vai executar a função