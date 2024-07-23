const numero = document.getElementById("numero")

let promise=new Promise((resolve, reject)=>{
    let resultado = true
    let tempo = 3000

    setTimeout(()=>{
        if(resultado) {
            resolve("Deu tudo certo")
        } else {
            reject("Deu tudo errado")
        }
    },tempo)
})

promise.then((retorno)=>{
    numero.innerHTML=retorno
    numero.classList.remove("erro")
    numero.classList.add("ok")
}) //se deu certo.
promise.catch((retorno)=>{
    numero.innerHTML=retorno
    numero.classList.add("erro")
    numero.classList.remove("ok")
}) //se deu errado.



// if(resultado){
//     numero.innerHTML="Deu tudo certo"

// } else {
//     numero.innerHTML="Deu tudo errado"

// }

numero.innerHTML="Processando..."

