let app  = require('./config/express');


let porta = 3000;

let server = app.listen(porta,()=>{
    console.log(`Servidor online na porta ${porta}`)
});

let io = require('socket.io').listen(server);

app.set("io",io); 

io.on('connection',(socket)=>{
    console.log("Usuário Conectou");

    socket.on('disconnect',()=>{
        console.log("Usuátio desconectou");
        
    });

    socket.on('msgParaServidor',data=>{
  
        /*dialogos*/
        socket.emit('msgParaCliente',{apelido: data.apelido,
                                      mensagem: data.mensagem      
        });

        socket.broadcast.emit('msgParaCliente',{apelido: data.apelido,
            mensagem: data.mensagem      
        });
        
        /* participantes */

        if(parseInt(data.apelido_cliente) == 0){
            socket.emit('participantesParaCliente',
                                    {apelido: data.apelido,
            
            });

            socket.broadcast.emit('participantesParaCliente',
                                    {apelido: data.apelido  
            });
        }
    });

});
