const caixa = document.getElementById("caixa")

const carros = ["Golf", "Porshe", "Ferrari", "Gol quadrado", "Fusca"]

let ul = `<ul>`
carros.map((el)=>{
    ul+=`<li> ${el} <li/>`
})
ul += `<ul/>`

caixa.innerHTML=ul