const cursosTodos=[...document.getElementsByClassName("curso")]
const cursoc1=[...document.getElementsByClassName("c1")]
const cursoc2=[...document.getElementsByClassName("c2")]
const cursoEspecial=document.getElementsByClassName("curso")[5]

console.log(cursosTodos)
console.log(cursoc1)
console.log(cursoc2)
console.log(cursoEspecial)

cursoc1.map((el)=>{
    el.classList.add("destaque")
})