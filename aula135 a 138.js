import {Cxmsg} from "./cxmsg.js"

const config = {
    cor: "#48f",
}

Cxmsg.config(config)

const btn_mostrarcxmsg = document.getElementById("btn_mostrarcxmsg")

btn_mostrarcxmsg.addEventListener("click",()=>{
    Cxmsg.mostrar("um", "1")
})

btn_mostrarcxmsg2.addEventListener("click",()=>{
    Cxmsg.mostrar("dois", "2w")
})

btn_mostrarcxmsg3.addEventListener("click",()=>{
    Cxmsg.mostrar("três", "3")
})