const caixa1 = document.querySelector("#caixa1")
const bnt_c = [...document.querySelectorAll(".curso")]
const c1_2 = document.querySelector("#c1_2")

//acessa o pai, o pai do pai, o pai do pai do pai, o filho do ultimo acessado
console.log(c1_2.parentNode.parentNode.parentNode.children[4])

// Vendo se tem childrenNodes e retornando
// console.log(caixa1.hasChildNodes())
// console.log(bnt_c[0].hasChildNodes())
// console.log(bnt_c[0].childNodes)

// console.log(Operação ternária com o HTML)
// console.log(bnt_c[0].children.length > 0 ? "possuí filhos" : "não possuí filhos")

// console.log(Alterar elemento)
// console.log(caixa1.children[1].innerHTML="css foi trocado")

// console.log(Primeiro, ultimo e todos elementos:)
// console.log(caixa1.firstElementChild)
// console.log(caixa1.lastElementChild)
// console.log(caixa1.children)