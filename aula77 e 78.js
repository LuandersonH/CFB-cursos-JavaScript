const div_data =  document.getElementById("div_data")
const div_relogio =  document.getElementById("div_relogio")

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