// importando o React e o Styled Components
import React from "react" 
import styled from "styled-components"

// criando modelo Titulo
const Titulo = styled.h1` 
    color: #eb211e; 
    font-size: 42px; 
    letter-spacing: 2px; 
`

// exportando a function do component
export default function Componente() { 

    // retornando os elementos visuais
    return <div> 

        <Titulo> Pousando em React! </Titulo>

        <p> SuperGeeks </p> 

        {/* <img src="http://picsum.photos/128/128" alt="foto aleatória"/> */}

        <img src="/foto.jpg" alt="foto"/> 
        
    </div> 
}
