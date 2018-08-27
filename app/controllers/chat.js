module.exports.iniciaChat = (app,req,res) =>{

    let dataform = req.body;

    req.assert('apelido','Nome ou apelido é obrigatorio').notEmpty();
    req.assert('apelido', 'deve conter entre 3 e 15 caracteres').len(3,15);

    let err = req.validationErrors();
    
    if(err){
        res.render("index",{validacao:err});
        return;
    }

    res.render("chat");
}