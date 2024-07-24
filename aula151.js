import {Cxmsg} from "./cxmsg2.js"


const config={
    cor: "rgb(106, 35, 35)",
    tipo: "ok",
    comando_sn: null
};

const titulo = "Erro";
const texto = "Login não efetuado! Usuário ou senha incorretos.";

const callback_ok=()=>{
    alert("Login efetuado com sucesso!");
}

const callback_nao=()=>{
    Cxmsg.mostrar(config, titulo, texto);
}

Login.login(callback_ok, callback_nao);




//https://5a72493b-be22-4c35-a0f6-ba012ae6021a-00-3icrzf9xsvybj.spock.replit.dev/?matricula=123&senha=321