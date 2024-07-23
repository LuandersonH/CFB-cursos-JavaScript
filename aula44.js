const caixaCursos = document.querySelector("#caixaCursos")
const bnt_c = [...document.querySelectorAll(".curso")]
const c1_2 = document.querySelector("#c1_2")
const cursos = ["HTML", "CSS", "JAVASCRIPT", "PHP ", "REACT", "MYSQL", "ReactNative"]
const btnCursoSelecionado=document.getElementById("btnCursoSelecionado")
const btnRemoveCurso = document.getElementById("btnRemoverCurso")

cursos.map((el, chave)=>{
        const novoElemento=document.createElement("div")
        novoElemento.setAttribute("id", "c"+chave)
        novoElemento.setAttribute("class", "curso c1")
        novoElemento.innerHTML=el 

        const comando=document.createElement("div")
        comando.setAttribute("class", "comandos")

        const rb = document.createElement("input")
        rb.setAttribute("type", "radio")
        rb.setAttribute("name","rb_curso")
        
        comando.appendChild(rb)

        novoElemento.appendChild(comando)

        caixaCursos.appendChild(novoElemento)
})

const radioSelecionado=() => {
    const todosRadios=[...document.querySelectorAll("input[type=radio]")]
    let radioSelecionado=todosRadios.filter((ele, indice, array)=>{
        return ele.checked
    })
    return radioSelecionado[0]
}

btnCursoSelecionado.addEventListener("click", (evt)=>{
    const rs = radioSelecionado()
    try {
        const cursoSelecionado=rs.parentNode.previousSibling.textContent
    alert(cursoSelecionado)
    } catch(ex) {
        alert("Selecione um dos cursos")
    }
    
})

btnRemoverCurso.addEventListener("click", (evt)=>{
    const rs = radioSelecionado()
    if (rs!=undefined) {
        const cursoSelecionado=rs.parentNode.parentNode
        cursoSelecionado.remove()
    } else {
        alert("Selecione um dos cursos para remover")
    }
    
})
