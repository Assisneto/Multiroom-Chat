module.exports = (app) =>{
    app.get('/chat',(req,res)=>{
        app.app.controllers.chat.iniciaChat(app,req,res)
       });
    app.post('/chat',(req,res)=>{
        app.app.controllers.chat.iniciaChat(app,req,res)
    });
}   
