module.exports.iniciaChat = (app,req,res) =>{

    let dataform = req.body;

    req.assert('apelido','Nome ou apelido é obrigatorio').notEmpty();
    req.assert('apelido', 'deve conter entre 3 e 15 caracteres').len(3,15);

    let err = req.validationErrors();
    
    if(err){
        res.render("index",{validacao:err});
        return;
    }

    app.get('io').emit(
        'msgParaCliente',
        {apelido: dataform.apelido, mensagem:`${dataform.apelido}, acabou de entrar no chat`}
    )


    res.render("chat",{dataform: dataform});
}