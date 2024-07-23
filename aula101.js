let nome = new String("Bruno Pinho Campos")
let canal = new String("CFB cursos")

console.log(nome);
console.log(typeof(nome));

 //CharAt retorna o caractere da posição indicada do string:
console.log(nome.charAt(0));
console.log(nome.charAt(1));
console.log(nome.charAt(2));
console.log(nome.charAt(3));
console.log(nome.charAt(4));

console.log("--------------------");

//concat concatena duas strings, ela retorna a concatenação, mas não altera o conteúdo original 
console.log(nome.concat(canal));  // concatena 
console.log(nome); //não altera o original
//Podemos alterar o original assim: nome = nome.concat(canal)

console.log(nome.indexOf("u")); //indica a posição do conteudo dentro da string  

console.log(nome.indexOf("uno")); //indica a posição do primeiro conteudo dentro da string  

console.log(nome.indexOf("una")); //indica a posição do conteudo dentro da string, porém, como não tem isso na string, ele da erro: -1  

console.log(nome.indexOf("o")); //acha o primeiro "o"
console.log(nome.lastIndexOf("o")); //acha o último "o"