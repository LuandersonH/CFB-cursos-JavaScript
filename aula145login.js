class Login {
    static logado = false;
    static matlogado = null;
    static nomelogado = null;
    static acessologado = null;
    static estilocss = null;
    static endpoint = "https://5a72493b-be22-4c35-a0f6-ba012ae6021a-00-3icrzf9xsvybj.spock.replit.dev/";

    static login=(mat, pas)=>{
        this.endpoint += `?matricula=${mat}&senha=${pas}`;
        console.log(this.endpoint);
        
        this.estilocss = 
            ".fundoLogin {display: flex; justify-content: center; align-items: center; width: 100%; height: 100vh; position: absolute; top: 0px; left: 0px; background-color: rgba(0,0,0,0.75); box-sizing: border-box;}" +
            ".baseLogin {display: flex; justify-content: center; align-items: stretch; width: 500px; box-sizing: inherit;}" +
            ".logoLogin {display: flex; justify-content: center; align-items: center; width: 50%; background-color: rgb(106, 35, 35); padding: 10px; border-radius: 0px 10px 10px 0px; box-sizing: inherit;}" +
            ".elementosLogin {display: flex; justify-content: center; align-items: flex-start; flex-direction: column; width: 50%; background-color: #eee; padding: 10px; border-radius: 10px 0px 0px 10px; box-sizing: inherit;}" +
            ".campoLogin {display: flex; align-items: flex-start; justify-content: flex-start; flex-direction: column; width: 100%;; box-sizing: inherit; margin-bottom: 10px;}" +
            ".campoLogin label {font-size: 18px;}" +
            ".campoLogin input {width: 95%; padding: 5px; background-color: #bbb; border: 1px solid rgb(0, 0, 0); border-radius: 5px;}" +
            ".botoesLogin {display: flex;justify-content: space-around;align-items: center;width: 100%;box-sizing: inherit;}" +
            ".botoesLogin button {cursor: pointer; background-color: rgb(106, 35, 35); border-radius: 5px; padding: 10px 0px; margin: 0px; width: 100px;box-sizing: inherit;}" +
            ".logoLogin img {width: 150px; height: 100px; box-sizing: inherit;}"

        const styleEstilo = document.createElement("style");
        styleEstilo.setAttribute("id", "id_estiloLogin");
        styleEstilo.setAttribute("rel", "stylesheet");
        styleEstilo.setAttribute("type", "text/css");
        styleEstilo.innerHTML = this.estilocss;
        document.head.appendChild(styleEstilo);
        

        fetch(this.endpoint)
            .then(res=>res.json())
            .then(res=>{
                if(res) {
                    this.logado = true;
                    this.matlogado = mat;
                    this.nomelogado = res.nome;
                    this.acessologado = res.acesso;
                    console.log(res);   
                } else { 
                    console.log("Usuário não encontrado");
                }

            }) 

            .catch(err => {
                console.error('Erro na requisição:', err);
            });
    }
};

export {Login};