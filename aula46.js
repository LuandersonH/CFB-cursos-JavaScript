const caixaCursos = document.querySelector("#caixaCursos")
const bnt_c = [...document.querySelectorAll(".curso")]
const c1_2 = document.querySelector("#c1_2")
const cursos = ["HTML", "CSS", "JAVASCRIPT", "PHP ", "REACT", "MYSQL", "ReactNative"]
const btnCursoSelecionado=document.getElementById("btnCursoSelecionado")
const btnRemoveCurso = document.getElementById("btnRemoverCurso")
const btnAdicionarNovoCursoAntes = document.getElementById("btnAdicionarNovoCursoAntes")
const btnAdicionarNovoCursoDepois = document.getElementById("btnAdicionarNovoCursoDepois")
const nomeCurso = document.getElementById("nomeCurso")
let indice = 0

const tirarSelecao = ()=>{
    const cursosSelecionados = [...document.querySelectorAll(".selecionado")]
    cursosSelecionados.map((el)=>{
        el.classList.remove("selecionado")
    })
}

const criarNovoCurso=(curso) =>{
    const novoElemento=document.createElement("div")
    novoElemento.setAttribute("id", "c"+indice)
    novoElemento.setAttribute("class", "curso c1")
    novoElemento.innerHTML=curso 

    novoElemento.addEventListener("click", (evt)=>{
        tirarSelecao()
        evt.target.classList.toggle("selecionado")
    })
    return novoElemento
}

cursos.map((el, chave)=>{
        novoElemento = criarNovoCurso(el)
        caixaCursos.appendChild(novoElemento)
        indice++
})

const cursoSelecionado=() => {
    const cursosSelecionados = [...document.querySelectorAll(".selecionado")]
    return cursosSelecionados[0] 
}


btnCursoSelecionado.addEventListener("click", (evt)=>{
    try {
    alert(cursoSelecionado().innerHTML)
    } catch(ex) {
        alert("Selecione um dos cursos")
    }
    
})

btnRemoverCurso.addEventListener("click", (evt)=>{
    const cs = cursoSelecionado()
    if (cs!=undefined) {
        cs.remove()
    } else {
        alert("Selecione um dos cursos para remover")
    }
    
})

btnAdicionarNovoCursoAntes.addEventListener("click", (evt)=>{
    try {
        if (nomeCurso.value != "") {
            const novoCurso = criarNovoCurso(nomeCurso.value)
            caixaCursos.insertBefore(novoCurso, cursoSelecionado())
    } else {
        alert("Digite o nome do curso")
    }
    } catch(ex) {
        alert("Selecione um dos cursos")
    }
    
})

btnAdicionarNovoCursoDepois.addEventListener("click", (evt)=>{
    try {
        if (nomeCurso.value != "") {
            const novoCurso = criarNovoCurso(nomeCurso.value)
            caixaCursos.insertBefore(novoCurso, cursoSelecionado().nextSibling)
        } else {
            alert("Digite o nome do curso")
        }
    } catch(ex) {
        alert("Selecione um dos cursos")
    }
})