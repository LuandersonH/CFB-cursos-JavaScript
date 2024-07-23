const objetos = document.getElementById("objetos")

const computador = {
    cpu: "",
    ram: "",
    hd: "",
    
    info:function() {
        console.log(`CPU: ${this.cpu}`);
        console.log(`RAM: ${this.ram}`);
        console.log(`HD: ${this.hd}`);
    }
}

computador["monitor"]="22pol"
computador.placaVideo="rtx"
delete(computador.hd)
/* UTILIZAÇÃO DO ASSIGN PARA CLONAR OBJETOS E MESCLAR OBJETOS */
/* Clonar */
const c1 = Object.assign({}, computador)
    console.log(computador);
    c1.info()

/* Mesclar */
const o1 = {obj1: '1'}
const o2 = {obj2: '2'}
const o3 = {obj3: '3'}
const o4 = Object.assign(o1, o2, o3)
console.log(o4);

// Aqui eu crio um novo objeto, com base em um outro objeto base, nessa caso, "computador", e posso alterar suas propriedades, sem alterar as propriedades do objeto base.
const c2 = Object.create(computador)
    c2.cpu="i9"
    c2.ram="32gb"
    c2.hd="1TB"
    c2.info()

const computadores = [
    {
        cpu: "i9",
        ram: "64gb",
        hd: "2tb"
    },
    {
        cpu: "15",
        ram: "32gb",
        hd: "1tb"
    },
    {
        cpu: "i3",
        ram: "8gb",
        hd: "500mb"
    },
]


computadores.forEach((c)=>{
    //console.log(c);
    const div = document.createElement("div")
    div.innerHTML = c.cpu + "<br/>" + c.ram + "<br/>" + c.hd + "<br/>";
    div.setAttribute("class", "computador")
    objetos.appendChild(div)
})
