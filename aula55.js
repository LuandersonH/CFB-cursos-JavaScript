const caixa = document.getElementById("caixa")

let msc=new Set(["olho de tigre","folhas","super hip-hop"])

msc.add("o ronco do coiote")
msc.add("a um passo")
msc.add("a um passo") // não vai ser adicionado pois o Set() não permite elementos repetidos 

// msc.clear() - isso limparia tudo, ficaria sem nada o Set()

console.log(msc);

// msc.map((el)=>{
//     caixa.innerHTML=el
// })

msc.forEach((el)=>{
    caixa.innerHTML+=`${el} <br/>`
})


