const f_nome = document.getElementById("f_nome")
const f_nota = document.getElementById("f_nota")
const f_msg = document.getElementById("f_msg")

document.getElementById("btn_validar").addEventListener("click",(evt)=>{
    let msg = null

    if(!f_nota.checkValidity() /* vai fazer a validação, se está dentro dos parâmetros */){
        msg = f_nota.validationMessage
    }
   
    f_msg.innerHTML = msg

    evt.preventDefault() //Com isso, o botão não vai submeter os inputs (que seria o padrão)
})


// validationMessage = mensagem da validação