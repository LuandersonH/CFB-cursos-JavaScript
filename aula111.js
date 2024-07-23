const carro = document.getElementById("carro")
const btn_parar = document.getElementById("btn_parar")
const btn_play = document.getElementById("btn_play")

console.log(window.innerWidth);

const init=()=>{
    carro.style.position="relative"
    carro.style.left="0px"
    carro.style.width="100px"
    carro.style.top="0px"
    carro.style.height="40px"
    tamCarW = parseInt(carro.style.width)
    tamCarH = parseInt(carro.style.height)
    tamMax = window.innerWidth - tamCarW 
    tamMaxH = window.innerHeight - tamCarH
}

let anima = null
let tamMax = null
let tamMaxH = null
let tamCarW = null
let tamCarH = null
let dir = 0


const move=()=>{
    if(parseInt(carro.style.left) >= (tamMax-10)){
            dir=-1
    } else if (parseInt(carro.style.left) <= 10) {
            dir=1
    } 
    carro.style.left=parseInt(carro.style.left) + (10*dir) + "px";
    anima=setTimeout(move, 20)    
}


btn_parar.addEventListener("click", ()=>{
    clearTimeout(anima)
})

btn_play.addEventListener("click", ()=>{
    move()
})

window.addEventListener("load", init())

window.addEventListener("resize",()=>{
    tamMax = window.innerWidth - parseInt(carro.style.width)
    tamMaxH = window.innerHeight - parseInt(carro.style.height)
})

// Alterações no evento keydown
window.addEventListener("keydown", (evt) => {
    if (evt.code === "ArrowUp") {
        if (parseInt(carro.style.height) + 10 <= window.innerHeight) {
            carro.style.width = parseInt(carro.style.width) + 10 + "px";
            carro.style.height = parseInt(carro.style.height) + 10 + "px";
        }
    }
    if (evt.code === "ArrowDown") {
        let newWidth = parseInt(carro.style.width) - 10;
        let newHeight = parseInt(carro.style.height) - 10;
        if (newWidth > 0 && newHeight > 0) {
            carro.style.width = newWidth + "px";
            carro.style.height = newHeight + "px";
        }
    }
    tamCarW = parseInt(carro.style.width);
    tamCarH = parseInt(carro.style.height);
    tamMax = window.innerWidth - tamCarW;
    tamMaxH = window.innerHeight - tamCarH;
});

// window.onload=init //Quando a janela carregar, vai executar a função