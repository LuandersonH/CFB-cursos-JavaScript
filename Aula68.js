class Carro {
    constructor(tipo, estagioTurbo){
        this.turbo=new Turbo(estagioTurbo)
        if (tipo==1) {
            this.velMax = 120
            this.nome = "normal"
        } else if (tipo==2) {
            this.velMax = 160
            this.nome = "esportivo"
        } else if (tipo==3) {
            this.velMax = 200
            this.nome = "super esportivo"
        }
        this.velMax += this.turbo.pot
    }
    info(){
        console.log(`Nome: ${this.nome}, Turbo.: ${this.turbo.pot}, velMax: ${this.velMax}\n-----------);`)
    }
}

class Turbo {
    constructor(e){
        if (e==0) {
            this.pot=0
        } else if(e==1){
            this.pot = 50
        } else if (e==2) {
            this.pot = 70
        } else if (e==3) {
            this.pot = 100
        }
    }
}

class carroEspecial extends Carro{
    constructor(estagioTurbo){
        super(4, estagioTurbo)
        this.velMax=300 + this.turbo.pot
        this.nome="Carro especial"
    }
    info(){
        console.log("Nome:" + this.nome)
        console.log("Turbo:" + this.turbo.pot)
        console.log("VelMax.:" + this.velMax)
        console.log("-----------------------");
    }
}

const c1 = new Carro(1, 0)
const c2 = new Carro(1, 1)
const c3 = new carroEspecial(1)
const c4 = new carroEspecial(2)
const c5 = new carroEspecial(3)

c1.info() // Esse carro é do tipo normal, então vai usar o info() setado na classe Carro

c5.info() // Esse carro é do tipo especial, então na info(), a info() da classe carroEspecial vai ser utilizada, mesmo a classe carroEspecial sendo filha da classe Carro, a info() dela vai sobreescrever a info() da classe mãe. 

