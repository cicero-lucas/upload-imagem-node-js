function updateSite(req,res){
    if(req.file){
        console.log(req.file)
        return res.json({mensagem:'imagem enviada com sucesso'})
       
    }else{
        return res.json({mensagem:"erro ao fazer o upload"})
    }
   
}

module.exports={
    updateSite
}