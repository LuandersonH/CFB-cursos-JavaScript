const caixa = document.getElementById("caixa")

let cursos = ["HTML", "CSS", "Javascript"]

//alterar o elemento específico dentro de um array:
cursos[0] = "HTML 2" 

//adicionar elemento no fim do array:
cursos.push("PHP - push")

//adicionar elemento no começo do array:
cursos.unshift("REACT")

//retirar um elemento do final do array:
cursos.pop()

//retirar um elemento do começo do array:
cursos.shift()


cursos.map((el)=>{
    let p = document.createElement("p")
    p.innerHTML = el 
    caixa.appendChild(p)
})