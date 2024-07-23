const div_data =  document.getElementById("div_data")
const div_relogio =  document.getElementById("div_relogio")
const btn_ativar = document.getElementById("btn_ativar")
const btn_parar = document.getElementById("btn_parar")
const tmp_alarme = document.getElementById("tmp_alarme")
const hora_alarme = document.getElementById("hora_alarme")
const timer = document.getElementById("timer")

const som_alarme= new Audio("audio1.m4a")
som_alarme.loop=-1 //loop infinito 

let ts_atual = null
let ts_alarme = null
let alarme_ativado = false
let alarme_tocando = false

btn_ativar.addEventListener("click", ()=>{
    ts_atual=Date.now()
    ts_alarme=ts_atual+(tmp_alarme.value*1000)
    alarme_ativado = true
    const dt_alarme = new Date(ts_alarme)
    hora_alarme.innerHTML="Hora do alarme:" + dt_alarme.getUTCHours()+":"+dt_alarme.getMinutes()+":"+dt_alarme.getSeconds()
})

btn_parar.addEventListener("click", ()=>{
    let alarme_ativado = false
    let alarme_tocando = false
    hora_alarme.innerHTML="Hora do Alarme:"
    tmp_alarme.value=0
    timer.classList.remove("alarme")
    som_alarme.pause();
    som_alarme.currentTime = 0;
})

const data = new Date()

let dia=data.getDate()
dia = dia<10? "0"+dia : dia;
console.log(dia);

let mes=data.getMonth()
mes = mes<10? "0"+mes : mes;
console.log(mes);

const data_r = data.getDate()+"/"+data.getMonth()+"/"+data.getFullYear()

div_data.innerHTML=data_r


const relogio = ()=>{
    const data = new Date()
    let hora = data.getHours() 
    hora = hora<10? "0"+hora : hora;
    let minuto = data.getMinutes()
    minuto = minuto<10? "0"+minuto : minuto;
    let segundo = data.getSeconds()
    segundo = segundo<10? "0"+segundo : segundo;
    const hora_completa = hora+":"+minuto+":"+segundo
    div_relogio.innerHTML = hora_completa

    if(alarme_ativado && !alarme_tocando){
        if(data.getTime() >= ts_alarme) {
            alarme_tocando=true
            som_alarme.play()
            timer.classList.add("alarme")
        }
    }
}

const intervalo = setInterval(relogio, 1000)

// getDate() = Dia do mês
// getDay() = Dia da semana (número)
// GetFullYear() = Ano cm 4 digitos
// getHours() = Horas
// getMilliseconds() = Milisegundos
// getMinutes() = Minutos
// getMonth() = mês
// getSeconds() = segundos
// getTime() = Timestamp (milisegundos desde 1 de janeiro de 1970, 00:00:00 UTC)
// Date.now() = Timestamp (milisegundos desde 1 de janeiro de 1970, 00:00:00 UTC)
// getTimezoneOffset() = Timezone da localidade
// setDate() = define um dia do mês para a data
// setMonth() = define um mês para a data
// setFullYear() = define um ano para a data
// setHours() = Define horas
// setMinuts() = Define minutos
// setSeconds() = Define segundos
// setMilliseconds() = Define milisegundos
// toDateString() = retorna somente a data