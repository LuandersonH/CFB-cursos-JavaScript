const numero = document.getElementById("numero")
const btn_promessa = document.getElementById("btn_promessa")

const promessa=()=>{
    let p=new Promise((resolve, reject)=>{
        let resultado = true
        let tempo = 3000
        setTimeout(()=>{
            if(resultado) {
                resolve("Deu tudo certo")
            } else {
                reject("Deu tudo errado")
            }
        }, tempo)
    })
    return p
}

btn_promessa.addEventListener("click",(evt)=>{
    numero.innerHTML="Processando..."
    promessa()
    .then((retorno)=>{
        numero.innerHTML=retorno
        numero.classList.remove("erro")
        numero.classList.add("ok")
    }) //se deu certo.
    .catch((retorno)=>{
        numero.innerHTML=retorno
        numero.classList.add("erro")
        numero.classList.remove("ok")
    }) //se deu errado.
})

numero.innerHTML="Esperando..."
