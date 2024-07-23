let a, b, c, d 

//versão com valores:
[e, f, g, h] = [10, 20, 30, "40"]

console.log(e);
console.log(f);
console.log(g);
console.log(h);

console.log("______________________________________________");

//versão com objetos:
({a, b, c, d} = {a: "preto", b: "branco", c: "azul", d: "amarelo"}) 

console.log(a);
console.log(b);
console.log(c);
console.log(d);

console.log("______________________________________________");

//Desestruturar um array, "numeros tem 4 elementos", criamos um novo array para receber cada elemento do array numeros
let numeros = [10, 20, 30, 40]

let [aa, bb, cc, dd] = numeros
console.log(aa);
console.log(bb);
console.log(cc);
console.log(dd);

console.log("______________________________________________");

//Podemos também desestruturar o retorno de uma função
let funcao= () =>{
    return  [10, 20, 30, 40]
} 

let [funcao1, funcao2, funcao3, funcao4] = funcao()
console.log(funcao1);
console.log(funcao2);
console.log(funcao3);
console.log(funcao4);

console.log("______________________________________________");

let num1 = 10;
let num2 = 20;

console.log("Valor original de num1:" + num1);
console.log("Valor original de num2:" + num2);

//Aqui vamos trocar os valores, num1 recebe num2, num2 recebe num1
[num1, num2] = [num2, num1]

console.log("");
console.log("Valor novo de num1:" + num1);
console.log("Valor novo de num2:" + num2);

console.log("______________________________________________");
