// importando o React e o Styled Components
import React from "react"
import styled from "styled-components"  

// criando os modelos
const ModeloConteudo = styled.div` 
    background: #3b424c; 
    border-radius: 16px;
    margin-bottom: 16px; 
    padding: 16px; 
`

const ConteudoTopo = styled.div` 
    display: flex; 
    gap: 16px;
`

const ConteudoFoto = styled.img` 
    border-radius: 100%;
    height: 96px; 
    width: 96px;
`

const ConteudoNome = styled.div` 
    align-self: center; 
    color: #2ca8f2;
`

const ConteudoDescricao = styled.div` 
    margin-top: 16px; 
    text-align: justify;
`

// exportando a function do component
export default function Campo(props) {
    
    // retornando os elementos visuais
    return <ModeloConteudo> 

        <ConteudoTopo> 

            <ConteudoFoto src={ props.foto } alt="foto"/> 
            
            <ConteudoNome> { props.nome } </ConteudoNome> 
        
        </ConteudoTopo> 

        <ConteudoDescricao>
            
            { props.descricao } 
            
        </ConteudoDescricao>

    </ModeloConteudo>
}