const objetos = document.getElementById("objetos")

const computador = {
    cpu: "i9",
    ram: "64gb",
    hd: "2tb",
    
    info:function() {
        console.log(`CPU: ${this.cpu}`);
        console.log(`RAM: ${this.ram}`);
        console.log(`HD: ${this.hd}`);
    }
}

computador["monitor"]="22pol"
computador.placaVideo="rtx"
console.log(computador);

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
    console.log(c);
    const div = document.createElement("div")
    div.innerHTML = c.cpu + "<br/>" + c.ram + "<br/>" + c.hd + "<br/>";
    div.setAttribute("class", "computador")
    objetos.appendChild(div)
})
