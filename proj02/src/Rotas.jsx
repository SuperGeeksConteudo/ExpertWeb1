// importando o React e o ReactRouterDOM
import React from "react" 
import { BrowserRouter, Routes, Route } from "react-router-dom" 

// importando as pages
import Inicio from "./pages/Inicio" 
import Postagem from "./pages/Postagem"

// exportando a function do component
export default function Rotas() { 

    // retornando as Rotas
    return <BrowserRouter> 
        <Routes> 

            <Route index path="/" element={ <Inicio/> }/> 
            
            <Route path="/postagem/:nome/:descricao" element={ <Postagem/> }/>

        </Routes> 
    </BrowserRouter> 
}
