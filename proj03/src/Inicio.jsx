// importação do React e UseState
import React, { useState } from "react"

// importação dos components
import Titulo from "./components/Titulo"
import Campo from "./components/Campo"
import Conteudo from "./components/Conteudo"
import Entrada from "./components/Entrada"

// exportando a function do component
export default function Inicio() { 

    // criando estados
    const [ lista, definirLista ] = useState([])

    // criando function para salvar estado
    function Adicionar(evento) { 
        const valor = evento.target.conteudo.value 
        definirLista([...lista, valor]) 
        evento.preventDefault() 
    }    

    // retornando os elementos visuais
    return <> 
        
        <Titulo nome="Velejando com o React"/>

        <Campo id="1">
            <form onSubmit={ Adicionar }>

                <Entrada/>

            </form>
        </Campo>

        <Campo id="2">
            {
                lista.map(function(item) {
                
                    return <Conteudo key={ item } texto={ item }/>

                })
            }
        </Campo>

    </> 
}
