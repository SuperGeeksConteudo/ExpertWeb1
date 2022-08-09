// importando o React, UseState e o Styled Components
import React, { useState } from "react"
import styled from "styled-components"

// criando modelo Conteudo
const ModeloConteudo = styled.div` 
    background: ${
        props => props.estado ? "white" : "#eee"
    }; 
    margin-bottom: 16px; 
    padding: 16px;
    text-align: center;
    text-decoration: ${
        props => props.estado ? "line-through" : "none"
    };
`

// exportando a function do component
export default function Conteudo(props) { 

    // criando estados
    const [ feito, definirFeito ] = useState(false)

    // criando function para salvar estado
    function Alternar() {
        definirFeito(!feito)
    }

    // retornando os elementos visuais
    return <ModeloConteudo onClick={ Alternar } estado={ feito }> 

        { props.texto } 

    </ModeloConteudo> 
}
