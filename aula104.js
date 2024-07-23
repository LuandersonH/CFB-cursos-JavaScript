let nome = new String("Bruno Pinho Campos")

console.log(nome.startsWith("B")); //String começa com tal caractere ou sentença?

console.log(nome.endsWith("s")); // String termina com tal caractere ou sentença?

console.log(nome.includes("Pinho")); //Em alguma parte da string possui esse caractere ou sentença? 

console.log(nome.repeat(2)); //Repete a string tantas vezes

/*Pegando os códigos dos caracteres de B R U N O: */
console.log(nome.charCodeAt(0));
console.log(nome.charCodeAt(1));
console.log(nome.charCodeAt(2));
console.log(nome.charCodeAt(3));
console.log(nome.charCodeAt(4));

/* Transformando códigos em caracteres */
console.log(String.fromCodePoint(66, 114, 117, 110, 111));