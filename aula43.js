const caixaCursos = document.querySelector("#caixaCursos")
const bnt_c = [...document.querySelectorAll(".curso")]
const c1_2 = document.querySelector("#c1_2")
const cursos = ["HTML", "CSS", "JAVASCRIPT", "PHP ", "REACT", "MYSQL", "ReactNative"]
const btnCursoSelecionado=document.getElementById("btnCursoSelecionado")

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

btnCursoSelecionado.addEventListener("click", (evt)=>{
    const todosRadios=[...document.querySelectorAll("input[type=radio]")]
    let radioSelecionado=todosRadios.filter((ele, indice, array)=>{
        return ele.checked
    })
    radioSelecionado=radioSelecionado[0]
    // const cursoSelecionado=radioSelecionado.parentNode.parentNode.firstChild.textContent
    const cursoSelecionado=radioSelecionado.parentNode.previousSibling.textContent
    alert(cursoSelecionado)
    // console.log(cursoSelecionado)
    // console.log(radioSelecionado)
})

