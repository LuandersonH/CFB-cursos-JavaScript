class Carro{
    constructor(pnome, pano, ptipo){
        this.nome=pnome
        this.ano=pano
        this.tipo=ptipo
    }
    getNome(){
        return this.nome
    }
    getAno(){
        return this.ano
    }
    getTipo(){
        return this.tipo
    }

    info(){
        return console.log(`Nome: ${this.nome}, Ano: ${this.ano}, Tipo: ${this.tipo}`);
    }

    setNome(nome){
        return this.nome=nome
    }
    setAno(ano){
        return this.ano=ano
    }
    setTipo(tipo){
        return this.tipo=tipo
    }
}

let c1 = new Carro("camaro", 2020, "Esportivo")
let c2 = new Carro("Fusca", 1985, "Antigo")

c1.setAno(2023)

c1.info()
c2.info()
