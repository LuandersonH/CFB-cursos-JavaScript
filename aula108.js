const carro = document.getElementById("carro")
const btn_esquerda = document.getElementById("btn_esquerda")
const btn_direita = document.getElementById("btn_direita")
const btn_parar = document.getElementById("btn_parar")

const init=()=>{
    carro.style.position="relative"
    carro.style.left="0px"
}

let anima = null


const parar=()=>{
    clearInterval(anima)
}

const move = (dir)=>{
    carro.style.left=parseInt(carro.style.left) + (10*dir) + "px";
}

btn_parar.addEventListener("click", ()=>{
    parar()
})

btn_esquerda.addEventListener("click", ()=>{
    parar()
    anima=setInterval(move, 20, -1)
})


btn_direita.addEventListener("click", ()=>{
    parar()
    anima=setInterval(move, 20, 1)
})


window.onload=init //Quando a janela carregar, vai executar a função