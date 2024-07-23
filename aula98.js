// retorna um objeto tipo Symbol que tem um identificador unico. Podemos acessar propridades dentro de classes, ou gerar um identificador único. 

const s1 = Symbol()
const s2 = Symbol()


console.log(s1);
console.log(s2);

console.log(s1===s2) //o Symbol sempre tem um identificador diferente, nunca será igual.

const s3 = Symbol.for("Bruno")
const s4 = Symbol.for("Bruno")

console.log(s3);
console.log(s4);

console.log(s3===s4) //Agora que definimos o identificador global manualmente, ele pode ser igual

console.log(Symbol.keyFor(s3)); //Keyfor trabalha apenas com quem ganhou um identificador global, >console.log(Symbol.keyFor(s1))< da undefined