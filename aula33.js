const divTodas=[...document.getElementsByTagName("div")]
const cursosTodos=[...document.getElementsByClassName("curso")]
const cursoc1=[...document.getElementsByClassName("c1")]
const cursoc2=[...document.getElementsByClassName("c2")]
const cursoEspecial=document.getElementById("c1")




const query_divTodas=[...document.querySelectorAll("div,p")]
const query_cursosTodos=[...document.querySelectorAll("div[class]")]
const query_cursoc1=[...document.querySelectorAll("div > p")]
const query_cursoc2=[...document.querySelectorAll(".c2")]
const query_cursoEspecial=document.querySelectorAll("#c2")[0]


console.log(query_cursoc1)

// console.log(query_cursoc2)
//console.log(query_cursoEspecial)
//console.log(query_divTodas)
//console.log(query_cursosTodos)


// console.log(cursosTodos)
// console.log(cursoc1)
// console.log(cursoc2)
// console.log(cursoEspecial)

// cursoc2.map((el)=>{
//     el.classList.add("destaque")
// })