// importando o React e o Styled Components
import React from "react"
import styled from "styled-components"

// criando modelo Entrada
const ModeloEntrada = styled.input` 
    background: white; 
    border: none; 
    height: 42px; 
    font-size: 14pt; 
    margin: 0; 
    padding: 0; 
    text-align: center; 
    width: 100%;
`

export default function Entrada() { 

    // retornando os elementos visuais
    return <ModeloEntrada
        type="text" 
        placeholder="Digite um novo conteúdo" 
        name="conteudo"
    /> 
}
