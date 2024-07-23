//Armazenamento de sessão: não armazena após o browser fechar
//Armazenamento local: armazenas após o browser fechar

const f_texto = document.getElementById("f_texto")
const p_texto = document.getElementById("p_texto")
const btn_texto = document.getElementById("btn_texto")

btn_texto.addEventListener("click", ()=>{
})

localStorage.setItem("numero", 10) //posso adicionar manualmente

let num = 30
localStorage.setItem("num", num) //posso adicionar da let

console.log("valor da key 'num':" + localStorage.getItem("num")); 
console.log("key da pos 0: " + localStorage.key(0)) //retorna a chave da posição, key da pos (0)
console.log("tam do localStorage:" + localStorage.length) // tamanho, qntd de chaves


sessionStorage.setItem("num2", 160)
console.log(sessionStorage.getItem("num2"));