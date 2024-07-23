const f_nome = document.getElementById("f_nome")
const f_nota = document.getElementById("f_nota")
const f_msg = document.getElementById("f_msg")

document.getElementById("btn_validar").addEventListener("click",(evt)=>{
    let estadoValidacaoNota = f_nota.validity;
    let estadoValidacaoNome = f_nome.validity;
    let msg = null

    if(estadoValidacaoNota.valueMissing || estadoValidacaoNome.valueMissing) {
        msg = "Esse campo tem que ser preenchido"
    }else if (estadoValidacaoNota.rangeOverflow) {
        msg = "O valor é alto demaais"
    } else if (estadoValidacaoNota.rangeUnderflow) {
        msg = "O valor é baixo demaais"
    } else {
        msg = `Nome: ${f_nome.value} </br> Nota: ${f_nota.value}`
    }

    console.log(f_nome.value);
    f_msg.innerHTML = msg
    console.log("msg: " + msg);
    f_nota.reportValidity()
    f_nome.reportValidity()
    evt.preventDefault()
})


// validationMessage = mensagem da validação