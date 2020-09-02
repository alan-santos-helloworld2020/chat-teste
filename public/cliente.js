var messenger = {


    props: {

        ms:{},
        userself:{
            type:String
        }

    },
    data:()=>{
     

        return{
            user:{
                data:"col s12 center green lighten-4",
                hora:"col s12 center green lighten-5",
                nome:"col s12 left purple-text",
                msg:"col s12 left grey lighten-5"

        }
    }

    },
    template: `
    <div class="row">
        <div class="col s10 push-s1">

            <div :class="userself">
                <div>Data: {{ms.data}}</div>
            </div>

            <div :class="user.hora">
                <div>Hora: {{ms.hora}}</div>
            </div>

            <div :class="user.nome">
                <div>{{ms.nome}}</div>
            </div>

            <div :class="user.msg">
                <div>{{ms.mensagem}}</div>
            </div>

        </div>
    </div>
 
    `

};

//**************************************************************** */

let root = new Vue({

    el: "#root",
  
    data: {
        socket: io(),
        msg: {
            id: null,
            data: null,
            hora: null,
            nome: null,
            mensagem: null,
            style:""
        },
        pac_msg: []
    },
    created() {

        do {

            this.msg.nome = prompt("Informe seu nome");


        } while (!this.msg.nome);

    },
    methods: {
        enviar() {

            this.socket.emit('online', this.msg);
            this.msg.mensagem = null;


        },
        resposta() {

            this.socket.on('online', (msg) => {
                if (msg.nome == this.msg.nome) {
                    msg.style="center green lighten-4";
                    msg.nome = "Você";
                    
                                        
                }else{
                    msg.style = "center blue lighten-4";

                }

                this.pac_msg.push(msg);
                return false;
            });
        }

    },
     
     components:{"my-msg":messenger}
    

}).resposta();






