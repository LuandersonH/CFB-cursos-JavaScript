
// find = retorna o valor do primeiro elemento no Array
// predicate precisamos colocar uma função que irá operar elemento por elemento
// elemento a ser interado
// o indice desse elemento
// ele retorna primeiro elemento quando o array retorna true

const p_array = document.querySelector("#array")
const txt_pesquisar = document.querySelector("#txt_pesquisar")
const btnPesquisar = document.querySelector("#btn_pesquisar")
const resultado = document.querySelector("#resultado")

const elementos_array = [10, 20, 300, 40, 50, 6]

p_array.innerHTML = "["+ elementos_array  +"]"


btnPesquisar.addEventListener("click", (evt)=>{
    resultado.innerHTML=" Valor não encontrado"
    const ret = elementos_array.find((e, i)=>{
        if (e==txt_pesquisar.value) {
            resultado.innerHTML=" Valor encontrado: " + e + " na posição: " + i
        }
    })
    console.log(ret);
})
