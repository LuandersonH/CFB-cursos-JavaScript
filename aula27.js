/*
1° TESTE
function* cores() {
    yield 'vermelho'
    yield 'azul'
    yield 'amarelo' 
}

const cor = cores()
console.log(cor.next().value)
console.log(cor.next().value)
console.log(cor.next().value) 
*/

/* 
2° TESTE 

function* perguntas(){
    const nome = yield 'Qual seu nome?'
    const idade = yield 'Qual sua idade?'
    return "Seu nome é " + nome + ", você tem: " + idade + " anos."
}

const itc = perguntas() 
console.log(itc.next().value)
console.log(itc.next('Bruno').value)
console.log(itc.next('18').value)
*/

//3 TESTE 
function* contador(){
    let i = 0
    while(true){
        yield i++
        if(i>5) {
            break
        }
    }
}

const itc = contador()
for (let c of itc){
    console.log(c)
}
