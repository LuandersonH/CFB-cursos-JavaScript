const nome = new String("Bruno Pinho Campoooooos 1978")
const numeros = "1, 10, 100, 1000"
console.log(nome)

console.log(nome.match("o")) 

console.log(nome.match(/[oh]/ig)) //Procura "o" + "h" não procura por "oh", e sim, pelos caracteres separados, quando dentro dos colchetes

console.log("------------");

console.log(nome.match(/[a-m|n-z|1-9]/ig)); //Ele procura uma faixa determinada de letras ou números (de a até m | de 1 até 8)

//meta-caracteres:
console.log(nome.match(/\d/ig)); // \d é um meta-caracter, ele acessa todos os digitos (números)

console.log(nome.match(/\s/ig)); // Espaços

console.log(nome.match(/\bP/ig)); // DWORD

console.log("------------");

//quantificadores:
console.log(numeros)

// match '10' exatamente
console.log(numeros.match(/10/));

// match '1' seguido de um ou mais '0'
console.log(numeros.match(/10+/));

// match '1' seguido de zero ou mais '0'
console.log(numeros.match(/10*/));

// match '1' seguido de zero ou um '0'
console.log(numeros.match(/10?/));


