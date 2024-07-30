const configdgv = {
    endpoint: "http://127.0.0.1:1880/produtos",
    idDestino: "dgvDados"
} 

const dgv=(configdgv) => {
    const dgvDados = document.getElementById(configdgv.idDestino);
    dgvDados.innerHTML = "";
    fetch(configdgv.endpoint)
    .then(res => res.json())
    .then(res =>{
        console.log(res);
        res.forEach(el=>{
            const dvgLinha = document.createElement("div");
            dvgLinha.setAttribute("class", "dgvLinha");

            const c1 = document.createElement("div");
            c1.setAttribute("class", "coluna c1");
            c1.innerHTML = el.n_id_produto;
            dvgLinha.appendChild(c1)

            const c2 = document.createElement("div");
            c2.setAttribute("class", "coluna c2");
            c2.innerHTML = el.s_nome_produto;
            dvgLinha.appendChild(c2)

            const c3 = document.createElement("div");
            c3.setAttribute("class", "coluna c3");
            c3.innerHTML = el.s_marca_produtos;
            dvgLinha.appendChild(c3)

            const c4 = document.createElement("div");
            c4.setAttribute("class", "coluna c4");
            c4.innerHTML = el.s_modelo_produtos;
            dvgLinha.appendChild(c4)

            const c5 = document.createElement("div");
            c5.setAttribute("class", "coluna c5");
            dvgLinha.appendChild(c5)

            const imgDeletar = document.createElement("img");
            imgDeletar.setAttribute("class", "DgvIcone");
            imgDeletar.setAttribute("src", "img/deletar.svg");
            c5.appendChild(imgDeletar)
            imgDeletar.addEventListener("click",(evt)=>{
                const id = evt.target.parentNode.parentNode.firstChild.innerHTML;
                const linha = evt.target.parentNode.parentNode
                const endpoint = `http://127.0.0.1:1880/removeproduto/${id}`;
                fetch(endpoint)
                .then(res => {
                    if(res.status == 200) {
                        linha.remove()
                    }
                });
            })

            const imgEditar = document.createElement("img");
            imgEditar.setAttribute("class", "DgvIcone");
            imgEditar.setAttribute("src", "img/editar.svg");
            c5.appendChild(imgEditar);
            imgEditar.addEventListener("click",(evt)=>{
                document.querySelector("#janelaEditar").classList.remove("ocultar")
                const id = evt.target.parentNode.parentNode.firstChild.innerHTML;
                const endpoint = `http://127.0.0.1:1880/produto/${id}`;
                fetch(endpoint)
                .then(res => res.json())
                .then(res =>{
                    document.querySelector("#f_idEditar").value = res[0].n_id_produto;
                    document.querySelector("#f_produtoEditar").value = res[0].s_nome_produto;
                    document.querySelector("#f_marcaEditar").value = res[0].s_marca_produtos;
                    document.querySelector("#f_modeloEditar").value = res[0].s_modelo_produtos;
                })
                
            })
            

            const imgExibir = document.createElement("img");
            imgExibir.setAttribute("class", "DgvIcone");
            imgExibir.setAttribute("src", "img/vizualizar.svg");
            c5.appendChild(imgExibir)
            imgExibir.addEventListener("click",(evt)=>{
                document.querySelector(".janelaView").classList.remove("ocultar")
                const id = evt.target.parentNode.parentNode.firstChild.innerHTML;
                const endpoint = `http://127.0.0.1:1880/produto/${id}`;
                fetch(endpoint)
                .then(res => res.json())
                .then(res =>{
                    document.querySelector("#f_id").value = res[0].n_id_produto;
                    document.querySelector("#f_produto").value = res[0].s_nome_produto;
                    document.querySelector("#f_marca").value = res[0].s_marca_produtos;
                    document.querySelector("#f_modelo").value = res[0].s_modelo_produtos;
                })
                
            })


            dgvDados.appendChild(dvgLinha)
        });
    });
} 

dgv(configdgv);

document.querySelector("#btn_gravar").addEventListener("click", ()=>{
    const id =  document.querySelector("#f_idEditar").value;
    const produto =  document.querySelector("#f_produtoEditar").value;
    const marca =  document.querySelector("#f_marcaEditar").value;
    const modelo =  document.querySelector("#f_modeloEditar").value;

    const endpoint = `http://127.0.0.1:1880/updateproduto/${id}/${produto}/${marca}/${modelo}`;
    
    fetch(endpoint)
    .then(res => {
        if (res.status == 200) {
            document.querySelector("#janelaEditar").classList.add("ocultar")
            dgv(configdgv);
        } else {
            alert("Erro! Não foi possível atualizar os dados")
            console.log(res);
        }
    })
})

document.querySelector("#btn_ok").addEventListener("click", ()=>{
    document.querySelector(".janelaView").classList.add("ocultar")
})


document.querySelector("#btn_cancelar").addEventListener("click", ()=>{
    document.querySelector("#janelaEditar").classList.add("ocultar")
})

