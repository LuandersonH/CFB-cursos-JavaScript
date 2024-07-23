const caixa1 = document.querySelector("#caixa1")
const bnt_c = [...document.querySelectorAll(".curso")]
const cursos = ["HTML", "CSS", "JAVASCRIPT", "PHP ", "REACT", "MYSQL", "ReactNative"]

//contador abaixo simplesmente conta os elementos presentes em "cursos", sendo o 2.º parâmetro passado no MAP, sempre vai ser um contador
cursos.map((el, chave)=>{
        const novoElemento=document.createElement("div")
        novoElemento.setAttribute("id", "c"+chave)
        novoElemento.setAttribute("class", "curso c1")
        novoElemento.innerHTML=el 

        const btn_lixeira=document.createElement("img")
        btn_lixeira.setAttribute("src", "/img/lixeira.png")
        btn_lixeira.setAttribute("class", "btn_lixeira")
        btn_lixeira.addEventListener("click", (evt)=>{
            caixa1.removeChild(evt.target.parentNode)
        })

        novoElemento.appendChild(btn_lixeira)
        caixa1.appendChild(novoElemento)
})



