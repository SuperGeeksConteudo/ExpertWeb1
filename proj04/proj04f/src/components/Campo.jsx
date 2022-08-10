// importando o React e o Styled Components
import React from "react" 
import styled from "styled-components"

// criando modelo Campo
const ModeloCampo = styled.div` 
    background: white; 
    padding: 32px; 
    margin: 32px 0; 
`

const CampoInterno = styled.div` 
    display: flex; 
    flex-wrap: wrap; 
    gap: 16px; 
    justify-content: center; 
`

// exportando a function do component
export default function Campo(props) { 

    // retornando os elementos visuais
    return <ModeloCampo> 
        <CampoInterno> 

            { props.children } 

        </CampoInterno> 
    </ModeloCampo> 
}
