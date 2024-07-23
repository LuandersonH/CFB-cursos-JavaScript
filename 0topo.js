const head = document.head
const body = document.body
const css = "<link rel='stylesheet' href='0topo.css'></link>"

head.innerHTML+=css

const topo = document.createElement("div")
topo.setAttribute("id", "topo")
topo.setAttribute("class", "topo")
console.log(topo);
body.prepend(topo) //prepend é como o appendChild, porém, ele adiciona o elemento no começo, o appen add no fim.

const logo = 
    "<div id='logo' class='logo'>" +
        "<img src='0dead.png' width='400px'>" +
    "</div>"

const login = 
    "<div id='login' class='login'>" +
        "<label for='user'>User:</label>" +
        "<input type='text' name='user' id='user'>" +
    "</div>"

topo.innerHTML += logo
topo.innerHTML += login