// importando o Express e o CORS
import express from "express" 
import cors from "cors"

// importando os conteudos
import conteudos from "./conteudos.js"

// criando o servidor
const servidor = express() 

// definindo o funcionamento do CORS
servidor.use(cors()) 

// definindo o express para receber e enviar JSON
servidor.use(express.json())

// criando rota "/"
servidor.get("/", function(requisicao, resposta) { 
    resposta.json({ mensagem: "Olá Mundo!" }) 
})

// criando rota "/api"
servidor.get("/api", function(requisicao, resposta) { 
    resposta.status(200).json(conteudos) 
})

// criando rota 404
servidor.get("*", function(requisicao, resposta) { 
    resposta.sendStatus(404) 
})

// ligando o servidor
servidor.listen(4000, function() { 
    console.log("SERVIDOR EM FUNCIONAMENTO!") 
    console.log("http://localhost:4000/") 
})
