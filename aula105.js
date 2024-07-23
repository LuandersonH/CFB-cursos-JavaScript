const nome = new String("Bruno Pinho Campos")

console.log(nome)

console.log(nome.match("o")) //Nessa versão, irá encontrar o primeiro "o"

console.log(nome.match(/o/g)) //Nessa versão, irá encontrar todos os "o" - g = global

console.log(nome.match("pinho")) //Nessa versão, não irá encontrar "Pinho", case-sensitive habilitado

console.log(nome.match(/pinho/i)) //Nessa versão, irá encontrar "Pinho", case-sensitive desligado - i = desliga o case-sensitive