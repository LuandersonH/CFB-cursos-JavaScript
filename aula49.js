// Utilizando o SOME ("alguns" em pt-br), se apenas 1 dos vários elementos for verdadeiro, ele já retorna true.

const p_array = document.querySelector("#array")
const btnVerificar = document.querySelector("#btnVerificar")
const resultado = document.querySelector("#resultado")

const elementos_array = [16, 12, 20, 17, 15, 13, 11]
p_array.innerHTML = "["+ elementos_array  +"]"


btnVerificar.addEventListener("click", (evt)=>{
    const ret = elementos_array.some((e, i)=>{
    if (e < 18) {
        resultado.innerHTML="Valor não conforme na posição " + i
    }
    return e >= 18
    
    })

    if (ret==true){
        resultado.innerHTML="Valor conforme"
    } 
})
