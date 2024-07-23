/* ex1: MAT
const cursos=['HTML', 'CSS', 'JavaScript', 'PHP', 'React']

cursos.map((el,i)=>{
    console.log(++i + ' - ' + el)
}) */



/* ex2: usando o retorno para criar os elementos (Create element para retornar a DIV certa).

const cursos=['HTML', 'CSS', 'JavaScript', 'PHP', 'React']

let c = cursos.map((el,i)=>{
   (++i + ' - ' + el)
    return '<div>' + el + '</div>'
}) 

console.log(c)
*/



/* 
ex3: Pegando 6 DIV do HTML, convertendo com o spread e acessando seus elementos com o MAP, para trocar o texto de todas

let el=document.getElementsByTagName("div")
el = [...el]
console.log(el)
el.map((e,i)=>{
    e.innerHTML="Lulu"
})
*/



/* ex4: chama direto a função e passa os parametros que quero alterar
const el = document.getElementsByTagName("div")
const val = Array.prototype.map.call(el,({innerHTML})=>innerHTML)

console.log(val)
*/



/* 3x5: converter elementos, MAP vai elemento a elemente e os converte para numero 

const converterInt=(e)=>parseInt(e)
let num = ['1', '2', '3', '4', '5'].map(converterInt)
console.log(num) */