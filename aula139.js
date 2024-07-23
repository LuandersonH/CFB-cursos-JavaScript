import {Cxmsg} from "./cxmsg2.js"

const config = {
    cor: "#48f",
    tipo: "sn", // tipos: ok, sn
    comando_sn: ()=>{}
}


const btn_mostrarcxmsg = document.getElementById("btn_mostrarcxmsg")
const btn_mostrarcxmsg2 = document.getElementById("btn_mostrarcxmsg2")
const btn_mostrarcxmsg3 = document.getElementById("btn_mostrarcxmsg3")

btn_mostrarcxmsg.addEventListener("click",()=>{
    config.tipo = "sn"
    Cxmsg.mostrar(config, "um", "1")
})

btn_mostrarcxmsg2.addEventListener("click",()=>{
    config.tipo = "ok"
    Cxmsg.mostrar(config, "dois", "2w")
})

btn_mostrarcxmsg3.addEventListener("click",()=>{
    config.tipo = "ok"
    Cxmsg.mostrar(config, "três", "3")
})