// nao podemos ter chaves iguais, se tivermos, o ultimo valor declarado vai substituir os anteriores no Map()

//Has e delete no Map() pesquisam através da chave.

const caixa = document.getElementById("caixa")

let mapa=new Map()

mapa.set("Chave 01", "Messi")
mapa.set("Chave 02", "Cristiano Ronaldo")
mapa.set("Chave 03", "Neymar")
mapa.set("Chave 04", "Iniesta") //add o iniesta
mapa.delete("Chave 04") // removi o iniesta
console.log(mapa)

caixa.innerHTML="Top 1: " + mapa.get("Chave 01")

let pos="Chave 02"

if(mapa.has(pos)){
    caixa.innerHTML+="<br/> <br/> Temos o top 2: " + mapa.get(pos)
    caixa.innerHTML+="<br/>" 
} else {
    caixa.innerHTML+="<br/>Não temos o top 2"
}