import {Cxmsg} from "./cxmsg2.js"

const titulo = "Erro";
const texto = "Login não efetuado! Usuário ou senha incorretos.";

const config_callback={
    cor: "rgb(106, 35, 35)",
    tipo: "ok",
    comando_sn: null
};

const config_login={
    cor: "rgb(106, 35, 35)",
    img: "0dead.png",
    endpoint: "https://5a72493b-be22-4c35-a0f6-ba012ae6021a-00-3icrzf9xsvybj.spock.replit.dev/"
};

const callback_ok=()=>{
}
const callback_nao=()=>{
    Cxmsg.mostrar(config_callback, titulo, texto);
}

Login.login(callback_ok, callback_nao, config_login);




//https://5a72493b-be22-4c35-a0f6-ba012ae6021a-00-3icrzf9xsvybj.spock.replit.dev/?matricula=123&senha=321