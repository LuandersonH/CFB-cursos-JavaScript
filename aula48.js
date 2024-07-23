const p_array = document.querySelector("#array")
const btnVerificar = document.querySelector("#btnVerificar")
const resultado = document.querySelector("#resultado")

const elementos_array = [10, 20, 300, 40, 50, 6]
p_array.innerHTML = "["+ elementos_array  +"]"


btnVerificar.addEventListener("click", (evt)=>{
    const ret = elementos_array.every((e, i)=>{
    if (e < 6) {
        resultado.innerHTML="Valor não conforme na posição " + i
    }
    return e >= 6
    
    })

    if (ret==true){
        resultado.innerHTML="Valor conforme"
    } 
})
