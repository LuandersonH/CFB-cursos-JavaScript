let n = 0
let max = 1000
let pares = 0

// comentado pois interfere no cod abaixo 
// while (n<max) {
//     console.log("JS - " + n);
//     if(n>10) {
//         break
//     }
//     n++
// }
//console.log("")

for(let i=n;i<max;i++) {
    if(i%2==0){
        console.log(i)
        continue
    }
    pares++
    
}

console.log("qnt de pares:" + pares)