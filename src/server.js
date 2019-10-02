const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes')

const app = express('mongodb+srv://omnistack:omnistack@omnistack-q69s6.mongodb.net/test?retryWrites=true&w=majority', { 
   useNewUrlParser: true,
   useUnifiedTopology: true,
});

mongoose.connect

/* GET - buscar infomação no back-end
POST - criar uma nova infomação no back-end, exemplo um cadastro
PUT - editar uma infomação no back-end, exemplo um usuario
DELETE - deleta uma infomação no back-end

req.query - Acessa o query paramns, parametros da url. (para filtros)
exemplo: req.query.<parametro especifico>
req.params - Acessar route params (para edicao, delete)
exemplo: req.params.<parametro especifico>
req.body - Acessar corpo da requisicao (para criaçao, edicao)
*/

app.use(express.json());
app.use(routes);

app.listen(3333); 