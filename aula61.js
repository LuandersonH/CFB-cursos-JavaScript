const Pessoa={
    nome: "",
    idade: "",
    getNome: function(){
        return this.nome
    },
    getIdade: function(){
        return this.idade
    },
    setNome: function(nome){
        this.nome = nome
    },
    setIdade: function(idade){
        this.idade = idade
    }
}

const btn_add = document.querySelector("#btn_add");
const res = document.querySelector(".res");

const pessoas = Pessoa
console.log(pessoas);


const addPessoa=(p)=>{
    const nome = document.querySelector("#f_nome")
    const idade = document.querySelector("#f_idade")
    p = `Nome: ${nome.value}, Idade: ${idade.value}`
    const div = document.createElement("div")
    div.setAttribute("class", "pessoa")
    div.innerHTML=p
    res.appendChild(div)
    console.log(div);
}

btn_add.addEventListener("click", (evt) => {
    addPessoa()
    const nome = document.querySelector("#f_nome");
    const idade = document.querySelector("#f_idade");
    nome.value = "";
    idade.value = "";
    nome.focus();
})