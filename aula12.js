// const soma = (v1, v2, v3) => {
//     return v1 + v2 + v3;
// }

// let valores = [1, 4, 5, 9];

// console.log(soma(...valores));


const jogador1={nome:"Bruno", energia: 100, vida: 3, magia: 40}

const jogador2={nome:"Cesar", energia: 120, vida: 5, velocidade: 50}

const jogador3={...jogador2,...jogador1}

console.log(jogador3)