// importando o React e o Styled Components
import React from "react"
import styled from "styled-components"  

// criando modelo Campo
const ModeloCampo = styled.div` 
    background: #303741; 
    border-radius: 16px;
    padding: 16px; 
`

// exportando a function do component
export default function Campo(props) {
    
    // retornando os elementos visuais
    return <ModeloCampo>

        { props.children }
        
    </ModeloCampo>
}