// importando o React e o Styled Components
import React from "react" 
import styled from "styled-components"

// criando modelo Campo
const ModeloTitulo = styled.div` 
    background-image: url(${ 
        props => props.imagem 
    });
    background-position: center; 
    background-size: cover;
    padding: 32px; 
`

const TituloNome = styled.div` 
    color: #666; 
    font-size: 32pt; 
    margin-top: 160px; 
    text-align: center; 
`

// exportando a function do component
export default function Titulo(props) { 

    // retornando os elementos visuais
    return <ModeloTitulo imagem={ props.imagem }> 

        <TituloNome> 
            
            { props.nome } 
            
        </TituloNome> 

    </ModeloTitulo> 
}
