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

});
