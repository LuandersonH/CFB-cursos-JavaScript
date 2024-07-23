let nome = new String("Bruno Pinho Campos")
let nome2 = new String("Bruno Pinho Campos")
let canal = new String("CFB cursos")

console.log(nome);
console.log(typeof(nome));

console.log(nome.charAt(0));
console.log(nome.charAt(1));
console.log(nome.charAt(2));
console.log(nome.charAt(3));
console.log(nome.charAt(4));

console.log("--------------------");


console.log(nome.concat(canal));  
console.log(nome);

console.log(nome.indexOf("u")); 

console.log(nome.indexOf("uno")); 

console.log(nome.indexOf("una"));

console.log(nome.indexOf("o")); 
console.log(nome.lastIndexOf("o"));

console.log("--------------------");

/*
Objetos strings tem que ser comparados com essa função
retornos:
    1: Strings diferentes, com a segunda sendo menor que a primeira
    -1:String diferentes, com a primeira sendo menor que a segunda
    0: Strings iguais
*/
console.log(nome.localeCompare(nome2)); 


console.log(nome.replace("o", "a")); //Substitui o primeiro caractere "o" por outro
console.log(nome.replace("Bruno", "a")); //Substitui sentenças grandes tbm


console.log(nome.search("Campos")); //Pesquisa a posição onde começa a sentença ou o caractere

console.log(nome.slice(6, 11)); //Faz um corte e mantém apenas a parte cortada

let arr_nome = nome.split(" ") //Recorta cada espaço, e gera um array
console.log(arr_nome); 

console.log("---------------");

let parte1 = nome.substring(0,4) //retorta os elementos até 3, não retorna o elemento 4, apenas 4-1
console.log(parte1); 

let parte2 = nome.substr(6,5) //a partir de tal posição x, me retorne y caracteres
console.log(parte2); 

console.log(nome.toUpperCase()); //Converte tudo p maiusculo 
console.log(nome.toLowerCase()); //Converte tudo p minusculo 
console.log(nome.toLocaleUpperCase()); //Converte tudo p minusculo 
console.log(nome.toLocaleLowerCase()); //Converte tudo p minusculo 

console.log(nome.valueOf()); //imprime o valor real da string

let num = 10
console.log(typeof(num.toString())); //converte qualquer valor para uma string