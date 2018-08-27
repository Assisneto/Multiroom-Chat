let app  = require('./config/express');
let io   = require('socket.io');

let porta = 3000;

let server = app.listen(porta,()=>{
    console.log(`Servidor online na porta ${porta}`)
});

io.listen(server);

