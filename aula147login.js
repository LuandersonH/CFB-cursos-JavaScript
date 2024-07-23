class Login {
    static mat = null;
    static pas = null;
    static logado = false;
    static matlogado = null;
    static nomelogado = null;
    static acessologado = null;
    static estilocss = null;
    static config = {
        cor: "rgb(106, 35, 35)",
        img: "0dead.png"
    }

    static login=(           config=null)=>{
        if (config!=null) {
            this.config=config;
        }
        // console.log(this.endpoint);
        
        const fundoLogin = document.createElement("div");
        fundoLogin.setAttribute("id", "fundoLogin");
        fundoLogin.setAttribute("class", "fundoLogin");
        document.body.prepend(fundoLogin);

        const baseLogin = document.createElement("div");
        baseLogin.setAttribute("id", "baseLogin");
        baseLogin.setAttribute("class", "baseLogin");
        fundoLogin.prepend(baseLogin);

        const elementosLogin = document.createElement("div");
        elementosLogin.setAttribute("id", "elementosLogin");
        elementosLogin.setAttribute("class", "elementosLogin");
        baseLogin.prepend(elementosLogin);

        const campoLogin1 = document.createElement("div");
        campoLogin1.setAttribute("id", "campoLogin");
        campoLogin1.setAttribute("class", "campoLogin");
        elementosLogin.prepend(campoLogin1);

        const labelUser = document.createElement("label");
        labelUser.setAttribute("for", "f_username");
        labelUser.innerHTML = "User:";
        campoLogin1.prepend(labelUser);

        const inputUser = document.createElement("input");
        inputUser.setAttribute("type", "text");
        inputUser.setAttribute("name", "f_username");
        inputUser.setAttribute("id", "f_username");
        campoLogin1.appendChild(inputUser);

        const campoLogin2 = document.createElement("div");
        campoLogin2.setAttribute("class", "campoLogin");
        campoLogin2.setAttribute("id", "campoLogin");
        elementosLogin.appendChild(campoLogin2);

        const labelSenha = document.createElement("label");
        labelSenha.setAttribute("for", "f_senha");
        labelSenha.innerHTML = "Senha:";
        campoLogin2.prepend(labelSenha);

        const inputSenha = document.createElement("input");
        inputSenha.setAttribute("type", "password");
        inputSenha.setAttribute("name", "f_senha");
        inputSenha.setAttribute("id", "f_senha");
        campoLogin2.appendChild(inputSenha);

        const botoesLogin = document.createElement("div");
        botoesLogin.setAttribute("id", "botoesLogin");
        botoesLogin.setAttribute("class", "botoesLogin");
        elementosLogin.appendChild(botoesLogin);

        const btn_login = document.createElement("button");
        btn_login.setAttribute("id", "btn_login");
        btn_login.innerHTML = "Login";
        botoesLogin.appendChild(btn_login);
        btn_login.addEventListener("click", (evt)=>{
            this.verificaLogin()
        })

        const btn_cancelar = document.createElement("button");
        btn_cancelar.setAttribute("id", "btn_cancelar");
        btn_cancelar.innerHTML = "Cancelar";
        botoesLogin.appendChild(btn_cancelar);
        btn_cancelar.addEventListener("click", (evt)=>{this.fechar(); alert("Operação cancelada");});

        const logoLogin = document.createElement("div");
        logoLogin.setAttribute("id", "logoLogin");
        logoLogin.setAttribute("class", "logoLogin");
        baseLogin.appendChild(logoLogin);

        const img = document.createElement("img");
        img.setAttribute("src", this.config.img);
        img.setAttribute("alt", "Logo do Deadpool");
        logoLogin.appendChild(img);
        
        this.estilocss = 
            ".fundoLogin {display: flex; justify-content: center; align-items: center; width: 100%; height: 100vh; position: absolute; top: 0px; left: 0px; background-color: rgba(0,0,0,0.75); box-sizing: border-box;}" +
            ".baseLogin {display: flex; justify-content: center; align-items: stretch; width: 500px; box-sizing: inherit;}" +
            `.logoLogin {display: flex; justify-content: center; align-items: center; width: 50%; background-color: ${this.config.cor}; padding: 10px; border-radius: 0px 10px 10px 0px; box-sizing: inherit;}` +
            ".elementosLogin {display: flex; justify-content: center; align-items: flex-start; flex-direction: column; width: 50%; background-color: #eee; padding: 10px; border-radius: 10px 0px 0px 10px; box-sizing: inherit;}" +
            ".campoLogin {display: flex; align-items: flex-start; justify-content: flex-start; flex-direction: column; width: 100%;; box-sizing: inherit; margin-bottom: 10px;}" +
            ".campoLogin label {font-size: 18px;}" +
            ".campoLogin input {width: 95%; padding: 5px; background-color: #bbb; border: 1px solid rgb(0, 0, 0); border-radius: 5px;}" +
            ".botoesLogin {display: flex;justify-content: space-around;align-items: center;width: 100%;box-sizing: inherit;}" +
            `.botoesLogin button {cursor: pointer; background-color: ${this.config.cor}; border-radius: 5px; padding: 10px 0px; margin: 0px; width: 100px;box-sizing: inherit;}` +
            ".logoLogin img {width: 150px; height: 100px; box-sizing: inherit;}"

        const styleEstilo = document.createElement("style");
        styleEstilo.setAttribute("id", "id_estiloLogin");
        styleEstilo.setAttribute("rel", "stylesheet");
        styleEstilo.setAttribute("type", "text/css");
        styleEstilo.innerHTML = this.estilocss;
        document.head.appendChild(styleEstilo);

        
    }

    static verificaLogin = ()=>{
        let mat = document.getElementById("f_username").value;
        let pas = document.getElementById("f_senha").value;
        const endpoint = `https://5a72493b-be22-4c35-a0f6-ba012ae6021a-00-3icrzf9xsvybj.spock.replit.dev/?matricula=${mat}&senha=${pas}`;
        
        fetch(endpoint)
            .then(res=>res.json())
            .then(res=>{
                if(res) {
                    this.logado = true;
                    this.matlogado = mat;
                    this.nomelogado = res.nome;
                    this.acessologado = res.acesso;
                    this.fechar()
                } else { 
                    this.logado = false;
                    this.matlogado = null;
                    this.nomelogado = null;
                    this.acessologado = null;
                    alert("Erro no login! Username ou senha incorretos.")
                }

            }) 

            .catch(err => {
                console.error('Erro na requisição:', err);
            });
        
        // if(mat=="123" && pas=="321") {
        //     return true;
        // } else {
        //     return false;
        // }  
    }
    
    static fechar = ()=>{
        const fundoLogin = document.getElementById("fundoLogin");
        fundoLogin.remove();
        const id_estiloLogin = document.getElementById("id_estiloLogin");
        id_estiloLogin.remove();
    }
};

export {Login};