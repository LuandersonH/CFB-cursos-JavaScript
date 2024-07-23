const nome = Symbol("nome")
const numero=Symbol("numero")
const corUniforme=Symbol("corUniforme")

const Jogador = {
    nome:"j1", //aqui eu defini que o nome faz parte do Symbol
}

//Hidden properties == Propriedades escondidas:
Jogador[numero]=10, 
Jogador[corUniforme]="Preto e branco"

for(p in Jogador) {
    console.log(p); // Ele percorre todos os elementos dentro de Jogador, se numero e corUniforme não estivessem em Symbol, iriam ser impressos, mas como estão em Symbol, ficam escondidos.
}

console.log(Jogador);

//Para acessar as propriedades de Jogador que estão ocultas pelo Symbol, devemos fazer o acesso direto: (não conseguimos acessar com a notação do *.* (jogador.numero))
console.log(Jogador[numero]);
console.log(Jogador[corUniforme]);