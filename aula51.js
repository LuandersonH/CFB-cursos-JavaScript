//Arrays, strings, map, sets são coleções iteraveis (retornam os elementos um a um, fica facil de trabalhar com eles)

const valores = [10, 8, 9, 2]
const it_valores = valores[Symbol.iterator]()

const texto = "Youtube"
const it_texto = texto[Symbol.iterator]()

console.log(valores)
console.log(it_valores.next())
console.log(it_valores.next())
console.log(it_valores.next())
console.log(it_valores.next())
console.log(it_valores.next())
console.log(it_valores.next())

console.log("")
console.log("---------------------------")
console.log("")

console.log(texto)
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())