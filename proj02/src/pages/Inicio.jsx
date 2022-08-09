// importando o React
import React from "react"

// importando os components
import Titulo from "../components/Titulo"
import Campo from "../components/Campo" 
import Conteudo from "../components/Conteudo" 

// exportando a function do component
export default function Inicio() { 

    // retornando os elementos visuais
    return <> 

        <Titulo nome="Mergulhando no React"/>  

        <Campo>

            <Conteudo 
                foto="/pessoa1.jpg" 
                nome="@pessoa1" 
                descricao="Lorem ipsum dolor sit amet consectetur adipisicing elit." 
            />

            <Conteudo 
                foto="/pessoa2.jpg" 
                nome="@pessoa2" 
                descricao="Lorem ipsum dolor sit amet consectetur adipisicing elit." 
            />

        </Campo>
        
    </> 
}