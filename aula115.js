let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90]

let[a, b, c,...d] = numeros

console.log(a);
console.log(b);
console.log(c);
console.log(d);

console.log("______________________________________________");

//Desestruturação direta de objetos:
let obj = {nome: "Bruno", canal:"CFBCursos", curso:"JavaScript"}
let {nome, canal} = obj // as variáveis precisam ter o mesmo nome das variáveis do objeto

console.log(nome);
console.log(canal);

console.log("______________________________________________");

const cores=()=>{
    return ["Verde", "Amarelo", "Azul", "Branco"]
}
//sempre vai desestruturar na ordem, mas adicionando mais uma virgula, ele pula a variável, pois entende que não existe a variável 
let[c1, c2,, c3] = cores()

console.log(c1);
console.log(c2);
console.log(c3);

console.log("______________________________________________");

let texto = "Curso de Javascript"
let [palavra1, palavra2, palavra3] = texto.split(" ")
let [...j] = texto.split(" ")

console.log(palavra1);
console.log(palavra2);
console.log(palavra3);

console.log(j);