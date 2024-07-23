const p_temp = document.getElementById("p_temp")
const p_nivel = document.getElementById("p_nivel")
const p_press = document.getElementById("p_press")
const btn_texto = document.getElementById("btn_texto")

const obterDados=()=>{
    const endpoint = 'https://02a3d7df-de8d-43ec-99fa-32f61db34f8f-00-21f3mf9wlmxml.picard.replit.dev/"'
fetch(endpoint)
.then(res=>res.json())
.then(dados=>{
    console.log(dados)
    p_temp.innerHTML = "Temperatura: " + dados.temperatura
    p_nivel.innerHTML = "Nível: " + dados.nivel
    p_press.innerHTML = "Pressão: " + dados.pressao
})
}

// let intervalo = setInterval(obterDados, 2000)


//esses dados foram pegos do usuário e vão ser transferidos ao banco de dados:
let dados={ 
    nome: "Luanderson",
    canal: "CFBCursos",
    curso: "JavaScript",
}

let cabecalho = {
    method: "POST",
    body:JSON.stringify(dados)
}

const gravarDados=()=>{
    const endpoint = 'https://02a3d7df-de8d-43ec-99fa-32f61db34f8f-00-21f3mf9wlmxml.picard.replit.dev/"'
    fetch(endpoint, cabecalho)
    .then(res=>res.json())
    .then(ret=>{
        console.log(ret)
    })
}

btn_texto.addEventListener("click", ()=>{
     gravarDados();
 })

/*
 API no replit.com

 var http = require('http');
http.createServer(function(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.writeHead(200, {'Content-Type': 'application/json'});

  let numero = {
    temperatura: Math.round(Math.random() * 10),
    nivel: Math.round(Math.random() * 10),
    pressao: Math.round(Math.random() * 10)
  }

  res.end(JSON.stringify(numero)); 
}).listen(8080);



*/