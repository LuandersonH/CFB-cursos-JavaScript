//no REDUCE, temos que colcoar o valor anterior = retorno anterior do array, exemplo: se estamos atualmente no elemento 2, o anterior vai ser o valor de 1

const p_array = document.querySelector("#array")
const btnReduzir = document.querySelector("#btnReduzir")
const resultado = document.querySelector("#resultado")

const elementos_array = [1, 2, 3, 4, 5]
let ant=[]
let atu=[]
let dobro=[]

p_array.innerHTML= "[" + elementos_array + "]"

btnReduzir.addEventListener("click", (evt)=>{
    dobro.push(elementos_array[0]*2)
    resultado.innerHTML = elementos_array.reduce((anterior, atual, pos)=>{
        ant.push(anterior)
        atu.push(atual)
        dobro.push(atual*2)
        return atual + anterior
    })
    resultado.innerHTML+="<br/> V. Anterior: " + ant + "<br/> V. Atual: " + atu + "<br/> V. Dobro: " + dobro

})
