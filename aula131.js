import { Cxmsg } from "./cxmsg.js"

const config = {
    cor: "rgb(55, 150, 55)",
}

Cxmsg.config(config)

const timer = document.getElementById("timer")
const btn_iniciar = document.getElementById("btn_iniciar")
const btn_parar = document.getElementById("btn_parar")
const btn_zerar = document.getElementById("btn_zerar")
const parciaisregistradas = document.getElementById("parciaisregistradas")
const btn_parciais = document.getElementById("btn_parciais")

//Declarei essa váriáveis no escopo global pq com o type="module" estava dando erro.
let tmpini;
let intervalo;
let parcial;

const contador = ()=>{
    const tmpatual= Date.now()
    let contar = tmpatual - tmpini
    let seg = Math.floor((contar) / 1000)
    console.log(seg);
    timer.innerHTML=converter(seg)
}


const converter = (seg) =>{
    let hora = Math.floor(seg/3600)
    let resto = seg%3600
    let minuto = Math.floor(resto/60)
    let segundo= Math.floor(resto%60)
    let tempoFormatado = (hora<10? "0"+hora : hora) + ":" + (minuto<10? "0"+minuto : minuto) + ":" + (segundo<10? "0"+segundo : segundo)
    
    return tempoFormatado
}

btn_iniciar.addEventListener("click", ()=>{
    tmpini = Date.now()
    intervalo = setInterval(contador, 1000)
})

btn_parciais.addEventListener("click", ()=>{
    parcial = "<div>" + timer.innerHTML + "</div>"
    parciaisregistradas.innerHTML+=parcial
})

btn_parar.addEventListener("click", ()=>{
    clearInterval(intervalo)
})

btn_zerar.addEventListener("click", ()=>{
    tmpini = Date.now()
    timer.innerHTML="00:00:00"
    clearInterval(intervalo)
    parciaisregistradas.innerHTML=""
    Cxmsg.mostrar("CRONÔMETRO", "O cronômetro foi zerado!")
})