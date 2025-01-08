var controller = {
    inicio: function(req,res) {
        return res.status(200).send({message: "<h1>  Hola 2</h1>"})
    }
}

module.exports=controller;