// importando o React, UseState, UseEffect e Axios
import React, { useState, useEffect } from "react"
import axios from "axios"

// importando os components
import Titulo from "./components/Titulo" 
import Campo from "./components/Campo" 
import Conteudo from "./components/Conteudo"

// exportando a function do component
export default function Inicio() { 

    // criando estados
    const [ codigos, definirCodigos ] = useState([])
    const [ conteudos, definirConteudos ] = useState({})

    // consumindo o servidor API
    useEffect(function() {

        axios.get("http://localhost:4000/api") 

        .then(function(resposta) { 

            const dados = resposta.data 
            const lista = Object.keys(dados)
            
            definirCodigos(lista)
            definirConteudos(dados) 
        }) 

        .catch(function(erro) { 

            console.log(erro) 
        })
    }, [])    

    // retornando os elementos visuais
    return <> 

        <Titulo 
            nome="Acelerando com o Express" 
            imagem="https://i.ibb.co/PDztrZZ/4gd8.jpg" 
        />

        <Campo>
            {
                codigos.map(function(codigo) { 

                    return <Conteudo 
                        key={ codigo } 
                        titulo={ conteudos[codigo].titulo } 
                        autor={ conteudos[codigo].autor } 
                        ano={ conteudos[codigo].ano } 
                        genero={ conteudos[codigo].genero }
                        capa={ conteudos[codigo].capa }  
                    /> 
                
                }) 
            } 
        </Campo>
    </> 
}
