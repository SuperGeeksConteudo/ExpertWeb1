// importando o React e o ReactDOM
import React from "react" 
import { createRoot } from "react-dom/client" 

// importando o component Componente
import Componente from "./Componente"

// criando o contetor e a origem
const contentor = document.getElementById("root") 
const origem = createRoot(contentor) 

//const botao = <button> Clica em mim! </button>

//const nome = "Pedro" 
//const titulo = <h1> Meu nome é { nome }! </h1>

// renderizando o component
origem.render(<Componente/>)