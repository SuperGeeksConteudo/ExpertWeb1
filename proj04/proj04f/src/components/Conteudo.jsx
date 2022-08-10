// importando o React e o Styled Components
import React from "react" 
import styled from "styled-components"

// criando modelo Campo
const ModeloConteudo = styled.div` 
    display: flex; 
    flex-direction: 
    column; width: 200px; 
`

const ConteudoCapa = styled.img` 
    height: 280px; 
    transition: 0.2s; 

    &:hover { 
        transform: scale(120%); 
        transition: 0.5s; 
    } 
`

const ConteudoTitulo = styled.div` 
    margin: 16px 0; 
    text-align: center; 
`

const ConteudoInfo = styled.div` 
    color: #555; 
    font-size: 12pt; 
    text-align: center; 
`

// exportando a function do component
export default function Conteudo(props) { 

    // retornando os elementos visuais
    return <ModeloConteudo> 

        <ConteudoCapa src={ props.capa } alt="capa do livro"/> 

        <ConteudoTitulo> { props.titulo } </ConteudoTitulo> 

        <ConteudoInfo> { props.genero.join(", ") } </ConteudoInfo> 
        <ConteudoInfo> { props.ano } </ConteudoInfo> 
        <ConteudoInfo> { props.autor } </ConteudoInfo> 

    </ModeloConteudo> 
}
