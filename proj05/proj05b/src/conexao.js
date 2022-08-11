// importando o mongoose
import mongoose from "mongoose"

// criando constantes para a conexao
const endereco = "mongodb+srv://<USUARIO>:<SENHA>@<CLUSTER>.LINK.MONGODB.COM"
const configuracao = { useNewUrlParser: true, useUnifiedTopology: true }

// conectando com o mongodb
mongoose.connect(endereco, configuracao, function() {
    console.log("CONECTADO COM O BANCO DE DADOS!") 
})

// deixando a conexao do mongodb global
mongoose.Promise = global.Promise