import { contatos } from "./bancoContatos2.js";

let contato = {
    getTodosContatos:function() {
        return contatos
    },

    getContato:function(contatos) {
        console.log(contatos.toggle());
    },

    apagarContato:function(){
        const excluir = [...document.querySelectorAll(".excluido")]
        excluir.map((el)=>{
            const apagar = el.parentElement
            apagar.remove()
            contatos.pop(apagar)
        })
        
    },

    addContato:function(novoContato, destinoDOM){
        const dados = {
            nome: novoContato.nome,
            telefone: novoContato.telefone,
            email: novoContato.email,
        }
        contatos.push(dados)
        destinoDOM.innerHTML=""
        contatos.forEach((c)=>{
            const div = document.createElement("div")
            div.setAttribute("class", "contato")
            const p_nome = document.createElement("p")
            p_nome.innerHTML = c.nome
            const p_telefone = document.createElement("p")
            p_telefone.innerHTML = c.telefone
            const p_email = document.createElement("p")
            p_email.innerHTML = c.email
            div.appendChild(p_nome)
            div.appendChild(p_telefone)
            div.appendChild(p_email)
            destinoDOM.appendChild(div)

            const img = (document.createElement("img"))
            img.setAttribute("src", "img/lixeira.png")
            img.setAttribute("class","img_lixeira")
            div.appendChild(img)

            img.addEventListener("click", ()=>{
                img.setAttribute("class", "img_lixeira excluido")
                this.apagarContato();
            })
            
        })
    }
}

export default contato