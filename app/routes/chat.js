module.exports = (app) =>{
    app.get('/chat',(req,res)=>{
        res.render("chat");
       });
    app.post('/chat',(req,res)=>{
        res.render("chat")
    });
}   
