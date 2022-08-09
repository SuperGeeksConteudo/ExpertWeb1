// importando o React e o UseParams
import React from "react" 
import { useParams } from "react-router-dom"

// importando os components
import Titulo from "../components/Titulo"
import Campo from "../components/Campo" 
import Conteudo from "../components/Conteudo" 

// exportando a function do component
export default function Postagem() { 

    // recebendo os parâmetros
    const { nome, descricao } = useParams() 

    // retornando os elementos visuais
    return <> 

        <Titulo nome="Mergulhando no React"/> 

        <Campo> 

            <Conteudo 
                foto="/pessoa3.jpg" 
                nome={ "@" + nome } 
                descricao={ descricao } 
            /> 

        </Campo>
         
    </> 
}
