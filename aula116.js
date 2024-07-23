let lati = document.getElementById("lati")
let long = document.getElementById("long")


// navigator.geolocation = o navegador busca a localização

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(mostrarLocalizacao, erroLocalizacao)
} else {
    console.log("Geolocalização não suportada/desativada");
}

function mostrarLocalizacao(pos) {
    console.log(pos);
    lati.innerHTML = "latitude:" + pos.coords.latitude 
    long.innerHTML = "longitude:" + pos.coords.longitude
    console.log("----------");
    console.log("latitude:" + lati);
    console.log("longitude:" + long);
}

function erroLocalizacao() {
    console.log("Erro ao obter a localização");
}