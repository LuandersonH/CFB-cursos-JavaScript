/*getBoundingClientRect() é uma função, que pertence a classe Elemente (div, p - do html)
    ele retorna um Domrect, que mostra as informações do elemento, como a altura, largura, posição x, posição y
*/

const q1=document.getElementById("q1") 
const q2=document.getElementById("q2") 
const posx=document.getElementById("posx") 
const posy=document.getElementById("posy") 
const largura=document.getElementById("largura") 
const altura=document.getElementById("altura")

const info=(el)=>{
    let DOMRect_q = el.getBoundingClientRect()

    posx.innerHTML = `Posx: ${DOMRect_q.x}`
    posy.innerHTML = `Posy: ${DOMRect_q.y}`
    largura.innerHTML = `Largura: ${DOMRect_q.width}`
    altura.innerHTML = `Altura: ${DOMRect_q.height}`
}

q1.addEventListener("click", (evt)=>{
    info(q1) //posso atribuir direto o elemento, quando clicado
})

q2.addEventListener("click", (evt)=>{
    info(evt.target) //posso receber o elemento, quando clicado
})