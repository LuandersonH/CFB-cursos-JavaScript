import c from "./contatos2.js"
import {contatos} from "./bancoContatos2.js"

const listaContatos = document.getElementById("listaContatos")
const btn_gravar = document.getElementById("btn_gravar")

btn_gravar.addEventListener("click",(evt)=>{
    const cont={
        nome: document.getElementById("f_nome").value,
        telefone: document.getElementById("f_telefone").value,
        email: document.getElementById("f_email").value
    }
    c.addContato(cont, listaContatos)
    // console.log(c.getTodosContatos());
    console.log(contatos);
    console.log("----");
})



// btnCursoSelecionado.addEventListener("click", (evt)=>{
//     const todosRadios=[...document.querySelectorAll("input[type=radio]")]
//     let radioSelecionado=todosRadios.filter((ele, indice, array)=>{
//         return ele.checked
//     })
//     radioSelecionado=radioSelecionado[0]
//     // const cursoSelecionado=radioSelecionado.parentNode.parentNode.firstChild.textContent
//     const cursoSelecionado=radioSelecionado.parentNode.previousSibling.textContent
//     alert(cursoSelecionado)
//     // console.log(cursoSelecionado)
//     // console.log(radioSelecionado)
// })

