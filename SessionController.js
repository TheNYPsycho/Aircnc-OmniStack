/*
index - retornar uma lista de session(seções)
show - listar uma unica session(seção)
store - criar uma session(seção)
update - alterar uma session(seção)
destroy - remover uma session(seção)
*/

const User = require('../models/User');

module.exports = { 
    //async - ela pode demorar para executar
    async store(req, res) {
        const { email } = req.body;
        //await - espera a extrusao a sua frente finaliza       
        const user = await User.create({ email });
        
        return res.json(user);
    } 
};