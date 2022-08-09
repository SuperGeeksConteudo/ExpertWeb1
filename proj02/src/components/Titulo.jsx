// importando o React e o Styled Components
import React from "react"
import styled from "styled-components"  

// criando modelo Titulo
const ModeloTitulo = styled.div` 
    color: #2da9f3; 
    font-size: 32pt; 
    padding: 32px 0; 
    text-align: center; 
`

// exportando a function do component
export default function Titulo(props) {
    
    // retornando os elementos visuais
    return <ModeloTitulo> 

        { props.nome }
        
    </ModeloTitulo>
}