import React from "react";
import CadastrarTarefa from "./cadastrar-tarefa"

describe('teste do componente de cadastro de tarefas',()=>{

    it('deve renderizar o componente sem erros',()=>{
        const div = document.createElement('div');
        ReactDOM.render(<CadastrarTarefa/>,div);
        ReactDOM.unmountComponentAtNode(div);
    });
});