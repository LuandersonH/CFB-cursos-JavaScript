//Propriedades Estáticas: São associadas à classe e não a uma instância específica. Isso significa que você pode acessar e modificar essa propriedade diretamente pela classe.

//Métodos Estáticos: São funções que pertencem à classe e não a qualquer instância da classe. Você pode chamá-los diretamente na classe.

class Npc {
    static alerta=false
    // alerta pertence à classe Npc e não às suas instâncias. Todos os objetos criados a partir da classe Npc compartilham a mesma propriedade alerta.    
    
    constructor(energia){
        this.energia=energia
    }

    info=function(){
        console.log(`Energia: ${this.energia}`);
        console.log(`Alerta: ${(Npc.alerta?"sim":"não")}`);
        console.log("-------------------");
    }

    static alertar=function(){ //Função da CLASSE, e não da INSTÂNCIA.
        Npc.alerta = true 
    }
}

const NPC1 = new Npc(100)
const NPC2 = new Npc(80)
const NPC3 = new Npc(30)

Npc.alertar() // Todos da classe serão alertados, não somente uma instância

NPC1.info()
NPC2.info()
NPC3.info()