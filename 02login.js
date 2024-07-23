class Login {
    static logado = false;
    static matlogado = null;
    static nomelogado = null;
    static acessologado = null;
    static endpoint = "https://5a72493b-be22-4c35-a0f6-ba012ae6021a-00-3icrzf9xsvybj.spock.replit.dev/";

    static login=(mat, pas)=>{
        console.log(mat);
        console.log(pas);
        
        
        this.endpoint += `?matricula=${mat}&senha=${pas}`;
        console.log(this.endpoint);
        
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