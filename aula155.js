const configdgv = {
    endpoint: "aula155.json",
    idDestino: "dgvDados"
} 

const dgv=(configdgv) => {
    const dgvDados = document.getElementById(configdgv.idDestino);
    dgvDados.innerHTML = "";
    fetch(configdgv.endpoint)
    .then(res => res.json())
    .then(res =>{
        res.forEach(el=>{
            const dvgLinha = document.createElement("div");
            dvgLinha.setAttribute("class", "dgvLinha");

            const c1 = document.createElement("div");
            c1.setAttribute("class", "coluna c1");
            c1.innerHTML = el.id;
            dvgLinha.appendChild(c1)

            const c2 = document.createElement("div");
            c2.setAttribute("class", "coluna c2");
            c2.innerHTML = el.produto;
            dvgLinha.appendChild(c2)

            const c3 = document.createElement("div");
            c3.setAttribute("class", "coluna c3");
            c3.innerHTML = el.marca;
            dvgLinha.appendChild(c3)

            const c4 = document.createElement("div");
            c4.setAttribute("class", "coluna c4");
            c4.innerHTML = el.modelo;
            dvgLinha.appendChild(c4)

            const c5 = document.createElement("div");
            c5.setAttribute("class", "coluna c5");
            dvgLinha.appendChild(c5)

            const imgEditar = document.createElement("img");
            imgEditar.setAttribute("class", "DgvIcone");
            imgEditar.setAttribute("src", "img/editar.svg");
            c5.appendChild(imgEditar)

            const imgVizualizar = document.createElement("img");
            imgVizualizar.setAttribute("class", "DgvIcone");
            imgVizualizar.setAttribute("src", "img/vizualizar.svg");
            c5.appendChild(imgVizualizar)

            const imgDeletar = document.createElement("img");
            imgDeletar.setAttribute("class", "DgvIcone");
            imgDeletar.setAttribute("src", "img/deletar.svg");
            c5.appendChild(imgDeletar)

            dgvDados.appendChild(dvgLinha)
        });
        console.log(res);
    });
}
        

dgv(configdgv);

/* <div class="dgvLinha">
<div class="c1">01</div>
<div class="c2">Processador</div>
<div class="c3">Intel</div>
<div class="c4">i7</div>
<div class="c5">D E V</div>
</div>  */