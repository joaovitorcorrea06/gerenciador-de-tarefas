import React from "react";
import AtualizarTarefa from "./atualizar-tarefa"

describe('teste do componente de atualizar de tarefas',()=>{

    it('deve renderizar o componente sem erros',()=>{
        const div = document.createElement('div');
        ReactDOM.render(<AtualizarTarefa id={1}/>,div);
        ReactDOM.unmountComponentAtNode(div);
    });
});